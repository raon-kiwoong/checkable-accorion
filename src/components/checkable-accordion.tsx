import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Flex,
  ResponsiveValue,
  background,
} from '@chakra-ui/react';
import * as CSS from 'csstype';

import { CheckableContext } from 'contexts/checkable-context/checkable-context';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import CheckableAccordionHandleType from 'types/checkable-accordion-handle-type';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';

const CheckableAccordion = React.forwardRef<
  CheckableAccordionHandleType,
  {
    data: CheckableAccordionItemType;
    checkboxBorderColor?: string;
    children?: ReactNode;
    checked?: boolean;
    onClick?: (value: boolean) => void;
    background?: ResponsiveValue<CSS.Property.Color> | undefined;
  }
>(
  (
    { data, children, checkboxBorderColor, checked, onClick, background },
    parentRef
  ) => {
    const [defaultChecked, setDefaultChecked] = useState<boolean>(
      checked || false
    );
    const ref = useRef<HTMLInputElement>(null);
    const isClick = useRef<boolean>(false);

    const { hiddenMap } = useContext(CheckableContext);

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
      <>
        {hiddenMap[data.key!] === true ? (
          <></>
        ) : (
          <Accordion
            allowMultiple
            w={'100%'}
            background={'transparent'}
            borderColor={'transparent'}
            defaultIndex={data.children?.map((_, i) => i)}
          >
            <AccordionItem key={data.key}>
              <Flex flexDir={'row'} w="full" background={background}>
                <Checkbox
                  ref={ref}
                  borderColor={checkboxBorderColor || 'gray.400'}
                  onChange={() => {
                    // onChange 이벤트는 바뀔 떄가 아니라 클릭할때로 보여짐.
                    isClick.current = true;
                    setDefaultChecked(!defaultChecked);
                  }}
                  isChecked={defaultChecked}
                  float={'left'}
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
        )}
      </>
    );
  }
);

export default CheckableAccordion;
