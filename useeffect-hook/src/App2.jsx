import React, { useState } from 'react';
import Reddit from './Reddit';

export default function App2() {
	// 2 pieces of state: one to hold the input value,
	//  another to hold the current subreddit.
	const [inputValue, setInputValue] = useState('reactjs');
	const [subreddit, setSubreddit] = useState(inputValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubreddit(inputValue);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
			</form>
			<Reddit subreddit={subreddit} />
		</>
	);
}
