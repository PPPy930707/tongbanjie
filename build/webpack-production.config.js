const webpack = require('webpack');
const path = require('path');
const srcDir = path.resolve(__dirname, '../src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const proConfig = require('../config');

module.exports = {
    entry: {
        main : [srcDir + '/main.js']
    },
    output: {
        path : path.resolve(__dirname, '../dist'),//用来存放打包后文件的输出目录
        filename : 'static/js/[name].[chunkhash:5].js',
        chunkFilename: 'static/js/[name].[chunkhash:5].js', //注意这里，用[name]可以自动生成路由名称对应的js文件.
        publicPath : proConfig.build.rootPath,//指定资源文件引用的目录
        //   libraryTarget: 'umd'
    },

    resolve : {
        extensions : [ '.js', '.jsx',' ','.json','.css','.scss','.less']
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(gif|jpe?g|png|ico|svg)$/,
                loader: 'url-loader',
                query : {
                    limit: 10000,
                    name : 'static/images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            },
            'is_production' : true
        }),
        new ExtractTextPlugin('static/css/[name].[contenthash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            filename : path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../index.html'),
            inject: 'header',
            rootPath : proConfig.build.rootPath,//部署路劲
            hash : true,
            chunksSortMode : (chunk1, chunk2)=>{//控制插入顺序
                let order = ['manifest', 'vendor', 'main'];
                let order1 = order.indexOf(chunk1.names[0]);
                let order2 = order.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments 移除版权信息
            },
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ],
    //  externals: /^echarts[\w\W]*/
};
