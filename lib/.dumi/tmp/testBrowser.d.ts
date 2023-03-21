import React from 'react';
import type { Location } from 'history';
type TestBrowserProps = {
    location?: Partial<Location>;
    historyRef?: React.MutableRefObject<Location>;
};
export declare function TestBrowser(props: TestBrowserProps): JSX.Element;
export {};
