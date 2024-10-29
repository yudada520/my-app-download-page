const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')
const path = require('path')

const Timestamp = new Date().getTime()
const ISPROD = process.env.NODE_ENV === 'production'

const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
	productionSourceMap: false,

	devServer: {
		// port: 8888,
	},

	configureWebpack: {
		output: {
			filename: `js/[name].js?v=${Timestamp}`,
			chunkFilename: `js/[name].js?v=${Timestamp}`,
		},
		resolve: {
			alias: {
				'@': resolve('./src'),
				'@i': resolve('./src/assets'),
			},
		},
		plugins: [
			new webpack.IgnorePlugin({
				resourceRegExp: /^\.\/locale$/,
				contextRegExp: /moment$/,
			}),
			new CompressionPlugin({
				filename: '[path][base].gz',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.html$/,
				threshold: 10240,
				minRatio: 0.8,
			}),
			new CompressionPlugin({
				filename: '[path][base].br',
				algorithm: 'brotliCompress',
				test: /\.(js|css|html|svg)$/,
				compressionOptions: {
					params: {
						[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
					},
				},
				threshold: 10240,
				minRatio: 0.8,
			}),
		],
	},

	chainWebpack(config) {
		if (ISPROD) {
			config.optimization.splitChunks({
				cacheGroups: {
					default: false,
					common: {
						name: 'chunk-common',
						chunks: 'all',
						minChunks: 2,
						maxInitialRequests: 5,
						minSize: 0,
						priority: 1,
						reuseExistingChunk: true,
					},
					vendors: {
						name: 'chunk-vendors',
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
						maxSize: 250000,
						maxInitialRequests: 20,
						priority: 2,
						reuseExistingChunk: true,
						enforce: true,
					},
					largeVendor: {
						name: 'chunk-large-vendor',
						test: /[\\/]node_modules[\\/](@your-large-library|another-large-library)[\\/]/,
						chunks: 'all',
						minSize: 300000,
						priority: 3,
						reuseExistingChunk: true,
						enforce: true,
					},
				},
			})

			// Lazy load layout components
			config.module
				.rule('vue')
				.use('vue-loader')
				.tap((options) => {
					options.compilerOptions = {
						...options.compilerOptions,
						preload: true,
					}
					return options
				})
		}
		config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
		config.module
			.rule('icons')
			.test(/.svg$/)
			.include.add(resolve('src/assets/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end()
	},

	transpileDependencies: true,
	lintOnSave: false,
})
