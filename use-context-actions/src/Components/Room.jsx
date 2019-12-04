import React, { useContext } from 'react';

// import context
import { RoomContext } from './RoomStore';

export default function Room() {
	const { isLit, onToggleLight } = useContext(RoomContext);

	return (
		<div className={` room ${isLit ? 'lit' : 'dark'}`}>
			The room is {isLit ? 'lit' : 'dark'}.
			<br />
			<button onClick={onToggleLight} type="button">
				Flip
			</button>
		</div>
	);
}
