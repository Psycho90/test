const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
// const cleanCSS = require('gulp-clean-css');
const smartgrid = require('smart-grid');

const config = {
    root: './src/',
    html: {
        src: 'index.html'
    },
    css: {
        watch: 'precss/**/*.less',
        src: 'precss/styles.less',
        dest: 'css'
    },
    smartgrid: {
        src: 'smartgrid.js',
        dest: 'precss'
    }
};

gulp.task('css', function () {
    return gulp.src('./src/precss/styles.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('grid', function(){
    let options = require('./src/js/smartgrid.js')
    smartgrid(config.root + config.smartgrid.dest, options);
});

gulp.task('watch', function () {
    gulp.watch('./src/precss/*.less', gulp.series('css'))
})
