'use strict';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const rules = [
	{
		test: /\.js?$/,
		loader: 'babel-loader',
		include: [path.resolve(__dirname, '../src/component')]
	},
	{
		enforce: 'pre',
		test: /.vue$/,
		loader: 'eslint-loader',
		include: [path.resolve(__dirname, '../src/component')]
	},
	{
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				scss: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader',
					fallback: 'vue-style-loader'
				})
			}
		}
	}
];

export default rules;
