import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import * as react from 'react'
import * as propTypes from 'prop-types'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external: ['react', 'react-proptypes'],
    plugins: [
      resolve(),
      external({
        includeDependencies: true
      }),
      postcss({
        modules: true
      }),
      url(),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': [
            'Memo',
            'ForwardRef',
            'isFragment'
          ],
          react: Object.keys(react),
          'prop-types': Object.keys(propTypes)
        }
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      })
    ]
  }
]
