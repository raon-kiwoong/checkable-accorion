import CheckableAccordionItemType from "./checkable-accordion-item-type";
type CheckableAccordionPropsType = {
    data: CheckableAccordionItemType;
    onCheck: (newVal: boolean) => void;
    onClick?: (key: string) => void;
};
export default CheckableAccordionPropsType;
