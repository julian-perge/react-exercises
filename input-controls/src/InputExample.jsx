import React, { useState } from 'react';

const InputExample = () => {
	const [text, setText] = useState('nothing here yet');

	const handleChange = (event) => {
		const newText = event.target.value;
		setText(newText);
		// setText(newText.replace(/[0-9]/g, '')); - strip numbers out whenever typed in, although ideally input type should be numbers
		// setText('nope Chuck Testa'); - can't type afterwards
	};

	return (
		<>
			<h1 className="input-value">{text}</h1>
			<input onChange={handleChange} type="tel" value={text} />
			<h1 className="input-value">EasyInput</h1>
			<EasyInput />
		</>
	);
};

export default InputExample;

const EasyInput = () => (
	<input type="text" />
);
