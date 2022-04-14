module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'dx',
        'wip',
        'fix',
        'feat',
        'docs',
        'deps',
        'perf',
        'test',
        'build',
        'chore',
        'types',
        'style',
        'sample',
        'release',
        'refactor',
        'workflow'
      ]
    ]
  }
}
