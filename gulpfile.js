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

gulp.task('slick-css', function () {
    return gulp.src('./node_modules/slick-carousel/slick/slick.css')
        .pipe(gulp.dest('./src/css'));
})

gulp.task('slick-theme', function () {
    return gulp.src('./node_modules/slick-carousel/slick/slick-theme.css')
        .pipe(gulp.dest('./src/css'));
})

gulp.task('slick-js', function () {
    return gulp.src('./node_modules/slick-carousel/slick/slick.min.js')
        .pipe(gulp.dest('./src/js'));
})

gulp.task('slick', gulp.series('slick-css', 'slick-theme', 'slick-js'))
//
// gulp.task('jquery', function () {
//     return gulp.src('./node_modules/jquery/dist/jquery.min.js')
//         .pipe(gulp.dest('./build/js'));
// })

gulp.task('watch', function () {
    gulp.watch('./src/precss/*.less', gulp.series('css'))
})
