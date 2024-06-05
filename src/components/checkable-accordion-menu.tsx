import { useEffect, useRef, useState } from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import CheckableAccordionItem from './checkable-accordion-item';
import CheckableAccordionItemHandleType from 'types/checkable-accordion-item-handle-type';
import _ from 'lodash';
import { HiddenProvider } from 'contexts/hidden-context/hidden-context';

const CheckableAccordionMenu = ({
  data,
  onChange,
  hidden,
}: {
  data: CheckableAccordionItemType;
  hidden?: string[];
  onChange: (
    removal: CheckableAccordionItemType[],
    changed: CheckableAccordionItemType[]
  ) => void;
}) => {
  const ref = useRef<CheckableAccordionItemHandleType>(null);
  const prev = useRef<CheckableAccordionItemType[]>([]);

  const [hiddenMap, setHiddenMap] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const $hiddenMap: { [key: string]: boolean } = {};
    (hidden || []).map((h) => {
      $hiddenMap[h] = true;
    });

    setHiddenMap($hiddenMap);
  }, [hidden]);

  return (
    <HiddenProvider hiddenMap={hiddenMap}>
      <CheckableAccordionItem
        ref={ref}
        data={data}
        onCheck={() => {}}
        onClick={() => {
          if (ref.current?.getCheckedList) {
            // 1. 체크된 항목을 불러옴.
            const checkedList = ref.current?.getCheckedList!();

            // 2. 체크된 항목과 data의 하위 children에 대한 차집합을 구함. (체크가 모두 되었는지 확인하는 과정.)
            const diff = _.differenceBy(data.children, checkedList, 'key');

            // 3. ??
            const currentChecked = diff.length < 1 ? [data] : checkedList;

            const removal = _.differenceBy(prev.current, currentChecked, 'key');

            const changed = _.differenceBy(currentChecked, prev.current, 'key');

            if (removal.length !== 0 || changed.length !== 0) {
              prev.current = currentChecked;
              onChange(removal, changed);
            }
          }
        }}
      ></CheckableAccordionItem>
    </HiddenProvider>
  );
};

export default CheckableAccordionMenu;
