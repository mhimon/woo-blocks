const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const postcssConfig = require( './postcss.config' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RtlCssPlugin = require( 'rtlcss-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const nodeSassGlobImporter = require( 'node-sass-glob-importer' );

const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
	...defaultConfig,

	entry: {
		'wb-blocks-editor': path.resolve( process.cwd(), 'src/index.js' ),
		// 'wb-admin': path.resolve( process.cwd(), 'src/js/admin.js' ),
		// 'wb-frontend': path.resolve( process.cwd(), 'src/js/frontend.js' ),
		// 'wb-editor-common': path.resolve( process.cwd(), 'src/scss/editor.scss' ),
		// 'wb-styles': path.resolve( process.cwd(), 'src/scss/styles.scss' ),
		// 'wb-admin-styles': path.resolve( process.cwd(), 'src/scss/admin.scss' ),
	},

	output: {
		filename: 'js/[name].js',
		path: path.resolve( process.cwd(), 'assets/' ),
	},

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							...postcssConfig,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
							sassOptions: {
								importer: nodeSassGlobImporter(),
							},
						},
					},
				],
			},
		],
	},

	stats: {
		...defaultConfig.stats,
		modules: false,
		warnings: false,
	},

	plugins: [
		...defaultConfig.plugins,

		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'css/[name].css',
		} ),
		// new RtlCssPlugin( {
		// 	filename: 'css/[name]-rtl.css',
		// } ),
	],
};
