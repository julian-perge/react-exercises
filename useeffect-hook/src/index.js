import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App2 from './App2';
import ErrorBoundary from './ErrorBoundary'
import InputExercise from './InputExercise';
import LogEffect from './LogEffect';
import Reddit from './Reddit';

ReactDOM.render(
	<ErrorBoundary>
		<App2 />
		{/* <br />
		<InputExercise /> */}
	</ErrorBoundary>,
	document.getElementById('root')
);
