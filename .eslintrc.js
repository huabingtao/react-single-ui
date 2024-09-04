// .eslintrc.js
module.exports = {
  env: {
    browser: true, // 如果你在浏览器环境中工作
    node: true, // 如果你在 Node.js 环境中工作
    es2020: true, // 支持 ECMAScript 2020
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
  },
};
