import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
declare const CheckableAccordionMenu: ({ data, onChange, hidden, }: {
    data: CheckableAccordionItemType;
    hidden?: string[] | undefined;
    onChange: (removal: CheckableAccordionItemType[], changed: CheckableAccordionItemType[]) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default CheckableAccordionMenu;
