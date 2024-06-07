import { ReactNode } from 'react';
type HiddeonContextType = {
    hiddenMap: {
        [key: string]: boolean;
    };
    checkedMap: {
        [key: string]: boolean;
    };
};
declare const CheckableContext: import("react").Context<HiddeonContextType>;
declare const CheckableProvider: ({ children, hiddenMap, checkedMap, }: {
    children: ReactNode;
    hiddenMap: {
        [key: string]: boolean;
    };
    checkedMap: {
        [key: string]: boolean;
    };
}) => import("react/jsx-runtime").JSX.Element;
export { CheckableContext, CheckableProvider };
