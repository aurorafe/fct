const { prettierRules } = require('./rules');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:jsonc/recommended-with-jsonc'],
  plugins: ['promise', 'html'],
  ignorePatterns: [
    'dist',
    'node_modules',
    'output',
    'coverage',
    'public',
    '.dll',
    'assets',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'CHANGELOG.md',
    'LICENSE*',
    '__snapshots__',
    '!.vitepress',
    '!.vscode',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', '.'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', 'mts', '.d.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: '*.html',
      parser: '@html-eslint/parser',
      rules: {
        'prettier/prettier': ['error', { parser: 'html', ...prettierRules }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: ['name', 'displayName', 'type', 'version', 'private'],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
  ],
  rules: {
    // global config
    'max-len': ['warn', 120],
    'linebreak-style': 'off',
    indent: 'off',
    camelcase: [
      'off',
      {
        properties: 'always',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 语句末尾是否使用分号，这里我们先关闭
    semi: 'off',
    'semi-spacing': [
      'off',
      {
        before: false,
        after: true,
      },
    ],
    'func-names': 'off',
    // 箭头函数的前后空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 箭头函数直接返回的时候不需要
    'arrow-body-style': ['error', 'as-needed'],
    // 块内空格
    'block-spacing': ['error', 'always'],
    'class-methods-use-this': 'off',
    // 允许数组的方法不写return
    'array-callback-return': 'off',
    // 关闭强制使用解构
    'prefer-destructuring': 'off',
    // 不需要每次都有返回
    'consistent-return': 'off',
    'constructor-super': 'error',

    // 数组和对象键值对最后一个逗号
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    curly: ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // 禁止一次定义多个变量
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    yoda: ['error', 'never'],
    // 使用 for in 时不需要 if 判断
    'guard-for-in': 'off',
    'generator-star-spacing': [
      'off',
      {
        before: true,
        after: true,
      },
    ],
    'handle-callback-err': ['off', '^(err|error)$'],
    'key-spacing': [
      'off',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'off',
      {
        before: true,
        after: true,
      },
    ],
    // allow shadow var
    'no-shadow': 'off',
    'new-cap': [
      'off',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // 允许内置对象原型修改
    'no-prototype-builtins': 'off',
    'padded-blocks': ['off', 'never'],
    'space-before-blocks': ['off', 'always'],
    // 在函数左括号的前面是否有空格
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': ['off', 'never'],
    'space-infix-ops': 'off',
    'space-unary-ops': [
      'off',
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      'off',
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ],
    // 允许使用 arguments
    'prefer-rest-params': 'off',
    'template-curly-spacing': ['off', 'never'],
    'use-isnan': 'off',
    'valid-typeof': 'off',
    'wrap-iife': ['off', 'any'],
    'yield-star-spacing': ['off', 'both'],
    'object-curly-spacing': [
      'off',
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'array-bracket-spacing': ['off', 'never'],

    // import config
    // 命名
    'import/named': 'off',
    // 允许循环依赖
    'import/no-cycle': 'off',
    // 允许单文件多导出
    'import/no-mutable-exports': 'off',
    // 允许单个非默认导出
    'import/prefer-default-export': 'off',
    // 确保导入指向可以解析的文件/模块 by eslint-plugin-import
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    // 允许导入时不带后缀
    'import/extensions': 'off',
    'import/no-duplicates': 'warn',
    // 不区分是否在 dependencies
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'off',
    'implicit-arrow-linebreak': 'off',

    // eslint-recommended
    'no-control-regex': 'off',
    'no-inner-declarations': ['error', 'functions'],
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-useless-escape': 'off',

    // user config
    'no-var': 'error',
    'no-console': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    // 允许使用 for in
    'no-restricted-properties': 'off',
    // 允许对参数重新赋值
    'no-param-reassign': 'off',
    // 允许++操作符
    'no-plusplus': 'off',
    // continue 语句
    'no-continue': 'off',
    // 设置不冲突 underscore 库
    'no-underscore-dangle': 'off',
    'no-extra-bind': 'off',
    'no-extra-parens': ['off', 'functions'],
    'no-labels': [
      'off',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-multiple-empty-lines': [
      'off',
      {
        max: 1,
      },
    ],
    // 函数可以没有返回值
    'no-return-assign': ['off', 'except-parens'],
    'no-unneeded-ternary': [
      'off',
      {
        defaultAssignment: false,
      },
    ],
    // 允许直接 return await
    'no-return-await': 'off',
    // 允许在循环中使用 await
    'no-await-in-loop': 'off',
    // 不必在使用前定义函数
    'no-use-before-define': 'off',
    // 允许嵌套的三元表达式
    'no-nested-ternary': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
