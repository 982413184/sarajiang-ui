import { defineConfig } from 'dumi';

let base = '/sarajiang-ui';
let publicPath = '/sarajiang-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'SARAJIANG UI',
  outputPath: 'doc-site',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  base,
  publicPath,
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
});
