import React, { useReducer, useState } from 'react';

import OrderSize from './OrderSize';
import Logo from './Logo';
import Toppings from './Toppings';
import GlutenCheckbox from './GlutenCheckbox';
import SpecialInstructions from './SpecialInstructions';
import SubmitOrder from './SubmitOrder';

import PizzaOrders from './PizzaOrders';

import '../CSS/styles.css';

const reducerOrders = (state, action) => {
	if (action.type === 'add') {
		return [
			...state,
			{
				id: action.lastOrderNum + 1,
				size: action.size,
				topping: action.topping,
				gluten: action.gluten,
				instructions: action.instructions
			}
		];
	} else {
		return state.filter((order) => order.id !== action.index);
	}
};

export default function OrderMenu({ listOfToppings, ordersJSON }) {
	const [orders, dispatchOrders] = useReducer(reducerOrders, ordersJSON);
	const [lastOrderNumber, setLastOrderNumber] = useState(
		orders[orders.length - 1].id
	);
	const [size, setSize] = useState('small');
	const [topping, setTopping] = useState('');
	const [gluten, setGluten] = useState(false);
	const [instructions, setInstructions] = useState({
		text: '',
		characterCount: 0
	});

	const toggleGluten = () => setGluten(!gluten);

	const handleSize = (event) => {
		const strSize = event.target.value;
		setSize(() => strSize);
	};

	const handleTopping = (event) => {
		const newTopping = event.currentTarget;
		setTopping(() => newTopping.value);
	};

	function handleInstructions(event) {
		const specialNote = event.currentTarget;
		setInstructions(() => ({
			characterCount: specialNote.textLength,
			text: specialNote.value
		}));
	}

	const clearOrder = () => {

		setSize('small');
		setTopping('default');
	};

	const handleSubmit = () => {
		dispatchOrders({
			type: 'add',
			lastOrderNum: lastOrderNumber,
			size: size,
			topping: topping,
			gluten: gluten,
			instructions: instructions
		});
		setLastOrderNumber(() => lastOrderNumber + 1);
		clearOrder();
	};

	const handleRemoval = (event) => {
		const index = Number.parseInt(event.currentTarget.value);
		dispatchOrders({ type: 'remove', index });
	};

	return (
		<>
			<div className="pizza-order">
				<header id="pizzaHeader">
					<h1 id="headerTitle">Order Your Pizza</h1>
					<Logo />
				</header>
				<OrderSize onSize={handleSize} />
				<Toppings onTopping={handleTopping} toppings={listOfToppings} />
				<GlutenCheckbox isChecked={toggleGluten} />
				<SpecialInstructions
					charCount={instructions.characterCount}
					onChange={handleInstructions}
				/>
				<SubmitOrder onSubmit={handleSubmit} />
			</div>
			<div className="list-orders">
				<PizzaOrders removeOrder={handleRemoval} orders={orders} />
			</div>
		</>
	);
}
