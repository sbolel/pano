'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const header = require('gulp-header');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const pkg = require('./package.json');

gulp.task('dist', () => {
  return gulp.src([
    'node_modules/panolens.js/panolens.js',
    'src/pano.js',
  ]).pipe(concat('pano.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(header('/*! <%= pkg.name %> <%= pkg.version %> */\n', { pkg: pkg }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('public:js', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'dist/pano.min.js',
  ]).pipe(gulp.dest('./public/dist'));
});

gulp.task('public:css', () => {
  return gulp.src([
    'public/css/normalize.css',
    'public/css/github-light.css',
    'public/css/styles.css',
    'src/pano.css',
  ]).pipe(concat('styles.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(header('/*! <%= pkg.name %> <%= pkg.version %> */\n', { pkg: pkg }))
    .pipe(gulp.dest('./public/dist'))
});

gulp.task('build:demo', ['dist', 'public:js', 'public:css']);
gulp.task('build', ['dist']);
gulp.task('default', ['build']);
