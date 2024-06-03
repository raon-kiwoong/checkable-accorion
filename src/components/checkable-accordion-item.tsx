import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import CheckableAccordionItemType from "src/types/checkable-accordion-item-type";
import CheckableAccordion from "./checkable-accordion";
import { Box } from "@chakra-ui/react";
import CheckableAccordionLeafItem from "./checkable-accordion-leaf-item";
import CheckableAccordionItemHandleType from "src/types/checkable-accordion-item-handle-type";
import CheckableAccordionPropsType from "src/types/checkable-accordion-props-type";

const CheckableAccordionItem = React.forwardRef<
  CheckableAccordionItemHandleType,
  CheckableAccordionPropsType
>(({ data, onCheck, onClick }, parentRef) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const checkListRef = useRef<CheckableAccordionItemHandleType[]>([]);

  useImperativeHandle(parentRef, () => ({
    setChecked: (newVal: boolean, propagate?: boolean) => {
      if (propagate === true) {
        checkListRef.current.map((v) => v.setChecked(false, true));
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

  const onCheckHandler = (newVal: boolean, index: number) => {
    let allCheck = newVal;
    // console.log('--> onClickHandler: ', data.nm);
    checkListRef.current.forEach((v, ii) => {
      const curVal = ii === index ? newVal : v.isChecked();
      // console.log('-', curVal);

      allCheck = curVal && allCheck;
    });

    setChecked(allCheck);
    if (onClick) onClick(`${data.children![index].key}`);
    // onClick(allCheck);
  };

  return (
    <CheckableAccordion
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
          <Box key={c.key} w={"full"}>
            {c.children && c.children.length > 1 ? (
              <CheckableAccordionItem
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
              ></CheckableAccordionItem>
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

export default CheckableAccordionItem;
