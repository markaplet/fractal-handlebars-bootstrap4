'use strict';

const merge = require('merge-stream');

module.exports = (gulp, plugins) => {
	return () => {
		const fonts = gulp
			.src(['src/assets/font/**/*.*'])
			.pipe(plugins.newer('public/assets/font'))
			.pipe(gulp.dest('build-fractal/assets/font'));

		const css = gulp
			.src(['src/assets/css/**/*.*'])
			.pipe(plugins.newer('public/assets/css'))
			.pipe(gulp.dest('build-fractal/assets/css'));

		const js = gulp
			.src(['src/assets/js/**/*.*'])
			.pipe(plugins.newer('public/assets/js'))
			.pipe(gulp.dest('build-fractal/assets/js'));

		const images = gulp
			.src(['src/assets/img/**/*'])
			.pipe(plugins.newer('public/assets/img'))
			.pipe(gulp.dest('build-fractal/assets/img'));

		const slickLoader = gulp
			.src(['node_modules/slick-carousel/slick/ajax-loader.gif'])
			.pipe(plugins.newer('public/assets/css/'))
			.pipe(gulp.dest('build-fractal/assets/css/'));
		
		const slickFonts = gulp
			.src(['node_modules/slick-carousel/slick/fonts/*.*'])
			.pipe(plugins.newer('public/assets/css/fonts'))
			.pipe(gulp.dest('build-fractal/assets/css/fonts'));

		return merge(fonts, css, js, images, slickLoader, slickFonts);
	};
};
