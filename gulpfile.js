const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({style: 'compressed' }))  
        .pipe(gulp.dest('./dist/css'));
}


// nao apago olá mundos.
// function testeGulp(cb) {
//     console.log("Olá Mundo!");
//     cb();
// }

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}