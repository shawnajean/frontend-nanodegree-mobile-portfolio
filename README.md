## Website Performance Optimization portfolio project

### Getting Started

You can find the webpage [here](http://shawnajean.github.io/frontend-nanodegree-mobile-portfolio/src/index.html).

###Optimizations

* Media attributes for CSS files
* Async attribute for JS files
* Remove externally loaded font
* Compress and resize Images
* Fixed forced layout resets in updatePositions
* Restructure changePizzaSizes

### Gulp

#### Packages used

* [del](https://www.npmjs.com/package/del)
* [useref](https://www.npmjs.com/package/gulp-useref)
* [uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulpIf](https://www.npmjs.com/package/gulp-if)
* [cssnano](https://github.com/ben-eb/gulp-cssnano)
* [imagemin](https://github.com/sindresorhus/gulp-imagemin)
* [cache](https://github.com/jgable/gulp-cache)
* [runSequence](https://www.npmjs.com/package/gulp-run-sequence)

#### Tasks included

* **'clean'** - clears the dist folder
* **'minify'** - minifies the css and js files
* **'images'** - optimizes and caches the images
* **'cache:clear'** - clears the images from the cache
* **'build'** - runs clean > minify, images
