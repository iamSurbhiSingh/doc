
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync'); // Reload the browser on file changes 

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});