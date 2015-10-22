/**
 * Created by lja on 2015/10/22.
 */

var path = require('path');
//use the min file for not to loop the react's dependence
var nodeModules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve: {
		alias: {
			'react': pathToReact
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}],
		noParse: [pathToReact]
	}
};
