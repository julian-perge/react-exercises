// State as an Array
import React, { useState } from 'react';

export default function RandomList() {
	const [items, setItems] = useState([]);

	// copy existing array using spread operator
	// insert new item at the end
	const addItem = () => {
		setItems([
			...items, { id: items.length, value: Math.random() * 100 }
		]);
	};

	return (
		<>
			<button id="btnAdd" onClick={addItem} type="button">
				Add a number
			</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</>
	);
}
