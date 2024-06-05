import { ReactNode } from 'react';
type HiddeonContextType = {
    hiddenMap: {
        [key: string]: boolean;
    };
};
declare const HiddenContext: import("react").Context<HiddeonContextType>;
declare const HiddenProvider: ({ children, hiddenMap, }: {
    children: ReactNode;
    hiddenMap: {
        [key: string]: boolean;
    };
}) => import("react/jsx-runtime").JSX.Element;
export { HiddenContext, HiddenProvider };
