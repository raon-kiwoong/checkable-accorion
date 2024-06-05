import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import { Checkbox, Flex, Text } from '@chakra-ui/react';
import CheckableAccordionItemHandleType from 'types/checkable-accordion-item-handle-type';
import { HiddenContext } from 'contexts/hidden-context/hidden-context';

const CheckableAccordionLeafItem = React.forwardRef<
  CheckableAccordionItemHandleType,
  {
    data: CheckableAccordionItemType;
    onCheck: (newVal: boolean) => void;
    // onChange: (value: boolean) => void;
  }
>(({ data, onCheck }, parentRef) => {
  const checkedRef = useRef<boolean>(false);
  const [isChecked, setChecked] = useState<boolean>(false);
  const { hiddenMap } = useContext(HiddenContext);

  useImperativeHandle(parentRef, () => ({
    setChecked: (newVal: boolean) => {
      setChecked(newVal);
    },
    isChecked: () => {
      return isChecked;
    },
  }));

  useEffect(() => {
    onCheck(isChecked);
  }, [isChecked]);

  if (hiddenMap[data.key!]) return <></>;

  return (
    <Flex flexDir="row" flex={1}>
      <Checkbox
        isChecked={isChecked}
        mr={4}
        borderColor={'gray.400'}
        onChange={() => {
          checkedRef.current = true;
          setChecked(!isChecked);
        }}
      ></Checkbox>
      <Text flex={1}>{data.text}</Text>
    </Flex>
  );
});

export default CheckableAccordionLeafItem;
