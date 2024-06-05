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
yarn add @raondata/checkable-accordion-react
```

or

```
npm install @raondata/checkable-accordion-react
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

#### onChange

It is a callback function called when an item in Accordion Menu changes.
OnChange has two parameters, the first is a list of deselected items, and the second is a list of checked or deselected changed items.

```
onChange  = (removal, changed) => void;
```
