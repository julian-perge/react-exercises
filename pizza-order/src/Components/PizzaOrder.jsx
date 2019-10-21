import React from 'react';

const PizzaOrder = ({ removeOrder, order }) => (
	<ul className="list-order-items">
		<button className="btn-remove-order" value={order.id} onClick={removeOrder} type="submit">X</button>
		<li id="order-number">{`Order #: ${order.id}`}</li>
		<li id="order-size">{`Size: ${order.size}`}</li>
		<li id="order-topping">{`Topping: ${order.topping}`}</li>
		<li id="order-gluten">{`Gluten free: ${order.gluten}`}</li>
		<li id="order-instructions">{`Instructions: ${order.instructions}`}</li>
	</ul>
);

export default PizzaOrder;
