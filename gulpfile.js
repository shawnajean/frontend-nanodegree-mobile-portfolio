var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var useref = require('gulp-useref');

var src = 'src/';
var dist = 'dist/';

var paths = {
  js: src + '/**/*.js',
  css: src + '**/*/.css',
  html: src + '**/*.html',
  jpg: src + '**/*.jpg',
  png: src + '**/*.png'
}

gulp.task('move', ['clean'], function() {
  return gulp.src(['src/**/*.css','src/**/*.js','src/**/*.png','src/**/*.jpg']) // Get source files with gulp.src
  // skip this for now .pipe(aGulpPlugin()) // Sends it through a gulp plugin
  .pipe(gulp.dest('dist/')) // Outputs the file in the destination folder

});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/**/*.css', reload);
  gulp.watch('src/**/*.js', reload);
  gulp.watch('src/**/*.html', reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    },
  })
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src(['src/**/*.jpg','src/**/*.png'])
    .pipe(gulp.dest('dist/'));
});
