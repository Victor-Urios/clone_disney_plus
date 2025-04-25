const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // usar npm i --save-dev gulp-imagemin@7.1.0
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({style: 'compressed' }))  
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}


// nao apago olá mundos.
// function testeGulp(cb) {
//     console.log("Olá Mundo!");
//     cb();
// }

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.s', gulp.parallel(scripts))
}