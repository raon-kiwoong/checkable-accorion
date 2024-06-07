import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
declare const CheckableAccordionMenu: ({ data, onChange, hidden, defaultChecked, }: {
    data: CheckableAccordionItemType;
    hidden?: string[] | undefined;
    onChange: (removal: CheckableAccordionItemType[], changed: CheckableAccordionItemType[]) => void;
    defaultChecked?: string[] | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default CheckableAccordionMenu;
