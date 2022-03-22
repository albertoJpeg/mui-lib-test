module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true
  },
  plugins: ['prettier'],
  extends: ['standard', 'standard-react', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16'
    }
  },
  rules: {
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0,
    'react/jsx-no-bind': [
      0,
      {
        ignoreDOMComponents: true
      }
    ]
  }
}
