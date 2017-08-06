const del = require('del');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const moduleImporter = require('sass-module-importer');
const browserSync = require('browser-sync');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const dir = {
  src: './source',
  dest: './.tmp'
}

gulp.task('clean', () => del([`${dir.dest}/*`], { dot: true }));

gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10',
  ];

  return gulp.src(`${dir.src}/stylesheets/**/*.scss`)
    .pipe($.sourcemaps.init())
    .pipe($.sass({ importer: moduleImporter() }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(`${dir.dest}/stylesheets`));
});

gulp.task('scripts', () =>
  gulp.src(`${dir.src}/javascripts/**/*.js`)
    .pipe($.plumber())
    // .pipe($.sourcemaps.init())
    .pipe($.babel({ presets: ['es2015'] }))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest(`${dir.dest}/javascripts`)));

gulp.task('serve', ['styles', 'scripts'], () => {
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    proxy: 'localhost:4567',
    port: 3000,
  });

  gulp.watch([`${dir.src}/stylesheets/**/*.scss`], ['styles', reload]);
  gulp.watch([`${dir.src}/javascripts/**/*.js`], ['scripts', reload]);

  gulp.watch([`${dir.dest}/stylesheets/**/*.scss`], [reload]);
  gulp.watch([`${dir.dest}/javascripts/**/*.js`], [reload]);
});

gulp.task('default', ['dev']);

gulp.task('dev', ['build', 'serve']);

gulp.task('build', ['styles', 'scripts']);
