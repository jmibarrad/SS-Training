'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const pump = require('pump');

var sass_src = 'app/stylesheets/**/*.scss';
var sass_dest = 'app/stylesheets/css';
var html_src = 'app/*.html';

gulp.task('connect', () => {
  connect.server({
    root: 'app', // no root = actual directory, with root = file(s) path
    livereload: true
  });
});

gulp.task('sass', () => {
  return gulp.src(sass_src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(sass_dest));
});

gulp.task('html', () => {
  gulp.src(html_src)
    .pipe(connect.reload());
});

gulp.task('babel', () => {
    return gulp.src('app/components/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./app/temp'));
});

gulp.task('compress', ['babel'], (cb) => {
  pump([
        gulp.src('app/temp/**/*.js'),
        uglify(),
        gulp.dest('./app/dist')
    ],
    cb
  );
});

gulp.task('minify-css', () => {
    return gulp.src('app/stylesheets/css/main.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', () => {
  gulp.watch([html_src, sass_src], ['html', 'sass']);
});

gulp.task('default', ['connect', 'watch','babel', 'minify-css', 'compress']);

/*
Material Used
-https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization
-https://css-tricks.com/gulp-for-beginners/
*/
