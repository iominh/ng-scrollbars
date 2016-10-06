var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var ngAnnotate = require('gulp-ng-annotate');
var browserSync = require('browser-sync').create();

gulp.task('package', function() {
	gulp.src('src/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify('scrollbars.min.js'))
	.pipe(gulp.dest('dist'))
});

gulp.task('dev', function() {
    browserSync.init({
        server: "./"
    });	
});

gulp.task('default', ['package']);