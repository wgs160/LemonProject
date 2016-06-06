/**
 * Created by 15031493 on 2015/5/27.
 */
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');

//编译less
gulp.task('less', function () {
    gulp.src(['less/base.less','less/lemon.less','less/*.less'])
        .pipe(less())
        .pipe(concat("lemon.css"))
        .pipe(autoprefixer({
            //browsers: 'last 2 versions,Chrome > 30'
            browsers: 'Chrome > 30,safari > 5'
        }))
        .pipe(minifycss({
            keepBreaks: true    //压缩保持换行
        }))
        .pipe(gulp.dest('css'))
});

gulp.task('default', ['less']);
gulp.task('watch', ['default'], function () {
    gulp.watch('less/*.less', ['less']);
})
