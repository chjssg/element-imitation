const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
/**
 * 作用是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('./config');

module.exports = {
    //  ？？？
    mode: 'production',
    //  入口文件
    entry: {
        app: ['./src/index.js']
    },
    //  输出路径配置/lib/element-ui.commom.js
    output: {
        path: path.resolve(process.cwd(), './lib/'),
        //  https://www.cnblogs.com/SamWeb/p/8353367.html
        publicPath: '/dist/',
        //  输出文件的名称
        filename: 'chj-ui.common.js',
        //  非入口chunk文件打包名称
        chunkFilename: '[id].js',
        libraryExport: 'default',
        library: 'CHJUI',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        //  通过别名来把原导入路径映射成一个新的导入路径
        alias: config.alias,
        modules: ['node_modules'],
    },
    //  这样做的目的就是将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间，但又不影响运用第三方库的方式
    externals: config.externals,
    //  性能创建后超过250kb的资源
    performance: {
        //  不展示提醒
        hints: false
    },
    //  日志信息
    stats: {
        warnings: true,
        children: false
    },
    // 优化--应该是指打包的优化？？？
    optimization: {
        //  不压缩bundle???
        minimize: false
    },
    module: {
        rules: [{
            //  适用后缀文件
            test: /\.(jsx?|babel|es6)$/,
            //  范围
            include: process.cwd(),
            //  不包括
            exclude: config.jsexclude,
            loader: 'babel-loader'
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.posix.join('static', '[name].[hash:7].[ext]')
            }
        }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
}