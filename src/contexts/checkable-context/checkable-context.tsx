import { ReactNode, createContext, useEffect, useState } from 'react';

type HiddeonContextType = {
  hiddenMap: { [key: string]: boolean };
  checkedMap: { [key: string]: boolean };
};

const CheckableContext = createContext<HiddeonContextType>({
  hiddenMap: {},
  checkedMap: {},
});

const CheckableProvider = ({
  children,
  hiddenMap,
  checkedMap,
}: {
  children: ReactNode;
  hiddenMap: { [key: string]: boolean };
  checkedMap: { [key: string]: boolean };
}) => {
  const [$hiddenMap, setHiddenMap] = useState<{
    [key: string]: boolean;
  }>({});

  const [$checkedMap, setCheckedMap] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setHiddenMap(hiddenMap);
  }, [hiddenMap]);

  useEffect(() => {
    setCheckedMap(checkedMap);
  }, [checkedMap]);

  return (
    <CheckableContext.Provider
      value={{
        hiddenMap: $hiddenMap,
        checkedMap: $checkedMap,
      }}
    >
      {children}
    </CheckableContext.Provider>
  );
};

export { CheckableContext, CheckableProvider };
