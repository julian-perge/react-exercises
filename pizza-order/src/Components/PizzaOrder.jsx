import React from 'react';

const PizzaOrder = ({ order }) => (
	<ul className="list-order-item">
		<li className="order-number">{`Order #: ${order.id}`}</li>
		<li className="order-size">{`Size: ${order.oSize}`}</li>
		<li className="order-topping">{`Topping: ${order.oToppings}`}</li>
		<li className="order-gluten">{`Gluten: ${order.hasGluten}`}</li>
		<li className="order-instructions">{`Instructions: ${order.oNote}`}</li>
	</ul>
);

export default PizzaOrder;
