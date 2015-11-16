var gulp = require('gulp'),
    less = require("gulp-less"),
    sass = require("gulp-sass"),
    watch = require("gulp-watch"),
    watchLess = require("gulp-watch-less"),
    rename = require("gulp-rename")
	;

gulp.task('build-less', function () {
    gulp.src('less/*.less')
	.pipe(watchLess('less/*.less'))
    .pipe(less())
    .pipe(rename(function(path){
		path.basename += ".less";
	}))
    .pipe(gulp.dest('css'));
});

gulp.task('build-sass', function () {
    gulp.src('sass/*.scss')
	.pipe(watch('sass/*.scss'))
    .pipe(sass())
	.pipe(rename(function(path){
		path.basename += ".scss";
	}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch-changed', function(){
	gulp.watch();
});

gulp.task('default', ['build-less', 'build-sass']);