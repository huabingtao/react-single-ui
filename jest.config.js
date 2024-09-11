/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest-setup.ts'],
  moduleNameMapper: {
    // TODO: 暂时解决jest 无法识别@import 语法
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
