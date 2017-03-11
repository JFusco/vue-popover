'use strict';

import webpack from 'webpack';
import path from 'path';
import rules from './webpack/rules';
import config from './config.json';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const { library } = config.scripts;

module.exports =  {
	devtool: '#eval-source-map',
	entry: './src/example/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/docs'),
		publicPath: '/',
		libraryTarget: 'umd',
		library
	},
	module: {
		rules
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({
			filename: 'styles.css'
		}),
		new CopyWebpackPlugin([
			{ from: './src/example/index.html', to: './' },
			{ from: './src/example/index.css', to: './' }
		]),
		new webpack.DefinePlugin({
			'__DEV__': process.env.NODE_ENV === 'development',
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'src/example'),
		port: 8080
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'styles': path.resolve(__dirname, 'src/component/scss')
		}
	}
};
