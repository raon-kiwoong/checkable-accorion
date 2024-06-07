import CheckableAccordionItemType from './checkable-accordion-item-type';

type CheckableAccordionItemHandleType = {
  setChecked: (value: boolean, propagate?: boolean) => void;
  isChecked: () => boolean;
  getCheckedList?: () => CheckableAccordionItemType[];
};

export default CheckableAccordionItemHandleType;
