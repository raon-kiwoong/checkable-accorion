import { ResponsiveValue } from '@chakra-ui/react';
import CheckableAccordionItemType from './checkable-accordion-item-type';
import * as CSS from 'csstype';

type CheckableAccordionPropsType = {
  data: CheckableAccordionItemType;
  onCheck: (newVal: boolean) => void;
  onClick?: (key: string) => void;
  rootBackground?: ResponsiveValue<CSS.Property.Color> | undefined;
};

export default CheckableAccordionPropsType;
