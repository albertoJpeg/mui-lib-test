module.exports = function (api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        bugfixes: true,
        targets: { browsers: '> 0.25%, ie 11, not op_mini all, not dead' }
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = ['macros', '@babel/plugin-proposal-export-default-from']

  return {
    presets,
    plugins
  }
}
