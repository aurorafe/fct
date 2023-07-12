const { defineConfig } = require('eslint-define-config');
const base = require('@aurorafe/eslint-config-base/lib/base');

module.exports = defineConfig({
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    '@aurorafe/eslint-config-base/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    '@aurorafe/eslint-config-base/prettier'
  ],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  rules: {
    // typescript
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/ban-types': [
      'off',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description'
      }
    ],

    // 覆盖js的配置
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }], // 后定义
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],

    // off
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    '@typescript-eslint/camelcase': 'off', // 使用驼峰命名
    '@typescript-eslint/explicit-function-return-type': 'off' // 在函数和类方法上须声明返回类型
  }
});
