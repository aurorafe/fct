module.exports = {
  extends: [
    '@aurorafe/stylelint-config-base',
    'stylelint-config-recommended-vue', // 必须要在最后一项, 因为其定义了customSyntax
  ],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
    },
  ],
};
