基于 dumi 的 react 组件库

# 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm i element-ui -S
```

# 示例

```
import { Alert } from "sarajiang-ui";
import "sarajiang-ui/lib/alert/style/css";

function MyAlerts() {
  return (
    <Alert kind="positive">一条成功提示</Alert>
  );
}
```
