import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-single-ui',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-single-ui',
    hd: { rules: [] },
    deviceWidth: 375,
    nav: [
      { title: '组件', link: '/components' },
    ]
  },
  base: '/react-single-ui/',
  publicPath: '/react-single-ui/',
  resolve:{
    atomDirs: [
      {
        type: 'components',
        dir: 'src/components',
      },
    ],
  },

});
