module.exports = {
  types: [
    {
      value: '🎉 init',
      name: 'init:    初始化',
    },
    {
      value: '👷 ci',
      name: 'ci:    ci相关更新',
    },
    {
      value: '🎨 ui',
      name: 'ui:    更新UI',
    },
    {
      value: '🔧 chore',
      name: 'chore:    变更配置文件',
    },
    {
      value: '✨ feat',
      name: 'feat:    增加新功能',
    },
    {
      value: '📝 docs',
      name: 'docs:    修改文档',
    },
    {
      value: '🐛 fix',
      name: 'fix:    修复Bug',
    },
    {
      value: '⚡️ pref',
      name: 'perf:    性能优化',
    },
    {
      value: '🚑 update',
      name: 'update:    更新',
    },
    {
      value: '♻️ refactor',
      name: 'refactor:    代码重构',
    },
    {
      value: '⏪ revert',
      name: 'revert:    代码回退',
    },
    {
      value: '💄 style',
      name: 'style:    代码格式改变',
    },
    {
      value: '📇 wip',
      name: 'wip:    开发中',
    },
    {
      value: '✅ test',
      name: 'test:    添加测试',
    },
    {
      value: '📦️ release',
      name: 'release:    发布',
    },
  ],
  scopes: [],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简短描述:\n',
    body: '详细说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交?(yes/no)',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 150,
};
