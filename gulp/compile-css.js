'use strict';

const path = require('path');
const utils = require('./utils');
const Promise = require('es6-promise').Promise;
const autoprefixer = require('autoprefixer');
const filterGradient = require('postcss-filter-gradient');
const bannerData = {
	date: new Date().toISOString().slice(0, 19),
	pkg: require('../package.json'),
};
const banner = ['/*! ',
	' * <%= bannerData.pkg.name %>',
	' * @version v<%= bannerData.pkg.version %>',
	' * @date <%= bannerData.date %>',
	' */',
	''].join('\n');

module.exports = (gulp, plugins) => {
	return () => {
		const assets = utils.getSourceComponents('css');
		const promises = [];
		// const browserCompatibility = utils.getBrowserCompatibility();
		const processors = [
			autoprefixer({
				// overrideBrowserslist: browserCompatibility,
				cascade: true,
				grid: true,
			}),
			filterGradient
		];

		assets.forEach(function(asset) {
			const filename = path.basename(asset.name, '.css');

			promises.push(new Promise((resolve) => {
				gulp
					.src(asset.src, { base: '.' })
					.pipe(plugins.cached(asset.name))
					// .pipe(plugins.sourcemaps.init({ loadMaps: true }))
					.pipe(plugins.remember(asset.name))
					.pipe(plugins.concat(filename + '.scss'))
					.pipe(plugins.sass().on('error', (err) => {
						console.log(err.message);
					}))
					.pipe(plugins.postcss(processors))
					.pipe(plugins.header(banner, { bannerData }))
					// .pipe(plugins.sourcemaps.write('.'))
					.pipe(gulp.dest('public/assets/css/'))
					.on('end', () => {
						resolve();
					});
			}));
		});

		return Promise.all(promises);
	};
};
