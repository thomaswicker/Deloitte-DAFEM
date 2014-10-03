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
var sassSources = ['components/sass/styles.scss'];
var htmlSources = ['/*.html'];
//var jsonSources = ['js/*.json'];

//gulp task definitions
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    //.pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(connect.reload())
});

gulp.task('sass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'img',
      style: 'compressed'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['sass']);
  //gulp.watch(jsonSources, ['json']);
});

gulp.task('connect', function () {
	connect.server({
		root: 'tw3',
		livereload: true
	});	
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
gulp.task('default', ['js', 'sass', 'connect', 'watch']);