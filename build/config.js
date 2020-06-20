const path = require('path');

var externals = {
    vue: 'vue'
}

exports.externals = externals;

exports.alias = {
    main: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'chj-ui': path.resolve(__dirname, '../')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.vue = {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  };