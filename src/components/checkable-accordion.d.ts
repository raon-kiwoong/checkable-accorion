import React, { ReactNode } from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
type CheckableAccordionHandleType = {
    checked: (value: boolean) => void;
};
declare const CheckableAccordion: React.ForwardRefExoticComponent<{
    data: CheckableAccordionItemType;
    checkboxBorderColor?: string | undefined;
    children?: ReactNode;
    checked?: boolean | undefined;
    onClick?: ((value: boolean) => void) | undefined;
} & React.RefAttributes<CheckableAccordionHandleType>>;
export default CheckableAccordion;
