import React from 'react';
import PropTypes from 'prop-types';

const PizzaOrder = ({ removeOrder, order }) => (
	<ul className="list-order-items">
		<button
			className="btn-remove-order"
			onClick={removeOrder}
			type="submit"
			value={order.id}
		>
			X
		</button>
		<li id="order-number">{`Order #: ${order.id}`}</li>
		<li id="order-size">{`Size: ${order.size}`}</li>
		<li id="order-topping">{`Topping: ${order.topping}`}</li>
		<li id="order-gluten">{`Gluten free: ${order.gluten}`}</li>
		<li id="order-instructions">{`Instructions: ${order.instructions.text}`}</li>
	</ul>
);

PizzaOrder.propTypes = {
	removeOrder: PropTypes.func.isRequired,
	order: PropTypes.shape({
		id: PropTypes.number.isRequired,
		size: PropTypes.string.isRequired,
		topping: PropTypes.string.isRequired,
		gluten: PropTypes.bool.isRequired,
		instructions: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
	}).isRequired
};

export default PizzaOrder;
