import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './Components/Keypad';

import './CSS/minireset.min.css';
import './CSS/styles.css';

ReactDOM.render(
	<>
		<Keypad />
		<Keypad numberSequence={666776227} />
	</>,
	document.getElementById('root')
);
