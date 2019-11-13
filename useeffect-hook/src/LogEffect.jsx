import React, { useEffect, useState } from 'react';

const LogEffect = () => {
	const [text, setText] = useState('');

	useEffect(() => {
		console.log('latest value:', text);
	});

	// logs each change in the input
	return <input onChange={(e) => setText(e.target.value)} value={text} />;
};

export default LogEffect;
