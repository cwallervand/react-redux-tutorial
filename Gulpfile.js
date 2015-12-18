'use strict';
let gulp = require('gulp');
let gutil = require('gulp-util');
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let webpackConfig = require('./webpack.config');

let devConf = webpackConfig;
devConf.debug = true;

let devCompiler = webpack(devConf);
gulp.task('webpack_dev', () => {
    devCompiler.watch(0, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        else {
            gutil.log(['webpack'], stats.toString({
                colors: true
            }));
        }
    });
});
