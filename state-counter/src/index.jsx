import React from 'react';
import ReactDOM from 'react-dom';
import './layout.css';
import './minireset.min.css';
import { CountingParent } from './CountingParent';

const Page = () => (
	<div>
		<CountingParent />
		<CountingParent />
		<CountingParent />
		<CountingParent />
	</div>
);

ReactDOM.render(<Page />, document.getElementById('root'));
