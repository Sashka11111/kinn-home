import browserSync from 'browser-sync';
import { deleteAsync } from 'del';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import * as sass from 'sass';

const bs = browserSync.create();
const sassCompiler = gulpSass(sass);

const paths = {
  html: 'src/*.html',
  styles: 'src/styles/**/*.sass',
  scripts: 'src/js/**/*.js',
  images: 'src/images/**/*',
};

export const html = () => gulp.src(paths.html).pipe(gulp.dest('dist'));

export const styles = () =>
  gulp.src(paths.styles)
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'))
    .pipe(bs.stream());

export const scripts = () =>
  gulp.src(paths.scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(bs.stream());

export const images = () =>
  gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));

export const clean = () => deleteAsync(['dist']);

export const serve = () => {
  bs.init({ server: 'dist' });
  gulp.watch(paths.html, gulp.series(html)).on('change', bs.reload);
  gulp.watch(paths.styles, gulp.series(styles));
  gulp.watch(paths.scripts, gulp.series(scripts));
};

export const build = gulp.series(clean, gulp.parallel(html, styles, scripts, images));

export default gulp.series(build, serve);
