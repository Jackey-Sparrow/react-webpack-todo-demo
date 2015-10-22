import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component';
import HelloWorld from './helloWorld';
import { Router, Route, Link } from 'react-router/umd/ReactRouter'

main();

function main() {
	//ReactDOM.render(
	//	<Hello />,
	//	document.getElementById('app')
	//);

	ReactDOM.render(
		<Router>
			<Router path='/' component={Hello}></Router>
			<Router path='about' component={HelloWorld}></Router>
		</Router>,
		document.body
	);

}
