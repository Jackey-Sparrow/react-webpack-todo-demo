import React from 'react';
import ReactDOM from 'react-dom';
import DashComponent from './dash-component';
import AboutComponent from './about-component';
import { Router, Route, Link } from 'react-router/umd/ReactRouter'

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
