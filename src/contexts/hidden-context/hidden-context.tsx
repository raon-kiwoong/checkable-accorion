import { ReactNode, createContext, useEffect, useState } from 'react';

type HiddeonContextType = {
  hiddenMap: { [key: string]: boolean };
};

const HiddenContext = createContext<HiddeonContextType>({
  hiddenMap: {},
});

const HiddenProvider = ({
  children,
  hiddenMap,
}: {
  children: ReactNode;
  hiddenMap: { [key: string]: boolean };
}) => {
  const [$hiddenMap, setHiddenMap] = useState<{
    [key: string]: boolean;
  }>({});

  console.log('>>', $hiddenMap);
  useEffect(() => {
    setHiddenMap(hiddenMap);
  }, [hiddenMap]);

  return (
    <HiddenContext.Provider
      value={{
        hiddenMap: $hiddenMap,
      }}
    >
      {children}
    </HiddenContext.Provider>
  );
};

export { HiddenContext, HiddenProvider };
