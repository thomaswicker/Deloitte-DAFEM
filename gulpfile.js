//requires
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    // ftp = require('gulp-ftp');

//sources
var jsSources = ['components/js/*.js'];
var sassSources = ['components/scss/application.scss'];
var htmlSources = ['/*.html'];
//var jsonSources = ['js/*.json'];

//gulp task definitions
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('application.js'))
    //.pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(connect.reload())
});

gulp.task('sass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/scss',
      image: 'img',
      style: 'nested'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  //gulp.watch(jsonSources, ['json']);
});


gulp.task('html', function () {
  	gulp.src(htmlSources)
  		.pipe(connect.reload())
  		//.pipe(minifyHTML())
});

// gulp.task('ftp', function () {
//     return gulp.src('src/*')
//         .pipe(ftp({
//             host: 'ftp.thomaswicker.com',
//             user: 'thomaswicker',
//             pass: 'Dzyn3120605!'
//         }));
// });


//runs all tasks through one command of 'gulp'
gulp.task('default', ['js', 'sass', 'watch']);
