'use strict';

const merge = require('merge-stream');

module.exports = (gulp, plugins) => {
	return () => {
		const fonts = gulp
			.src(['public/assets/font/**/*.*', '!public/assets/font/fractal/**'])
			.pipe(gulp.dest('build/assets/font'));

		const css = gulp
			.src(['public/assets/css/**/*.*', '!public/assets/css/docs.css', '!public/assets/css/design-tokens.min.css'])
			.pipe(gulp.dest('build/assets/css'));

		const js = gulp
			.src(['public/assets/js/**/*.*', '!public/assets/js/docs.js', '!public/assets/js/holder-modified.js'])
			.pipe(gulp.dest('build/assets/js'));

		const images = gulp
			.src(['public/assets/img/**/*.*','!public/assets/img/fractal/**/*.*', '!public/assets/img/demo/**/*.*'])
			.pipe(gulp.dest('build/assets/img'));

		return merge(fonts, css, js, images);
	};
};
