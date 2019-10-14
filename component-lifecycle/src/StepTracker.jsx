// Update State Based on Previous State
import React, { useState } from 'react';

export default function StepTracker() {
	const [steps, setSteps] = useState(0);

	function increment() {
		setSteps(() => steps + 1);
	}

	return (
		<div>
			{`Today you've taken ${steps} steps!`}
			<br />
			<button onClick={increment} type="button">I took another step</button>
		</div>
	);
}
