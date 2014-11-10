//requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

//sources
var jsSources = ['components/js/*.js'];
var sassSources = ['components/scss/application.scss'];

//gulp task definitions
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('application.js'))
    //.pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

gulp.task('sass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/scss',
      style: 'nested'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/scss/**/*.scss', ['sass']);
});


//runs all tasks through one command of 'gulp'
gulp.task('default', ['js', 'sass', 'watch']);
