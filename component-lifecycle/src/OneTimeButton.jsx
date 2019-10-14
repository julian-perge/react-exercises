// learning useState

import React, { useState } from 'react';

export default function OneTimeButton({ onClick }) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		onClick();

		setClicked(true);
	};

	return (
		<button
			disabled={clicked}
			onClick={handleClick}
			type="button"
		>
				You can only click me once
		</button>
	);
}
