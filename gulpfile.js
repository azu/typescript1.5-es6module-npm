"use strict";

var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var tsconfig = require("./tsconfig.json");
var filesGLob = tsconfig.filesGlob;
var tss = require("typescript-simplify");
gulp.task('scripts', function () {
    return gulp.src(filesGLob)
        .pipe(sourcemaps.init())
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('lib'));
});
gulp.task('build', function () {
    var b = browserify({
        entries: './src/index.ts',
        debug: true,
        extensions: [".ts"],
        transform: [
            tss.configure({
                "module": "commonjs",
                "noImplicitAny": true,
                "sourceMap": true
            })
        ]
    });
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./build/'));
});
