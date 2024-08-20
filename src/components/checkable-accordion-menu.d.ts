import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import * as CSS from 'csstype';
import { ResponsiveValue } from '@chakra-ui/react';
declare const CheckableAccordionMenu: ({ data, onChange, hidden, defaultChecked, rootBackground, }: {
    data: CheckableAccordionItemType;
    hidden?: string[] | undefined;
    onChange: (removal: CheckableAccordionItemType[], changed: CheckableAccordionItemType[]) => void;
    defaultChecked?: string[] | undefined;
    rootBackground?: ResponsiveValue<CSS.Property.Color> | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default CheckableAccordionMenu;
