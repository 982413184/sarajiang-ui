基于 dumi 的 react 组件库

# 安装

## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm i element-ui -S
```

## CDN

目前可以通过 unpkg.com/sarajiang-ui 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
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
