const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')

// paths
const buildPath = 'dist'
const publicPath = 'assets'

// create configuration
module.exports = function (options) {
  if (!options) { options = {} }

  const plugins = [
    new webpack.BannerPlugin({
      banner: `pano.js v${pkg.version} | (c) Sinan Bolel & Prescott Prue`,
      entryOnly: true, raw: false
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]

  if (!options.dev) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        compressor: {
          screw_ie8: true,
          warnings: false
        }
      })
    )
  }

  return {
    bail: !options.dev,
    devtool: options.dev ? 'eval-source-map' : 'sourcemap',
    entry: path.join(__dirname, '..', 'src/index'),
    module: {
      loaders: [{
          exclude: /node_modules/,
          loaders: ['babel-loader'],
          test: /\.js$/
      }]
    },
    output: {
      library: 'Pano',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, '..', buildPath),
      publicPath: '/dist/'
    },
    plugins: plugins,
    resolve: {
      alias: { assets: path.resolve(__dirname, '..', 'assets') },
      extensions: ['.js']
    },
    target: options.target
  }
}
