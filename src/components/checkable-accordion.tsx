import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import React, {
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CheckableAccordionItemType from "src/types/checkable-accordion-item-type";

type CheckableAccordionHandleType = {
  checked: (value: boolean) => void;
};

const CheckableAccordion = React.forwardRef<
  CheckableAccordionHandleType,
  {
    data: CheckableAccordionItemType;
    checkboxBorderColor?: string;
    children?: ReactNode;
    checked?: boolean;
    onClick?: (value: boolean) => void;
  }
>(({ data, children, checkboxBorderColor, checked, onClick }, parentRef) => {
  const [defaultChecked, setDefaultChecked] = useState<boolean>(
    checked || false
  );

  const ref = useRef<HTMLInputElement>(null);
  const isClick = useRef<boolean>(false);

  const checkedFn = (newValue: boolean) => {
    setDefaultChecked(newValue);
  };

  useImperativeHandle(parentRef, () => ({
    checked: checkedFn,
  }));

  useEffect(() => {
    if (onClick && isClick.current === true) onClick(defaultChecked);
    isClick.current = false;
  }, [defaultChecked]);

  useEffect(() => {
    setDefaultChecked(checked || false);
  }, [checked]);

  return (
    <Accordion
      allowMultiple
      w={"100%"}
      pr={2}
      defaultIndex={data.children?.map((_, i) => i)}
    >
      <AccordionItem key={data.key}>
        <Flex flexDir={"row"} w="full">
          <Checkbox
            ref={ref}
            borderColor={checkboxBorderColor}
            onChange={() => {
              // onChange 이벤트는 바뀔 떄가 아니라 클릭할때로 보여짐.
              isClick.current = true;
              setDefaultChecked(!defaultChecked);
            }}
            isChecked={defaultChecked}
            float={"left"}
            mr={4}
          ></Checkbox>
          <AccordionButton display="flex" flex={1} px={0}>
            <Flex flex={1} justifyContent="flex-start">
              {data.text}
            </Flex>
          </AccordionButton>
        </Flex>
        <AccordionPanel mr={0} pr={0}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
});

export default CheckableAccordion;
