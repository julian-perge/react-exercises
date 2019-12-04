import React, { useRef, useState } from 'react';
import Reddit from './Reddit';

import './hammer.css';
import HammerSVG from './hammer.svg';

export default function App2() {
	// 2 pieces of state: one to hold the input value,
	//  another to hold the current subreddit.
	const [inputValue, setInputValue] = useState('reactjs');
	const [subreddit, setSubreddit] = useState(inputValue);
	const [isHammerSwinging, setisHammerSwinging] = useState(false);
	const btnHitRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubreddit(inputValue);
	};

	const handleHammerSwing = (e) => {
		setTimeout(() => {
			setisHammerSwinging(true);
		}, 1000);
	};

	return (
		<>
			<h1>{`Is Hammer Swinging? ${isHammerSwinging}`}</h1>
			<img
				alt="hammer weapon"
				id="hammerWeapon"
				src={HammerSVG}
				width="256px"
			/>

			<button
				onClick={handleHammerSwing}
				ref={btnHitRef}
				type="button"
				value={true}
			>
				HIT
			</button>
			{/* <form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
			</form>
			<Reddit subreddit={subreddit} /> */}
		</>
	);
}
