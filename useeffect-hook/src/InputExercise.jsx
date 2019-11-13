import React, { useEffect, useState } from 'react';

export default function InputExercise() {
	const [title, setTitle] = useState(document.title);

	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(() => {
		const announceClick = (e) => console.log('clicked!', e.clientX, e.clientY);
		document.addEventListener('click', announceClick);
		return () => {
			document.removeEventListener('click', announceClick);
		};
	}, []);

	const handleTitle = (e) => setTitle(e.target.value);

	return (
		<div>
			<label>
				Enter a new title:
				<input onChange={handleTitle} value={title} />
			</label>
		</div>
	);
}
