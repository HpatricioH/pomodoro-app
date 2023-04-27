module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/core',
            from: './src/components'
          },
          {
            target: './src/core',
            from: './src/lib'
          },
          {
            target: './src/core',
            from: './src/pages'
          },
          {
            target: './src/lib',
            from: './src/pages'
          },
          {
            target: './src/components',
            from: './src/pages'
          }
        ]
      }
    ]
  }
}
