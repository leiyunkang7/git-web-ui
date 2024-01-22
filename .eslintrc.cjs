module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  }, 
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
    
  plugins: ['@typescript-eslint', 'vue', ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'max-len': [
      'error',
      {
        'code': 80,
        'ignorePattern': 
          '^\\s*(import|export)\\s+.*$|https?://\\S+|<!--.*-->$|/\\*.*\\*/'
      }
    ]
  },
}
