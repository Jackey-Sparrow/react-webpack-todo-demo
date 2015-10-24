/**
 * Created by lja on 2015/10/22.
 */

var path = require('path');
//use the min file for not to loop the react's dependence
var nodeModules = path.resolve(__dirname, 'node_modules');
//var pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/app.js')],
    //resolve: {
    //	alias: {
    //		'react': pathToReact
    //	}
    //},
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath:'http://localhost:8080/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
        //noParse: [pathToReact]
    }
};
