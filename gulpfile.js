var gulp = require('gulp'),
    gutil = require('gulp-util'),
    babel = require('gulp-babel'),
    server = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps'),
    conkat = require('gulp-concat'),
    stylus = require('gulp-stylus');
;

var es6Files = ['src/scripts/**/*.js', '!src/scripts/vendor/**'];
var styles = 'src/styles/**/*.styl';

gulp.task('babel', function(){
  gulp.src(es6Files)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }).on('error', gutil.log))
    .pipe(conkat('game.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function(){
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('watch',['stylus', 'babel'], function(){
  gulp.watch(es6Files, ['babel']);
  gulp.watch(styles, ['stylus']);
});

gulp.task('stylus', function(){
  gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true
    }).on('error', gutil.log))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'serve']);
