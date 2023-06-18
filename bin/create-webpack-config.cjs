/**
 * Create Webpack Configuration
 * @param {Object} options
 * @param {boolean} options.dev
 * @param {string} options.target
 * @returns {Object}
 */
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('../package.json')

// paths
const buildPath = 'dist'
const publicPath = 'assets'

/**
 * Create Webpack Configuration
 * @param {Object} options - options object
 * @param {boolean} options.dev - development mode
 * @param {string} options.target - target
 * @returns {Object}
 * @example
 *  const webpack = require('webpack')
 *  const createWebpackConfig = require('./create-webpack-config')
 *  const webpackConfig = createWebpackConfig({ dev: true, target: 'web' })
 *  webpack(webpackConfig, (err, stats) => {
 *    if (err || stats.hasErrors()) {
 *      // Handle errors here
 *    }
 *    // Done processing
 *  })
 */
const createWebpackConfig = (options = {}) => {
  /**
   * Get chunk name with the correct extension
   * @param {Object} chunkData - chunk data
   * @param {Object} chunkData.chunk - chunk object
   * @param {string} chunkData.chunk.name - chunk name
   * @returns {string} chunk name
   */
  const getChunkName = ({ chunk: { name = '' } } = {}) => {
    if (!name) throw new Error('Chunk name is required')
    const ext = options.dev ? '.js' : '.min.js'
    return name === 'main' ? `pano${ext}` : `pano-[name]${ext}`
  }

  return {
    target: options.target,
    devtool: options.dev ? 'eval-source-map' : 'source-map',
    mode: options.dev ? 'development' : 'production',
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
      filename: getChunkName,
      library: {
        name: 'Pano',
        type: 'umd',
      },
      path: path.resolve(__dirname, '..', buildPath),
      publicPath: `/${buildPath}/`,
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: `pano.js v${pkg.version} | (c) Sinan Bolel & Prescott Prue`,
        entryOnly: true,
        raw: false,
      }),
      new webpack.EnvironmentPlugin({
        npm_lifecycle_event: '', // override to avoid error
      })
    ],
    resolve: {
      alias: {
        assets: path.resolve(__dirname, '..', publicPath),
      },
      extensions: ['.js'],
    },
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
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'all',
          },
          default: {
            test: /[\\/]src[\\/]/,
            name: 'pano',
            priority: -20,
          },
        },
      },
    },
  }
}

module.exports = createWebpackConfig
