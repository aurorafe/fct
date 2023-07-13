const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-airbnb', '@aurorafe/eslint-config-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      rules: {
        'no-undef': 'off',
        'vue/html-self-closing': 'off',
      },
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
  rules: {
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: ['index'],
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
  },
});
