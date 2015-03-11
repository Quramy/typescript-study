'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var ts = require('gulp-typescript');
var merge = require('merge2');
var del = require('del');
var browserSync = require('browser-sync');
var mainBowerFiles = require('main-bower-files');
var tsProject = ts.createProject({
  declarationFiles: false,
  noExternalResolve: false
});

gulp.task('bs.init', ['inject'], function () {
  browserSync({
    server: {
      baseDir: ['./.tmp', './bower_components']
    }
  });
});

gulp.task('scripts', function() {
  var tsResult = gulp.src('src/**/*.ts').pipe(ts(tsProject));

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
    //tsResult.dts.pipe(gulp.dest('.tmp/_definitions')),
    tsResult.js.pipe(gulp.dest('.tmp'))
  ]);
});

gulp.task('inject', ['scripts'], function () {
  return gulp.src(['src/index.html'])
    .pipe($.inject(gulp.src(mainBowerFiles().concat(['.tmp/**/*.js'])), {
      ignorePath: ['.tmp', 'bower_components']
    }))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('serve', ['bs.init'], function () {
  return gulp.watch(['src/**/*.ts'], ['inject', browserSync.reload]);
});

gulp.task('clean', function (done) {
  del(['.tmp'], function () {
    done();
  });
});
