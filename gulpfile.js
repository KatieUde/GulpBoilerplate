var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
// gulp.task(nameOfTask, callback);
// asynchronous callback method

// watching for any changes to ANY javascript file in folder
// followed by a callback (function)
// in function tell gulp to re-compile and restart
watch(['./source/*.js'], function() {
  console.log('App has been modified; re-compiling');
  gulp.start('default');
});

gulp.task('default', function() {
  // console.log('yeaaaaaa boiiiii');
  return browserify('./source/app.js')
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./build/'))
});
