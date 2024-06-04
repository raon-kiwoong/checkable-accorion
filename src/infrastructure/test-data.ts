import CheckableAccordionItemType from 'types/checkable-accordion-item-type';

const testData: CheckableAccordionItemType[] = [
  {
    key: '001',
    text: '안녕',
    children: [
      {
        key: '002',
        text: '인냥1',
      },
      {
        key: '003',
        text: '인냥2',
      },
      {
        key: '004',
        text: '인냥3',
      },
      {
        key: '005',
        text: '인냥4',
      },
      {
        key: '006',
        text: '인냥5',
        children: [
          {
            key: '006-1',
            text: '인냥6',
          },
          {
            key: '006-2',
            text: '인냥7',
          },
          {
            key: '006-3',
            text: '인냥8',
          },
        ],
      },
    ],
  },
];

export default testData;
