var gulp = require('gulp');
var less = require('gulp-less');
var concator = require('gulp-concat');

gulp.task('buildCss', function() {
  console.log('Join less file...');

    gulp.src('./*.less')
        .pipe(concator('style.css'))
        .pipe(less())
        .pipe(gulp.dest('static/'))
});