var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('compress', function() {
	gulp.src('src/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify('scrollbars.min.js'))
			.pipe(gulp.dest('dist'))
});

gulp.task('default', ['compress'], function(){
});