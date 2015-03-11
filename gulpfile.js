'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var del = require('del');

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true
});

gulp.task('scripts', function() {
  var tsResult = gulp.src('src/**/*.ts').pipe(ts(tsProject));

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
    tsResult.dts.pipe(gulp.dest('.tmp/definitions')),
    tsResult.js.pipe(gulp.dest('.tmp/js'))
  ]);
});

gulp.task('clean', function (done) {
  del(['.tmp'], function () {
    done();
  });
});
