import React from 'react';
import ReactDOM from 'react-dom';

import OrderMenu from './Components/OrderMenu';

import './CSS/minireset.min.css';
import listOfToppings from './Data/listOfToppings.json';


ReactDOM.render(
	<OrderMenu listOfToppings={listOfToppings} />,
	document.getElementById('root')
);
