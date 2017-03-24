var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var htmlclean = require('gulp-htmlclean');
var panini = require('panini');

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
    var out = folder.build + 'html/';

    var page = gulp.src(folder.src + 'html/pages/**/*.html').pipe(panini({
        root: folder.src + 'html/pages/',
        layouts: folder.src + 'html/layouts/',
        partials: folder.src + 'html/partials/',
        helpers: folder.src + 'html/helpers/',
        data: folder.src + 'data/'
    })).pipe(newer(out));

    if (!devBuild) {
        page = page.pipe(htmlclean());
    }

    return page.pipe(gulp.dest(out));
});
