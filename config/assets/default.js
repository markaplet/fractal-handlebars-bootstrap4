/**
 *
 * 	default.js
 *
 * 	This file defines all of the CSS and JS files that should be compiled by the grunt tasks.
 *
 */

'use strict';
const bootstrapVariablesSASS = require('./bootstrap/bootstrap-variables-sass');
const bootstrapSASS = require('./bootstrap/bootstrap-sass');
const bootstrapJS = require('./bootstrap/bootstrap-js');
const customComponentsVariablesSASS = require('./custom-components/custom-components-variables-sass');
const customComponentsSASS = require('./custom-components/custom-components-sass');
const customComponentsGlobalJS = require('./custom-components/custom-components-global-js');
const customComponentsJS = require('./custom-components/custom-components-js');

/**
 *
 *  Turning on components in these files makes them available in both the default (ex: Fractal, Sitecore, etc.) and Drupal projects:
 *  bootstrap-sass
 * 	bootstrap-js
 *
 */

const config = {
	assets: {
		/**
		 *
		 * 	FRACTAL / SITECORE SETUP
		 *
		 *  Turning on components in these files makes them available in the default project (ex: Fractal, Sitecore, etc.):
		 *  custom-components-sass
		 * 	custom-components-js
		 *
		 */
		default: {
			//File names must be different than Drupal's or gulp-remember may cache the wrong one.
			'main.css': [
				...customComponentsVariablesSASS,
				...bootstrapVariablesSASS,
				...bootstrapSASS,
				'src/assets/css/_global-sass/basic.scss',
				'src/assets/css/_global-sass/layout.scss',
				'src/assets/font/iconfont/style.scss',	// Custom icon fonts
				...customComponentsSASS
			],

			// Styling for style guide markdown pages.
			'design-tokens.css': [
				...customComponentsVariablesSASS,
				...bootstrapVariablesSASS,
				'node_modules/bootstrap/scss/_type.scss',
				'src/assets/css/_global-sass/basic.scss',
				'src/assets/font/iconfont/style.scss',	// Custom icon fonts
				'src/components/**/list/css/**/*.scss',
				'src/components/**/rich_text/css/**/*.scss',
				'src/components/**/table/css/**/*.scss',

				// DESIGN TOKENS (only used for Fractal Style Guide)
				'src/components/**/colors/css/**/*.scss',
				'src/components/**/icons/css/**/*.scss',
				'src/components/**/fonts/css/**/*.scss',
			],

			'main.js': [
				'node_modules/jquery/dist/jquery.min.js',
				...customComponentsGlobalJS,
				...bootstrapJS,
				...customComponentsJS,
			],
		}
	},
};

module.exports = config.assets;
