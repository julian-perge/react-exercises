import React from 'react';

import PizzaOrder from './PizzaOrder';

export default function PizzaOrders({ removeOrder, orders }) {
	return (
		<section className="section-order-list">
			{orders
				&& orders.map((order) => (
					<PizzaOrder key={order.id} removeOrder={removeOrder} order={order} />
				))}
		</section>
	);
}
