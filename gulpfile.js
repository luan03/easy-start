
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');


gulp.task('css', function(){
  return gulp.src('resources/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
    gulp.watch('resources/less/*.less', ['css']);
});

gulp.task('default', ['watch']);