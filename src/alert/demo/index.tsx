import React from 'react';
import { Alert } from 'sarajiang-ui';
import '../style';

export default () => (
  <>
    <div style={{ margin: '10px' }}>
      <Alert kind="info">这是一条消息提示</Alert>
    </div>
    <div style={{ margin: '10px' }}>
      <Alert kind="positive">这是一条成功提示</Alert>
    </div>
    <div style={{ margin: '10px' }}>
      <Alert kind="warning">这是一条警告提示</Alert>
    </div>
    <div style={{ margin: '10px' }}>
      <Alert kind="negative">这是一条错误提示</Alert>
    </div>
  </>
);
