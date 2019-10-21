import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
	case 'add':
		return [
			...state,
			{
				id: state.length,
				name: action.name
			}
		];
	case 'remove':
		return state.filter((_, index) => index !== action.index);
	case 'clear':
		return [];
	default:
		return state;
	}
};

export default function ShoppingList() {
	const inputRef = useRef();
	const [items, dispatch] = useReducer(reducer, []);

	function handleSubmit(e) {
		e.preventDefault(); // prevent reloading the page when Enter is pressed.
		dispatch({
			type: 'add',
			name: inputRef.current.value
		});
		inputRef.current.value = '';
	}

	return (
		<>
			<form id="shoppingForm" onSubmit={handleSubmit}>
				<input id="shoppingInput" ref={inputRef} />
			</form>
			<button onClick={() => dispatch({ type: 'clear' })} type="button">Clear Shopping List</button>
			<ul className="shopping-list">
				{items.map((item, index) => (
					<li className="shopping-list-item" key={item.id}>
						{item.name}
						<button onClick={() => dispatch({ type: 'remove', index })} type="button">X</button>
					</li>
				))}
			</ul>
		</>
	);
}
