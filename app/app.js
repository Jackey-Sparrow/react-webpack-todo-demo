import React from 'react';
import ReactDOM from 'react-dom';
import DashComponent from './dash/dash-module';
import AboutComponent from './about/about-module';
import { Router, Route, Link } from 'react-router/umd/ReactRouter';
import './common/content/css/main.css';

main();

function main() {

	ReactDOM.render(
		<Router>
			<Router path='/' component={DashComponent}></Router>
			<Router path='about' component={AboutComponent}></Router>
		</Router>,
		document.body
	);

}
