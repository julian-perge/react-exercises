import React, {useEffect, useRef, useState} from 'react'

export default function App() {
	// Store a reference to the input's DOM node
	const inputRef = useRef();

	// Store the input's value in state
	const [value, setValue] = useState('');

	useEffect(
		() => {
			// This runs AFTER the first render, so the ref is already set.
			console.log('render');
			inputRef.current.focus();
		},
		// The effect "depends on" inputRef
		[inputRef]
	);

	useEffect(() => {
		console.log('mounted');
		return () => console.log('unmounting');
	}, []);

	return (
		<input
			onChange={(e) => setValue(e.target.value)}
			ref={inputRef}
			value={value}
		/>
	);
}
