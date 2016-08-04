'use strict';

var gulp = require('gulp'),
connect = require('gulp-connect'),
sass = require('gulp-sass');

var sass_src = 'app/stylesheets/**/*.scss';
var sass_dest = 'app/stylesheets/css';
var html_src = 'app/*.html';

gulp.task('connect', function() {
  connect.server({
    root: 'app', // no root = actual directory, with root = file(s) path
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src(sass_src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(sass_dest));
});

gulp.task('html', function () {
  gulp.src(html_src)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([html_src, sass_src], ['html', 'sass']);
});

gulp.task('default', ['connect', 'watch']);


/*
Material Used
-https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization
-https://css-tricks.com/gulp-for-beginners/
*/
