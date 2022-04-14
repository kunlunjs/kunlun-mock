const { defineConfig } = require('eslint-define-config')

// @ts-check
module.exports = defineConfig({
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: 8,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        'react': {
          version: 'detect'
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          },
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      env: {
        es2021: true,
        node: true,
        browser: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      plugins: ['import', 'unused-imports'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            // patterns: ['@/features/**/*']
          }
        ],
        // 'linebreak-style': ['error', 'unix'],

        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object'
              // 'type'
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            },
            pathGroups: [
              {
                pattern: '@/**',
                group: 'internal'
              }
            ]
          }
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',

        'unused-imports/no-unused-imports': 'warn',

        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',

        'jsx-a11y/aria-role': ['off'],
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-redundant-roles': 'off',

        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/consistent-type-imports': 1,
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        // '@typescript-eslint/triple-slash-reference': ['off'],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }]
      }
    }
  ]
})
