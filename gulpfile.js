// Required

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('concat-js', function(){
	gulp.src('scripts/**/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/script'));
});

gulp.task('concat-css', function(){
	gulp.src('styles/**/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/styles'));
});

gulp.task('serve', ['default'],function(){
	browserSync.init({
		server: {
     		baseDir: "./dist",
    routes: {
        "/bower_components": "bower_components",
        "/dist": "dist",
        "/scripts": "scripts",
        "/images": "images"
    }
}
	});
});

gulp.task('watch', function(){
	gulp.watch(['scripts/**/*.js', 'styles/**/*.css','*.html'], ['inject']).on("change", reload);
});

gulp.task('inject', function() {
    gulp.src('index.html')
        .pipe(wiredep({}))
        .pipe(inject(gulp.src(['dist/**/*.js', 'dist/**/*.css'], {read: false})))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat-js','concat-css','inject','watch']);