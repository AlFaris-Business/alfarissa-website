const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

// مسارات الملفات
const paths = {
  css: {
    src: 'css/**/*.css',
    dest: 'dist/css/'
  },
  js: {
    src: 'js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: '*.html',
    dest: 'dist/'
  },
  static: {
    src: ['robots.txt', 'sitemap.xml', 'sw.js', 'google*.html'],
    dest: 'dist/'
  }
};

// ضغط ملفات CSS
function minifyCSS() {
  return gulp.src(paths.css.src)
    .pipe(cleanCSS({
      compatibility: 'ie8',
      level: 2
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css.dest));
}

// ضغط ملفات JavaScript
function minifyJS() {
  return gulp.src(paths.js.src)
    .pipe(terser({
      compress: {
        drop_console: true
      }
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.js.dest));
}

// ضغط ملفات HTML
function minifyHTML() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// نسخ الملفات الثابتة
function copyStatic() {
  return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.dest));
}

// مراقبة التغييرات
function watchFiles() {
  gulp.watch(paths.css.src, minifyCSS);
  gulp.watch(paths.js.src, minifyJS);
  gulp.watch(paths.html.src, minifyHTML);
  gulp.watch(paths.static.src, copyStatic);
}

// تعريف المهام
const build = gulp.series(
  gulp.parallel(minifyCSS, minifyJS, minifyHTML, copyStatic)
);

const watch = gulp.series(build, watchFiles);

// تصدير المهام
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
exports.minifyHTML = minifyHTML;
exports.copyStatic = copyStatic;
exports.watch = watch;
exports.build = build;
exports.default = build;