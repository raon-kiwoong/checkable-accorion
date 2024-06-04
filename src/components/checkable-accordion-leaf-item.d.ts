import React from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import CheckableAccordionItemHandleType from 'types/checkable-accordion-item-handle-type';
declare const CheckableAccordionLeafItem: React.ForwardRefExoticComponent<{
    data: CheckableAccordionItemType;
    onCheck: (newVal: boolean) => void;
} & React.RefAttributes<CheckableAccordionItemHandleType>>;
export default CheckableAccordionLeafItem;
