var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
// gulp.task(nameOfTask, callback);
// asynchronous callback method
gulp.task('default', function() {
  // console.log('yeaaaaaa boiiiii');
  return browserify('./source/app.js')
    .transform("bableify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./build/'))
});
