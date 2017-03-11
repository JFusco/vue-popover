'use strict';

var webpack = require('karma-webpack');
var path = require('path');

module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		files: ['__tests__/*-test.js'],
		plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-spec-reporter', 'karma-coverage'],
		browsers: ['PhantomJS'],
		preprocessors: {
			'__tests__/*-test.js': ['webpack']
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'lcov', subdir: 'reports' }
			]
		},
		colors: true,
		reporters: ['spec', 'coverage'],
		webpack: {
			module: {
				rules: [
					{
						test: /\.js?$/,
						loader: 'babel-loader',
						exclude: /(node_modules)/
					},
					{
						test: /\.vue$/,
						loader: 'vue-loader',
						options: {
							loaders: {
								scss: 'css-loader!sass-loader',
								js: 'isparta-loader'
							}
						}
					},
					{
						enforce: 'pre',
						test: /\.js/,
						loader: 'isparta-loader',
						exclude: /(__tests__|node_modules)/
					}
				],
				noParse: [
					/node_modules\/sinon\//
				]
			},
			resolve: {
				alias: {
					'vue$': 'vue/dist/vue.esm.js',
					'styles': path.resolve(__dirname, 'src/component/scss'),
					'sinon': 'sinon/pkg/sinon.js'
				}
			}
		},
		webpackMiddleware: { noInfo: true }
	});
};
