'use strict'

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')

const buildPath = 'dist'
const publicPath = 'assets'
const port = process.env.PORT || 3000
const webpackPort = process.env.WEBPACK_PORT || 3001

function createWebpackConfig (options) {
  if (!options) { options = {} }
  // Sourcemaps
  const devtool = options.dev ? 'eval-source-map' : 'sourcemap'

  const entry = path.join(__dirname, '..', 'src/index')

  // Webpack dev-server
  // if (options.dev) {
  //   entry = entry.concat(
  //     'webpack/hot/only-dev-server',
  //     'webpack-dev-server/client?http://localhost:' + webpackPort
  //   )
  // }

  const output = {
    path: path.resolve(__dirname, '..', buildPath),
    library: 'Pano',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  }

  var plugins = [
    new webpack.BannerPlugin('pano.js v' + pkg.version + ' | (c) Sinan Bolel & Prescott Prue', {
      raw: false, entryOnly: true
    }),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('style.css', {allChunks: true}), //put all imported css into one bundled css file
    //
    // function () {
    //   this.plugin('done', function (stats) {
    //     fs.writeFileSync(
    //       path.resolve(__dirname, '..', 'stats.json'),
    //       JSON.stringify(stats.toJson())
    //     )
    //   })
    // }
  ]

  if (!options.dev) {
    plugins = plugins.concat(
      [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          compressor: {
            screw_ie8: true,
            warnings: false
          }
        })
      ]
    )
  }
  // Place the tags into an html file
  if (options.includeHtml) {
    plugins = plugins.concat(
      // new HtmlWebpackPlugin({
      //   template: path.resolve(__dirname, '..', 'index.html'),
      //   filename: 'index.html'
      // })
    )
  }

  const resolve = {
    alias: {
      assets: path.resolve(__dirname, '..', 'assets')
    },
    extensions: ['', '.js']
  }

  const cssLoaders = [
    'css?root=..',
    'sass?outputStyle=expanded&'
  ].join('!')

  const loaders = [
    {
      exclude: /node_modules/,
      test: /\.js$/,
      loaders: ['babel']
    },
    // npm i --save-dev style-loader css-loader scss-loader
    // {
    //   test: /\.(scss|css)$/,
    //   loader: options.dev
    //   ? 'style!' + cssLoaders
    //   : ExtractTextPlugin.extract(cssLoaders)
    // },
    // npm i --save-dev url-loader file-loader
    // {
    //   exclude: /node_modules/,
    //   test: /\.(jpg|png|svg)$/,
    //   loader: 'url?limit=8192'
    // },
    // npm i --save-dev url-loader file-loader
    // {
    //   test: /\.json$/,
    //   loader: 'json'
    // },
    // npm i --save-dev url-loader file-loader
    // {
    //   test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
    //   loader: 'url?limit=8192'
    // }
  ]
  return {
    bail: !options.dev,
    devtool: devtool,
    entry: entry,
    output: output,
    plugins: plugins,
    resolve: resolve,
    module: { loaders: loaders },
    target: options.target,

    port: port,
    webpackPort: webpackPort,
    buildPath: buildPath,
    publicPath: publicPath
  }
}
module.exports = createWebpackConfig
