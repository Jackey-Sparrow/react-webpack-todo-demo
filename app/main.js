import React from 'react';
import Hello from './component';

main();

function main() {
	React.render(
		<Hello />,
		document.getElementById('app')
	);
}