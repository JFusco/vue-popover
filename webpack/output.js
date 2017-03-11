'use strict';

import webpack from 'webpack';
import path from 'path';
import config from '../config.json';

const { library } = config.scripts;
const { NODE_ENV } = process.env;

let output = {
	filename: '[name].js',
	path: path.join(__dirname, '../dist'),
	publicPath: '/'
};

if(NODE_ENV === 'production'){
	Object.assign(output, {
		libraryTarget: 'umd',
		library
	});
}else{
	Object.assign(output, {
		pathinfo: true
	});
}

export default output;
