'use strict';

const utils = require('./utils');
const Promise = require('es6-promise').Promise;
const del = require('del');
const uglifyOptions = {
	output: {
		comments: /^!/,
	},
};

module.exports = (gulp, plugins) => {
	return () => {
		const assets = utils.getSourceComponents('js');
		const promises = [];

		assets.forEach((asset) => {
			promises.push(new Promise((resolve) => {
				gulp
					.src(`public/assets/js/${asset.name}`)
					.pipe(plugins.uglify(uglifyOptions))
					.pipe(plugins.rename(asset.name.replace('.js', '.min.js')))
					.pipe(plugins.size({ showFiles: true, gzip: false, title: 'JavaScript minified' }))
					.pipe(plugins.size({ showFiles: true, gzip: true, title: 'JavaScript minified' }))
					.pipe(gulp.dest('public/assets/js/'))
					.on('end', () => {
						// del('public/assets/js/main.js');
						// del('public/assets/js/main.js.map');
						resolve();
					});
			}));
		});

		return Promise.all(promises);
	};
};
