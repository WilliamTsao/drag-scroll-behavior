/* eslint-disable no-undef */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('copy',() =>
  gulp.src("drag-scroll-behavior*")
  .pipe(gulp.dest("./bower_components/drag-scroll-behavior"))
);

gulp.task('serve',(done) => {

  browserSync.init({
    server: {
        baseDir: "./"
    }
  },done);

  gulp.watch("drag-scroll-behavior*").on('change', gulp.series('copy', browserSync.reload));
  gulp.watch("demo/**").on('change', gulp.series(browserSync.reload));

});