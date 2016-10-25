/**
 * Created by fed on 2016/10/25.
 */
const gulp = require('gulp');
const webpack = require('webpack-stream');
const path = require('path');

gulp.task('default', function () {
  return gulp.src('./sec/entry.js')
    .pipe(webpack({
      entry: './src/entry',
      output: {
        filename: '/js/[name].js',
        path: path.resolve('./dist')
      },
    }))
    .pipe(gulp.dest('./dist'));
});