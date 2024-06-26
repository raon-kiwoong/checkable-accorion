import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import CheckableAccordion from './checkable-accordion';
import { Box } from '@chakra-ui/react';
import CheckableAccordionLeafItem from './checkable-accordion-leaf-item';
import CheckableAccordionItemHandleType from 'types/checkable-accordion-item-handle-type';
import CheckableAccordionPropsType from 'types/checkable-accordion-props-type';
import CheckableAccordionHandleType from 'types/checkable-accordion-handle-type';
import { CheckableContext } from 'contexts/checkable-context/checkable-context';

const CheckableAccordionRoot = React.forwardRef<
  CheckableAccordionItemHandleType,
  CheckableAccordionPropsType
>(({ data, onCheck, onClick, rootBackground }, parentRef) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const checkAccordionRef = useRef<CheckableAccordionHandleType>(null);
  const checkListRef = useRef<CheckableAccordionItemHandleType[]>([]);

  const { hiddenMap, checkedMap } = useContext(CheckableContext);

  useImperativeHandle(parentRef, () => ({
    setChecked: (newVal: boolean, propagate?: boolean) => {
      if (propagate === true) {
        checkListRef.current.map((v) => v.setChecked(newVal, true));
      }
      setChecked(newVal);
    },
    isChecked: () => {
      return isChecked;
    },
    getCheckedList: () => {
      if (isChecked) {
        return [data];
      }

      let checkedListData: CheckableAccordionItemType[] = [];
      checkListRef.current.forEach((c, i) => {
        if (c.getCheckedList) {
          checkedListData = [...c.getCheckedList(), ...checkedListData];
        } else if (c.isChecked()) {
          checkedListData.push(data.children![i]);
        }
      });

      return checkedListData;
    },
  }));

  useEffect(() => {
    onCheck(isChecked);
    onClick!(`${data.key}`);
  }, [isChecked]);

  useEffect(() => {
    const checked = checkedMap[`${data.key}`] || false;
    setChecked(checked);
    if (checked) {
      checkListRef.current.map((v) => v.setChecked(checked, true));
    }
  }, [checkedMap]);

  const onCheckHandler = (newVal: boolean, index: number) => {
    let allCheck = newVal;
    checkListRef.current.forEach((v, ii) => {
      const curVal = ii === index ? newVal : v.isChecked();

      allCheck = curVal && allCheck;
    });

    setChecked(allCheck);
    if (onClick) onClick(`${data.children![index].key}`);
    // onClick(allCheck);
  };

  if (hiddenMap[data.key!] === true) return <></>;

  return (
    <CheckableAccordion
      ref={checkAccordionRef}
      background={rootBackground}
      key={data.key}
      data={data}
      checked={isChecked}
      onClick={(newVal) => {
        checkListRef.current.map((v) => v.setChecked(newVal, true));
        setChecked(newVal);
      }}
    >
      {data.children!.map((c, i) => {
        return (
          <Box key={c.key} w={'full'}>
            {c.children && c.children.length > 1 ? (
              <CheckableAccordionRoot
                ref={(r) => {
                  if (checkListRef.current && r) checkListRef.current[i] = r;
                }}
                key={c.key}
                onCheck={(newVal) => {
                  onCheckHandler(newVal, i);
                }}
                onClick={(key) => {
                  if (onClick) onClick(key);
                }}
                data={c}
              ></CheckableAccordionRoot>
            ) : (
              <CheckableAccordionLeafItem
                ref={(r) => {
                  if (checkListRef.current && r) checkListRef.current[i] = r;
                }}
                key={c.key}
                onCheck={(newVal) => {
                  onCheckHandler(newVal, i);
                }}
                data={c}
              />
            )}
          </Box>
        );
      })}
    </CheckableAccordion>
  );
});

export default CheckableAccordionRoot;
