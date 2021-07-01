'use strict';

const config = require('config');
const utils = require('./utils');
const globby = require('globby');

module.exports = (gulp, plugins) => {

	const throttleBase = config.get('project.watch.throttle.base');
	const throttleCache = config.get('project.watch.throttle.cache');
	const lastRun = {};

	function isDependentStyleSource(file) {
		let isDependent = false;
		utils.getSourceComponents('css').forEach((asset) => {
			globby.sync(asset.deps).forEach((path) => {
				if (file.replace(/\\/g, '/').endsWith(path)) {
					isDependent = true;
				}
			});
		});
		return isDependent;
	}
	function clearCssCache() {
		utils.getSourceComponents('css').forEach((asset) => {
			if (plugins.cached.caches && plugins.cached.caches[asset.name]) {
				delete plugins.cached.caches[asset.name];
			}
			if (plugins.remember.cacheFor(asset.name)) {
				plugins.remember.forgetAll(asset.name);
			}
		});
	}
	function checkCssCache(e) {
		if (
			isDependentStyleSource(e.path) ||
			e.event === 'unlink'
		) {
			processChange('cssCache', clearCssCache, throttleCache);
		}
	}
	function processChange(type, func, throttle) {
		type = type || 'other';
		func = func || function () {};
		throttle = throttle || throttleBase;

		// call function only once in defined time
		lastRun[type] = lastRun[type] || 0;
		if (new Date() - lastRun[type] > throttle) {
			func();
		}
		lastRun[type] = new Date();
	}

	return () => {
		// const browserSync = utils.getBrowserSyncInstance();

		plugins.watch([
			'src/assets/css/**/*.scss',
			'src/components/**/css/**/*.scss',
		], (e) => {
			processChange('css', () => {
				checkCssCache(e);
				gulp.start('compile-css');
			});
		});

		plugins.watch([
			'src/assets/js/**/*.js',
			'src/components/**/js/**/*.js',
		], () => {
			processChange('js', () => {
				gulp.start('compile-js');
			});
		});

		plugins.watch([
			`src/pages/**/*.hbs`,
			`src/pages/**/*.json`,
			`src/components/**/*.hbs`,
			`src/components/**/*.json`,
		], () => {
			processChange('data', () => {
				return;
			});
		});

		plugins.watch([
			'src/assets/font/**/*',
			'src/assets/img/**/*',
		], () => {
			gulp.start('copy-assets');
		});
	};
};
