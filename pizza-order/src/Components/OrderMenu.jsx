import React, { useState } from 'react';

import OrderSize from './OrderSize';
import Logo from './Logo';
import Toppings from './Toppings';
import GlutenCheckbox from './GlutenCheckbox';
import SpecialInstructions from './SpecialInstructions';
import SubmitOrder from './SubmitOrder';

import '../CSS/styles.css';
import PizzaOrders from './PizzaOrders';

import listOfOrders from '../Data/listOfPizzaOrders.json';

export default function OrderMenu({ listOfToppings }) {
	const [orders, setOrders] = useState(listOfOrders);
	const [size, setSize] = useState('small');
	const [topping, setTopping] = useState('');
	const [gluten, setGluten] = useState(false);
	const [instructions, setInstructions] = useState({ text: '', characterCount: 0 });

	const toggleGluten = () => (
		setGluten(!gluten)
	);

	const getSize = (event) => {
		const strSize = event.target.value;
		setSize(() => strSize);
	};

	const getTopping = (event) => {
		const newTopping = event.target.value;
		setTopping(() => newTopping);
	};

	const getInstructions = (event) => {
		const specialNote = event.target;
		setInstructions(() => ({ ...instructions, characterCount: specialNote.textLength, text: specialNote.value }));
	};

	const addOrder = () => {
		setOrders([...orders,
			{
				id: orders[orders.length - 1].id,
				size,
				topping,
				gluten,
				instructions: instructions.text
			}
		]);
	};

	const removeOrder = (event) => {
		const orderToRemoveId = event.target.value;
		// console.log(orderToRemoveId);
		console.log(`original: ${orders}`);
		const arrCopy = orders;
		arrCopy.splice(orderToRemoveId, 1);
		setOrders(() => arrCopy);
		console.log(`copy: ${arrCopy}`);
		console.log(`original2: ${orders}`);
	};

	return (
		<>
			<div className="pizza-order">
				<header id="pizzaHeader">
					<h1 id="headerTitle">Order Your Pizza</h1>
					<Logo />
				</header>
				<OrderSize onChange={getSize} />
				<Toppings getTopping={getTopping} toppings={listOfToppings} />
				<GlutenCheckbox isChecked={toggleGluten} />
				<SpecialInstructions charCount={instructions.characterCount} getInstructions={getInstructions} />
				<SubmitOrder onSubmit={addOrder} />
			</div>
			<div className="list-orders">
				<PizzaOrders removeOrder={removeOrder} orders={orders} />
			</div>
		</>
	);
}
