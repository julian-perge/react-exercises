import React from 'react';
import PropTypes from 'prop-types';

import PizzaOrder from './PizzaOrder';

export default function PizzaOrders({ removeOrder, orders }) {
	return (
		<section className="section-order-list">
			{orders &&
				orders.map((order) => (
					<PizzaOrder key={order.id.toString()} removeOrder={removeOrder} order={order} />
				))}
		</section>
	);
}

PizzaOrders.propTypes = {
	removeOrder: PropTypes.func.isRequired,
	orders: PropTypes.arrayOf(PropTypes.element),
}
