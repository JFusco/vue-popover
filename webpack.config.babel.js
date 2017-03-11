'use strict';

import path from 'path';
import plugins from './webpack/plugins';
import rules from './webpack/rules';
import entry from './webpack/entry';
import output from './webpack/output';

const { NODE_ENV } = process.env;

const config = {
	devtool: NODE_ENV === 'production' ? '#eval' : '#eval-source-map',
	entry,
	output,
	module: {
		rules
	},
	plugins,
	node: {
		fs: 'empty'
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'styles': path.resolve(__dirname, 'src/component/scss')
		}
	}
};

if(NODE_ENV === 'production'){
	config.externals = {
		'vue': {
			root: 'Vue',
			commonjs2: 'vue',
			commonjs: 'vue',
			amd: 'vue'
		}
	};
}else{
	config.devServer = {
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'src/component'),
		port: 8080
	};
}

module.exports = config;
