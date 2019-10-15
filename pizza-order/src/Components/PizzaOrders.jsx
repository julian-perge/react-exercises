import React from 'react';

import PizzaOrder from './PizzaOrder';

export default function PizzaOrders({ orders }) {
	return (
		<section className="section-order-list">
			{orders
				&& orders.map((order) => (
					<PizzaOrder key={order.id} order={order} />
				))}
		</section>
	);
}
