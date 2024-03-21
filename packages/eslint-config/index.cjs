module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'parameter',
      format: ['strictCamelCase'],
    },
    {
      selector: 'class',
      format: ['StrictPascalCase'],
      custom: {
        regix: 'send|start|find',
        match: false,
      },
    },
    {
      selector: 'typeLike',
      format: ['StrictPascalCase'],
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
  ],
  'react/prop-types': 'off',
  'react/self-closing-comp': 'error',
  'react/jsx-curly-brace-presence': 'error',
  'react/self-closing-comp': 'error',
  'react/jsx-curly-brace-presence': 'error',
  '@typescript-eslint/array-type': ['error', { default: 'generic' }],
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      warnOnUnassignedImports: true,
    },
  ],
  'no-restricted-imports': [
    'error',
    {
      paterns: ['../'],
    },
  ],
  curly: ['error', 'all'],
  'object-shorthand': ['error', 'always'],
  'no-nested-ternary': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
}
