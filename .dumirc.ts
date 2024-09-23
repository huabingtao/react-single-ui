import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-single',
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
    nav: [{ title: '指南', link: '/guide/introduce' }],

    socialLinks: {
      github: 'https://github.com/huabingtao/react-single-ui',
    },
    slidebar: {
      '/guide': [
        {
          title: '指南',
          children: ['/guide/introduce', '/guide/quickstart'],
        },
      ],
    },
    footer: 'Copyright © 2024 | Powered by react-single-ui',
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
  },
});
