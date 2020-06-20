'use strict';

const { series, src, dest } = require('gulp');
// gulp 编译 scss文件的插件
const sass = require('gulp-sass');
// 根据设置浏览器版本自动处理浏览器前缀的插件
const autoprefixer = require('gulp-autoprefixer');
// 压缩css文件的插件
const cssmin = require('gulp-cssmin');

// 新建 compile 任务
function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    // .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/icons/**')
    .pipe(cssmin())
    .pipe(dest('./lib/icons'));
}

exports.build = series(compile, copyfont);

