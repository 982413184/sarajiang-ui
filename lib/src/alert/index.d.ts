import React from 'react';
export interface AlertProps {
    /**
     * @description 属性描述
     * @default "默认值"
     */
    children: any;
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
