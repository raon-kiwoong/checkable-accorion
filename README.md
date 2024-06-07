<img src="https://raondata.s3.ap-northeast-2.amazonaws.com/2023cc.png" width="20%" height="20%" />

## checkable-accordion

If you want an accordion menu can be checked, this package will be useful.

<img src="https://raondata.s3.ap-northeast-2.amazonaws.com/demo.gif" width="100%" height="auto" />

## environment

- [ ] React >= 18
- [ ] Typescripts
- [ ] chakra-ui/react
- [ ] node >= 14
- [ ] yarn >= 1.22.5

> ~~If you use npm, It may not installed normally.~~

## install

```
yarn add @raondata/react-checkable-accordion
```

or

```
npm install @raondata/react-checkable-accordion
```

## usage

We work well under <ChakraProvider> because it is written based on chakra-ui.

```
<ChakraProvider>
  <CheckableAccordionMenu
    ....
  />
</ChakraProvider>
```

### props

This Component has two properties.

```
<CheckableAccordionMenu
 data={data}
 onChange={(removal, changed) => { ... }}
>
```

#### data

It's used to render items.
'data' properties's type is called CheckableAccordionItemType. And it has the following properties.

| name     | type                         | description      |
| -------- | ---------------------------- | ---------------- |
| key      | string                       | identified key   |
| text     | string                       | item's name      |
| children | CheckableAccordionItemType[] | List of SubItems |

data example

```
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
```

#### onChange

It is a callback function called when an item in Accordion Menu changes.
OnChange has two parameters, the first is a list of deselected items, and the second is a list of checked or deselected changed items.

```
onChange  = (removal, changed) => void;
```

#### hidden

If you want hide some Items. use this properties. Just put the key list in array.

```
<CheckableAccordionMenu
 data={data}
 onChange={(removal, changed) => { ... }}
 hidden={["001", "002-1", "004", ...]}
>
```

#### defaultChecked

You can also use this property to set the initial check value.

```
<CheckableAccordionMenu
 data={data}
 onChange={(removal, changed) => { ... }}
 defaultChecked={["001", "002-1", "004", ...]}
>
```
