import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/styles.css';

import Counter from './Components/Counter';
import ShoppingList from './Components/ShoppingList';

ReactDOM.render(
	<>
		<Counter />
		<ShoppingList />
	</>,
	document.getElementById('root')
);
