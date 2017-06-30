// Required

var gulp = require('gulp'),
uglify = require('gulp-uglify');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');


gulp.task('watch', function(){
	gulp.watch(['scripts/**/*.js', '*.html'], ['inject']);
});

gulp.task('inject', function() {
    gulp.src('index.html')
        .pipe(wiredep({}))
        .pipe(inject(gulp.src(['scripts/**/*.js', 'styles/**/*.css'], {read: false})))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['inject','watch']);