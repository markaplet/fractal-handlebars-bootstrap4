'use strict';

const gulp = require('gulp');
const getTask = require('./gulp/utils').getTask;
const gulpSequence = require('gulp-sequence').use(gulp);

gulp.task('assets', gulpSequence('copy-assets', ['compile-js', 'compile-css']));
// Moved minify-css into a separate task in 'build' sequence because it would sometimes not compile when it's run
// in parallel with other minification tasks.
gulp.task('build-assets', ['minify-img', 'minify-js']);
gulp.task('build-assets-fractal', ['minify-img-fractal']);
gulp.task('clean-assets', getTask('clean-assets'));
gulp.task('clean-assets-build', getTask('clean-assets'));
gulp.task('clean-assets-fractal', getTask('clean-assets-fractal'));
gulp.task('compile-css', getTask('compile-css'));
gulp.task('compile-js', getTask('compile-js'));
gulp.task('copy-assets', getTask('copy-assets'));
gulp.task('copy-assets-build', getTask('copy-assets-build'));
gulp.task('copy-assets-fractal', getTask('copy-assets-fractal'));
gulp.task('fractal', getTask('fractal'));
gulp.task('fractal-static', getTask('fractal-static'));
gulp.task('minify-css', getTask('minify-css'));
gulp.task('minify-img', getTask('minify-img'));
gulp.task('minify-img-fractal', getTask('minify-img-fractal'));
gulp.task('minify-js', getTask('minify-js'));
gulp.task('watch-assets', ['assets'], getTask('watch-assets'));

// Creates assets in /public folder, starts Fractal, and recompiles assets when there are changes to files.
gulp.task('develop-fractal', gulpSequence('clean-assets', 'watch-assets', 'fractal'));

// Creates minified assets and puts them in /build folder. CSS and JS are concatenated into one main.css and main.js
// file each, respectively.
gulp.task('build', gulpSequence('clean-assets-build', 'assets', 'build-assets', 'minify-css', 'copy-assets-build'));

// Creates minified assets, and static Fractal files, and puts them in /build-fractal folder.
gulp.task('build-fractal', gulpSequence('clean-assets-fractal', 'assets', 'build-assets-fractal', 'copy-assets-fractal', 'fractal-static'));
