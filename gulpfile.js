const gulp = require('gulp');
const connect = require('gulp-connect');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('es7', function () {
    return browserify({entries: './async/1.js'})
        .transform(babelify, {
            "presets": [
                ["env", {
                    "targets": {
                        "node": "current"
                    }
                }]
            ],
            "plugins":["transform-runtime"]
        })
        .bundle()
        .pipe(source('1x.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./async'))
});

gulp.task('react', function () {
    return browserify({entries: './React/index.js'})
        .transform(babelify, {
            "presets": [
                'es2015',
                'stage-0',
                'react'
            ]
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./React'))
});