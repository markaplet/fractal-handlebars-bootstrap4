'use strict';

/**
 * Main Project Config
 * https://www.npmjs.com/package/config
 */

const path = require('path');
const basePath = path.normalize(path.join(__dirname, '../../'));

const config = {
	assets: require('./assets/default'),
	// code: {
	// 	compatibility: {
	// 		browserslist: ['> 1%', 'last 2 versions', 'ie 9', 'android 4', 'Firefox ESR', 'Opera 12.1'],
	// 	}
	// },
	project: {
		basePath,
		mode: {
			livereload: true,
			minified: false,
			offline: false,
		},
		watch: {
			partials: true,
			throttle: {
				base: 1000,
				cache: 3000,
			},
		},
	},
	server: {
		port: 8080,
		proxy: 8081,
		production: process.env.NODE_ENV && process.env.NODE_ENV.replace((/\s/g), '') === 'production' ? true : false,
	},
};

module.exports = config;
