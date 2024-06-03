import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import CheckableAccordionItemType from 'src/types/checkable-accordion-item-type';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import CheckableAccordionItemHandleType from 'src/types/\bcheckable-accordion-item-handle-type';

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
