import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
	case 'add':
		return [
			...state,
			{
				id: state.length,
				name: action.name
			}
		];
	default:
		return state;
	}
};

export default function ShoppingList() {
	const inputRef = useRef();
	const [items, dispatch] = useReducer(reducer, []);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({
			type: 'add',
			name: inputRef.current.value
		});
		inputRef.current.value = '';
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input ref={inputRef} />
			</form>
			<ul>
				{items.map((item, index) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
}
