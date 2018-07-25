module.exports = {
  extends: ['react-app', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', semi: false }
    ]
  },
  plugins: ['prettier']
};
