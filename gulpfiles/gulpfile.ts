
/// <reference path="../typings/gulp/gulp.d.ts" />
import gulp = require('gulp');

gulp.task('hello', done => {
  console.log('Hello!');
  done();
});
