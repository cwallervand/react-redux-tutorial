'use strict';
let path = require('path');
let projPaths = require('./projectPaths.js');

module.exports = {
    entry: path.resolve(__dirname, projPaths.indexjs),
    output: {
        path: path.resolve(__dirname, `${projPaths.www}/js`),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            }
        ]
    }
};
