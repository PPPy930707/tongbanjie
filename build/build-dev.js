const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack-dev.config');
const envConfig = require('../config');
webpackConfig.entry.main.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:'+envConfig.dev.port+'/',
    'webpack/hot/only-dev-server');
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
    hot : true,
    inline: true,
    contentBase:'./',
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback:true,
    stats: {
        colors: true
    }
});
server.listen(envConfig.dev.port, '127.0.0.1', function() {
    console.log('Starting server on http://localhost:'+envConfig.dev.port);
});