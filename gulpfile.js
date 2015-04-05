"use strict";

var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  var tsconfig = require("./src/tsconfig.json");
  var filesGLob = tsconfig.filesGlob;
  return gulp.src(filesGLob)
      .pipe(ts(tsconfig.compilerOptions))
      .pipe(gulp.dest('lib'));
});
gulp.task('build', ["scripts"], function(){
  var b = browserify({
    entries: './lib/index.js',
    debug: false,
  });
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/'));
});
