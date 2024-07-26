import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-single-ui',
  outputPath: 'docs-dist',
  apiParser: {},
  themeConfig: {
    name: 'react-single-ui',
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
    },
    deviceWidth: 375,
    nav: [
      { title: '指南', link: '/guide' },
    ],
    socialLinks: {
      github: 'https://github.com/huabingtao/react-single-ui'
    },
    footer:'Copyright © 2024 | Powered by react-single-ui'
  },
  base: '/react-single-ui/',
  publicPath: '/react-single-ui/',
  resolve: {
    entryFile: 'src/api.ts',
    atomDirs: [
      {
        type: 'components',
        dir: 'src/components',
      },
    ],
  }
});
