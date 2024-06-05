import React, { ReactNode } from 'react';
import CheckableAccordionHandleType from 'types/checkable-accordion-handle-type';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
declare const CheckableAccordion: React.ForwardRefExoticComponent<{
    data: CheckableAccordionItemType;
    checkboxBorderColor?: string | undefined;
    children?: ReactNode;
    checked?: boolean | undefined;
    onClick?: ((value: boolean) => void) | undefined;
} & React.RefAttributes<CheckableAccordionHandleType>>;
export default CheckableAccordion;
