use strict;

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('webpackdev', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/'));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

gulp.task('build', ['copy', 'webpackdev', 'sass']);
gulp.task('default', ['build']);
