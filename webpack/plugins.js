'use strict';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import path from 'path';
import config from '../package.json';

const { NODE_ENV } = process.env;

const plugins = [
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.DefinePlugin({
		'__DEV__': process.env.NODE_ENV === 'development',
		'VERSION': JSON.stringify(config.version),
		'process.env': {
			'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}
	}),
	new ExtractTextPlugin({
		filename: 'styles.css'
	})
];

if(NODE_ENV === 'production'){
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			beautify: true,
			mangle: false
		}),
		new CleanWebpackPlugin(['coverage', 'dist', 'docs'], {
			root: path.join(__dirname, '../'),
			verbose: true,
			dry: false
		})
	);
}

export default plugins;
