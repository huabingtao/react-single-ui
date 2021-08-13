/*
 * @Author: your name
 * @Date: 2021-05-14 23:10:58
 * @LastEditTime: 2021-05-23 16:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /single/.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'single-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/single-ui/',
  publicPath: '/single-ui/',
  sass: {
    // 默认值 Dart Sass，如果要改用 Node Sass，可安装 node-sass 依赖，然后使用该配置项
    implementation: require('node-sass'),
    // 传递给 Dart Sass 或 Node Sass 的配置项，可以是一个 Function
  },
  extraBabelPresets: ['@babel/preset-typescript'],
  // more config: https://d.umijs.org/config
});
