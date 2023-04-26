// @doc http://json.schemastore.org/prettierrc

module.exports = {
  printWidth: 120, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  singleQuote: true, // 单引号
  semi: true, // 句末使用分号
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  arrowParens: 'always', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象前后添加空格: { foo: bar }
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: false, // jsx中使用单引号
  bracketSameLine: false, // 多属性html标签的‘>’折行放置
  endOfLine: 'lf', // 结束行形式
  proseWrap: 'preserve', // 不强制换行
  vueIndentScriptAndStyle: true, // Vue文件的script标签和style标签的代码是否缩进
  htmlWhitespaceSensitivity: 'ignore', // 指定全局空白的敏感度，可选值 <css|strict|ignore>
  embeddedLanguageFormatting: 'auto', // 格式化嵌入的内容
  singleAttributePerLine: false // Html, vue, jsx 中每个属性占一行
};
