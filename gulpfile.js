var fs        = require('fs');
var gulp      = require('gulp');
var pkg       = require('./package.json');
gulp.util     = require('gulp-util');

gulp.task( 'build', function(){
  return gulp.src('dist.less')
    .pipe( require('gulp-less')() )
    .pipe( require('gulp-autoprefixer')() )
    .pipe( require('gulp-concat')('credit-card-logos.css') )
    .pipe( gulp.dest('dist') );
});

gulp.task( 'server', function(){
  gulp.src('./')
    .pipe( require('gulp-webserver')({
      directoryListing: true
    }));
});

gulp.task( 'watch', function(){
  gulp.watch( ['*.less'], ['build'] );
});

gulp.task( 'default', [ 'build', 'server', 'watch' ] );