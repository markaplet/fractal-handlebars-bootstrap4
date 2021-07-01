'use strict';

const config = require('config');
const path = require('path');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
let browserSync;
let assets = {};

// function getBrowserCompatibility() {
// 	return config.get('code.compatibility.browserslist');
// }

function getBrowserSyncInstance() {
	const name = `Nitro${config.get('server.port')}`;
	if (config.get('project.mode.livereload') && !browserSync) {
		browserSync = require('browser-sync').create(name);
	}
	return browserSync;
}

function getSourceComponents(ext, project = 'default') {
	const type = typeof ext === 'string' && (ext === 'js' || ext === 'css') ? ext : null;

	if (!assets.hasOwnProperty(project) || (!assets[project].hasOwnProperty('js') || !assets[project].hasOwnProperty('css'))) {
		updateSourceComponents(project);
	}

	return type ? assets[project][type] : assets[project];
}

function updateSourceComponents(project) {
	let key, ext, type, asset, result, componentKey, componentPath;

	assets[project] = {
		css: [],
		js: [],
	};

	for (key in config.get('assets')[project]) {
		if (config.assets.hasOwnProperty(project) && config.assets[project].hasOwnProperty(key)) {
			ext = path.extname(key);
			if (ext) {
				type = ext.replace(/[^a-z]/g, '');
				asset = config.assets[project][key];
				result = {
					name: key,
					deps: [],
					src: [],
				};

				for (componentKey in asset) {
					if (asset.hasOwnProperty(componentKey)) {
						componentPath = asset[componentKey];
						if (componentPath.indexOf('+') === 0) {
							result.deps.push(componentPath.substr(1));
						} else {
							result.src.push(componentPath);
						}
					}
				}
				assets[project][type].push(result);
			}
		}
	}
}

function getTask(task) {
	return require('./' + task)(gulp, plugins);
}

function getTmpDirectory(subPath) {
	let tmpPath = 'project/tmp';
	if (subPath && typeof subPath === 'string') {
		tmpPath += `/${subPath}`;
	}
	return tmpPath;
}

module.exports = {
	// getBrowserCompatibility,
	getBrowserSyncInstance,
	getSourceComponents,
	getTask,
	getTmpDirectory,
	updateSourceComponents,
};
