// State as an Object
import React, { useState } from 'react';

const MultiCounter = () => {
	const [counts, setCounts] = useState({ countA: 0, countB: 0 });

	const incA = () => (
		setCounts(() => ({ ...counts, countA: counts.countA + 1 }))
	);

	const incB = () => setCounts(() => ({ ...counts, countB: counts.countB + 1 }));

	const badIncA = () => setCounts({ countA: counts.countA + 1 });

	return (
		<>
			<div>{`A: ${counts.countA}`}</div>
			<div>{`B: ${counts.countB}`}</div>
			<button onClick={incA} type="button">
				Increment A
			</button>
			<button onClick={incB} type="button">
				Increment B
			</button>
			<button onClick={badIncA} type="button">
				Increment A Badly
			</button>
		</>
	);
};

export default MultiCounter;
