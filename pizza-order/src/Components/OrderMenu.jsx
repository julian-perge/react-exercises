import React, { useReducer, useState } from 'react';
import short from 'short-uuid';

import OrderSize from './OrderSize';
import Logo from './Logo';
import Toppings from './Toppings';
import GlutenCheckbox from './GlutenCheckbox';
import SpecialInstructions from './SpecialInstructions';
import SubmitOrder from './SubmitOrder';

import '../CSS/styles.css';
import PizzaOrders from './PizzaOrders';

const decTranslator = short("0123456789")

const reducerOrders = (state, action) => {
	if (action.type === 'add') {
		return [
			...state,
			{
				id: decTranslator.generate().substring(this.length / 2),
				size: state.size,
				topping: state.topping,
				gluten: state.gluten,
				instructions: {
					text: state.instructions.text,
					characterCount: state.instructions.characterCount
				}
			}
		];
	} else {
		return state.filter((_, index) => index !== action.index);
	}
};

function init(ordersJSON) {
	ordersJSON.forEach((order) => {
		const uuidv5 = decTranslator.generate().substring(0, 17);
		order.id = uuidv5;
	});
	return ordersJSON;
}

export default function OrderMenu({ listOfToppings, ordersJSON }) {
	const [orders, dispatchOrders] = useReducer(reducerOrders, ordersJSON, init);
	const [size, setSize] = useState('small');
	const [topping, setTopping] = useState('');
	const [gluten, setGluten] = useState(false);
	const [instructions, setInstructions] = useState({
		text: '',
		characterCount: 0
	});

	const toggleGluten = () => setGluten(!gluten);

	const getSize = (event) => {
		const strSize = event.target.value;
		setSize(() => strSize);
	};

	const getTopping = (event) => {
		const newTopping = event.target.value;
		setTopping(() => newTopping);
	};

	function getInstructions(event) {
		const specialNote = event.target;
		setInstructions(() => ({
			...instructions,
			characterCount: specialNote.textLength || 0,
			text: specialNote.value || ''
		}));
	}

	const handleSubmit = () => {
		dispatchOrders({ type: 'add' });
	};

	const handleRemoval = () => {
		dispatchOrders({ type: 'remove' });
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
				<SpecialInstructions
					charCount={instructions.characterCount}
					getInstructions={getInstructions}
				/>
				<SubmitOrder onSubmit={handleSubmit} />
			</div>
			<div className="list-orders">
				<PizzaOrders removeOrder={handleRemoval} orders={orders} />
			</div>
		</>
	);
}
