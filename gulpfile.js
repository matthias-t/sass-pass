'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
  return gulp.src('./demo/demo.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
});

gulp.task('default', function () {
  return gulp.watch(['./**/*.scss'], ['test']);
});
