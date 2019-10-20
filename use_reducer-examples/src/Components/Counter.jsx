import React, { useReducer } from 'react';

export default function Counter() {
	const [sum, dispatch] = useReducer((state, action) => state + action, 0);

	const adder = (total, number) => total + number;

	return (
		<>
			<strong>{sum}</strong>
			<button onClick={() => dispatch(1)} type="button">
				Add 1
			</button>
		</>
	);
}
