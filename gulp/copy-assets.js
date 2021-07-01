'use strict';

const merge = require('merge-stream');

module.exports = (gulp, plugins) => {
	return () => {
		const fonts = gulp
			.src(['src/assets/font/**/*.*'])
			.pipe(plugins.newer('public/assets/font'))
			.pipe(gulp.dest('public/assets/font'));
		
		const slickFonts = gulp
			.src(['node_modules/slick-carousel/slick/fonts/*.*'])
			.pipe(plugins.newer('public/assets/css/fonts'))
			.pipe(gulp.dest('public/assets/css/fonts'));
		
		const slickLoader = gulp
			.src(['node_modules/slick-carousel/slick/ajax-loader.gif'])
			.pipe(plugins.newer('public/assets/css/'))
			.pipe(gulp.dest('public/assets/css/'));

		const fractalStyle = gulp
			.src(['src/assets/css/mandelbrot-blue-custom.css'])
			.pipe(plugins.newer('public/assets/css'))
			.pipe(gulp.dest('public/assets/css'));

		const docsStyle = gulp
			.src(['src/assets/css/docs.css'])
			.pipe(plugins.newer('public/assets/css'))
			.pipe(gulp.dest('public/assets/css'));
		
		const docsScript = gulp
			.src(['src/assets/js/docs.js', 'src/assets/js/holder-modified.js', 'src/assets/js/modernizr-custom.js'])
			.pipe(plugins.newer('public/assets/js'))
			.pipe(gulp.dest('public/assets/js'));
		
		const images = gulp
			.src(['src/assets/img/**/*'])
			.pipe(plugins.newer('public/assets/img'))
			.pipe(gulp.dest('public/assets/img'));

		return merge(fonts, slickLoader, slickFonts, fractalStyle, docsStyle, docsScript, images);
	};
};
