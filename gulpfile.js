var gulp = require('gulp'),
connect = require('gulp-connect'),
sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'app', // no root = actual directory, with root = file(s) path to live reload
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);


/*
Material Used
-https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization
-https://css-tricks.com/gulp-for-beginners/
*/
