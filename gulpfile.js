var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('compress', function() {
	gulp.src('src/*.js')
			.pipe(uglify('scrollbars.min.js'))
			.pipe(gulp.dest('dist'))
});

gulp.task('default', ['compress'], function(){
});