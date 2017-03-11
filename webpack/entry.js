'use strict';

import webpack from 'webpack';
import config from '../config.json';

const { entry, fileName } = config.scripts;
const { NODE_ENV } = process.env;
const entryFile = {};

if(NODE_ENV === 'production'){
	entryFile[fileName] = `./src/component/js/${entry}.vue`;
}else{
	entryFile.index = './src/component/';
}

export default entryFile;
