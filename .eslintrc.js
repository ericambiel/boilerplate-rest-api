module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-console': 'off',
    'no-process-env': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          'jest.config.*',
          'vite.config.*',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
