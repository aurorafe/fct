const path = require('path');
const fs = require('fs');
const { defineConfig } = require('eslint-define-config');

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

module.exports = defineConfig({
  root: true,
  extends: [
    '@aurorafe/eslint-config-base',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'jest', 'react-hooks', 'eslint-plugin-import'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off', // 关闭 jsx 文件后缀检测 ['warn', { extensions: ['.js', '.jsx', '.tsx'] }]
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/sort-comp': 'off',
    'react/react-in-jsx-scope': 'off',
    // 限制 jsx 每行一个表达式
    'react/jsx-one-expression-per-line': 'warn',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // jsx > 紧跟着属性
    'react/jsx-closing-bracket-location': ['off', 'after-props'],

    'react/self-closing-comp': 'warn',
    'react/jsx-key': 'warn'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx']
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    react: {
      version: 'detect'
    }
  },
  overrides: isTsProject
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          parser: '@typescript-eslint/parser',
          rules: {
            // @link https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md
            'no-undef': 'off',
            'prettier/prettier': 'warn' // 不符合prettier规范的进行警告
          },
          extends: ['@aurorafe/eslint-config-ts']
        }
      ]
    : []
});
