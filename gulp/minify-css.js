'use strict';

const utils = require('./utils');
const Promise = require('es6-promise').Promise;
const del = require('del');

module.exports = (gulp, plugins) => {
	return () => {
		const assets = utils.getSourceComponents('css');
		const promises = [];

		assets.forEach((asset) => {
			promises.push(new Promise((resolve) => {
				gulp
					.src(`public/assets/css/${asset.name}`)
					.pipe(plugins.cssnano({
						mergeRules: false,
					}))
					.pipe(plugins.rename(asset.name.replace('.css', '.min.css')))
					.pipe(plugins.size({ showFiles: true, gzip: false, title: 'CSS minified' }))
					.pipe(plugins.size({ showFiles: true, gzip: true, title: 'CSS minified' }))
					.pipe(gulp.dest('public/assets/css/'))
					.on('end', () => {
						// del(`public/assets/css/${asset.name}`);
						// del(`public/assets/css/${asset.name}.map`);
						resolve();
					});
			}));
		});

		return Promise.all(promises);
	};
};
