var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var htmlclean = require('gulp-htmlclean');

var devBuild = (process.env.NODE_ENV !== 'production');

var folder = {
    src: 'src/',
    build: 'build/'
};

gulp.task('images', function() {
    var out = folder.build + 'images/';
    return gulp.src(folder.src + 'images/**/*').pipe(newer(out)).pipe(imagemin({optimizationLevel: 5})).pipe(gulp.dest(out));
});

gulp.task('html', ['images'], function() {
    var out = folder.build + 'html/',
        page = gulp.src(folder.src + 'html/**/*').pipe(newer(out));

    // minify production code
    if (!devBuild) {
        page = page.pipe(htmlclean());
    }

    return page.pipe(gulp.dest(out));
});
