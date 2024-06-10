import { useEffect, useRef, useState } from 'react';
import CheckableAccordionItemType from 'types/checkable-accordion-item-type';
import CheckableAccordionItem from './checkable-accordion-item';
import CheckableAccordionItemHandleType from 'types/checkable-accordion-item-handle-type';
import _ from 'lodash';
import { CheckableProvider } from 'contexts/checkable-context/checkable-context';
import CheckableAccordionRoot from './checkable-accordion-root';

import * as CSS from 'csstype';
import { ResponsiveValue } from '@chakra-ui/react';

const CheckableAccordionMenu = ({
  data,
  onChange,
  hidden,
  defaultChecked,
  rootBackground,
}: {
  data: CheckableAccordionItemType;
  hidden?: string[];
  onChange: (
    removal: CheckableAccordionItemType[],
    changed: CheckableAccordionItemType[]
  ) => void;
  defaultChecked?: string[];
  rootBackground?: ResponsiveValue<CSS.Property.Color> | undefined;
}) => {
  const ref = useRef<CheckableAccordionItemHandleType>(null);
  const prev = useRef<CheckableAccordionItemType[]>([]);

  const [hiddenMap, setHiddenMap] = useState<{ [key: string]: boolean }>({});
  const [checkedMap, setCheckedMap] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const $hiddenMap: { [key: string]: boolean } = {};
    (hidden || []).map((h) => {
      $hiddenMap[h] = true;
    });

    setHiddenMap($hiddenMap);
  }, [hidden]);

  useEffect(() => {
    const $checkedMap: { [key: string]: boolean } = {};

    (defaultChecked || []).map((d) => {
      $checkedMap[d] = true;
    });

    setCheckedMap($checkedMap);
  }, [defaultChecked]);

  return (
    <CheckableProvider hiddenMap={hiddenMap} checkedMap={checkedMap}>
      <CheckableAccordionRoot
        ref={ref}
        data={data}
        rootBackground={rootBackground}
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
      ></CheckableAccordionRoot>
    </CheckableProvider>
  );
};

export default CheckableAccordionMenu;
