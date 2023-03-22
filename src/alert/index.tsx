import t from 'prop-types';
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

const prefixCls = 'sarajiang-alert';

const kinds: KindMap = {
  info: '#909399',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
