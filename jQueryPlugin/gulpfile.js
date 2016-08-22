'use strict'

const gulp 			= require('gulp');
const connect 		= require('gulp-connect');
const browserify	= require('browserify');
const source 		= require('vinyl-source-stream');
const concat 		= require('gulp-concat-util');


var html_src = '*.html';


gulp.task('browserify', function(){
  return browserify('inputValidation.plugin.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('connect', () => {
  connect.server({
    livereload: true
  });
});

 
gulp.task('concat', ['browserify'], function() {
  gulp.src(['globals.js', 'bundle.js'])
    .pipe(concat('combined.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['connect', 'browserify', 'concat']);