/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-07-14 22:00:27
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-11 19:47:04
 * @FilePath: /instagram/vite-project/.eslintrc.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/valid-v-model': 'error',
    'vue/require-v-for-key': 'error',
    'vue/html-indent': ['error', 2, { alignAttributesVertically: false }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 4,
          allowFirstLine: true,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
};
