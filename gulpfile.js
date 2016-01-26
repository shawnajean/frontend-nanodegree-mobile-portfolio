var gulp = require('gulp');
var del = require('del');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

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
  return gulp.src([paths.css,paths.js,paths.png,paths.jpg]) // Get source files with gulp.src
  // skip this for now .pipe(aGulpPlugin()) // Sends it through a gulp plugin
  .pipe(gulp.dest('dist/')) // Outputs the file in the destination folder

});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

gulp.task('minify', function() {
  return gulp.src(paths.html)
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest(dist))
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src([paths.png, paths.jpg])
    .pipe(gulp.dest('dist/'));
});
