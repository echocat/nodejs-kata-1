module.exports = {
  env: {
    mocha: true,
    node: true
  },
  globals: {
    chai: false,
    expect: false,
    sinon: false
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended'
  ],
  plugins: [
    'import',
    'node'
  ],
  rules: {
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 1 }],
    'no-trailing-spaces': 'error',
    'node/no-unsupported-features': 'off',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', { 'uninitialized': 'always', 'initialized': 'never' }],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'],
    'semi': ['error', 'never'],
    'sort-imports': 'off',
    'strict': 'off'
  },
  overrides: [
    {
      files: ['test/helpers/*.js'],
      rules: {
        'node/no-unpublished-require': 'off'
      }
    }
  ]
}
