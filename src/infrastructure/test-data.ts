import CheckableAccordionItemType from 'types/checkable-accordion-item-type';

const testData: CheckableAccordionItemType[] = [
  {
    key: '001',
    text: 'Item1',
    children: [
      {
        key: '002',
        text: 'SubItem-1-1',
      },
      {
        key: '003',
        text: 'SubItem-1-2',
      },
      {
        key: '004',
        text: 'SubItem-1-3',
      },
      {
        key: '005',
        text: 'SubItem-1-4',
      },
      {
        key: '006',
        text: 'SubItem-1-5',
        children: [
          {
            key: '006-1',
            text: 'SubItem-1-5-1',
          },
          {
            key: '006-2',
            text: 'SubItem-1-5-2',
          },
          {
            key: '006-3',
            text: 'SubItem-1-5-3',
          },
        ],
      },
    ],
  },
];

export default testData;
