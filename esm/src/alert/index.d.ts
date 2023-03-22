import React from 'react';
export interface AlertProps {
    /**
     * @description Alert的内容
     * @default "默认值"
     */
    children: any;
    /**
     * @description Alert的类型
     * @default "info"
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
