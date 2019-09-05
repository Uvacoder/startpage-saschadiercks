/* #### Setting #### */
const config = require('./_config.json')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const terser = require('gulp-terser')
const gulpif = require('gulp-if')

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task('scripts:build', function () {
	return gulp.src(config.assetSrc + '/js/')
	.pipe(webpack({
		config : require('../webpack.config.js')
	}))
	.pipe(gulpif(process.env.NODE_ENV === 'production' ,
		terser()
	))
	.pipe(gulp.dest('.'));
});
