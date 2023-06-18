/**
 * Create Webpack Configuration
 * @param {Object} options
 * @param {boolean} options.dev
 * @param {string} options.target
 * @returns {Object}
 */
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const TerserPlugin = require('terser-webpack-plugin')

// paths
const buildPath = 'dist'
const publicPath = 'assets'

// create configuration
const createWebpackConfig = (options = {}) => {
  const plugins = [
    new webpack.BannerPlugin({
      banner: `pano.js v${pkg.version} | (c) Sinan Bolel & Prescott Prue`,
      entryOnly: true,
      raw: false,
    }),
  ]

  return {
    mode: options.dev ? 'development' : 'production',
    devtool: options.dev ? 'eval-source-map' : 'source-map',
    entry: path.join(__dirname, '..', 'src/index'),
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: ['babel-loader'],
          test: /\.js$/,
        },
      ],
    },
    output: {
      library: {
        name: 'Pano',
        type: 'umd',
      },
      path: path.resolve(__dirname, '..', buildPath),
      publicPath: '/dist/',
      filename: options.dev ? 'pano.js' : 'pano.min.js',
    },
    plugins: plugins,
    resolve: {
      alias: { assets: path.resolve(__dirname, '..', 'assets') },
      extensions: ['.js'],
    },
    target: options.target,
    optimization: {
      minimize: !options.dev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
  }
}

module.exports = createWebpackConfig
