// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true, // 如果你在浏览器环境中工作
    node: true, // 如果你在 Node.js 环境中工作
    es2020: true, // 支持 ECMAScript 2020
  },
  extends: [
    'eslint:recommended', // 启用推荐的 ESLint 规则
    'plugin:@typescript-eslint/recommended', // 启用 TypeScript 推荐规则
    'plugin:prettier/recommended', // 启用 Prettier，并且关闭与 Prettier 冲突的 ESLint 规则
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 配置 Prettier 的规则
    'prettier/prettier': 'error',
    // 自定义 ESLint 规则
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
  },
};
