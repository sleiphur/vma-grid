const fs = require('fs')
const gulp = require('gulp')
const del = require('del')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const prefixer = require('gulp-autoprefixer')
const merge = require('merge-stream')
const ts = require('gulp-typescript')


gulp.task('build_modules', () =>
  gulp
    .src(['dist/*.js'])
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
        extname: '.js',
      }),
    )
    .pipe(gulp.dest('dist')),
)

gulp.task('copy_font', () =>
    gulp.src('styles/font/*.*').pipe(gulp.dest('dist/font')),
)

gulp.task('build_style', () => {
  return merge(
    gulp
      .src(`styles/**/*.less`)
      .pipe(less())
      .pipe(
        prefixer({
          borwsers: ['last 1 version', '> 1%', 'not ie <= 8'],
          cascade: true,
          remove: true,
        }),
      )
      .pipe(
        rename({
          basename: 'index',
          extname: '.css',
        }),
      )
      .pipe(gulp.dest(`dist`))
      .pipe(
        rename({
          basename: 'index',
          extname: '.css',
        }),
      )
      .pipe(gulp.dest(`dist`))
      .pipe(cleanCSS())
      .pipe(
        rename({
          basename: 'index',
          suffix: '.min',
          extname: '.css',
        }),
      )
      .pipe(gulp.dest(`dist`)),
  )
})


gulp.task(
  'build',
  gulp.series(
    'build_modules',
    'build_style',
    'copy_font',
  ),
)
