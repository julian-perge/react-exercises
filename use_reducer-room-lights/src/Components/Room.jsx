// Make a "room" with a light that has 4 levels
// off, low, medium, high - and change the level each time you press a button
// Create a second button to turn the lights off.

import React, { useReducer, useRef } from 'react';
import Light from './Light';

const reducer = (state, action) => {
	switch (action) {
	case 0:
		return { light: { display: 'off', level: action } };
	case 1:
		return { light: { display: 'low', level: action } };
	case 2:
		return { light: { display: 'medium', level: action } };
	case 3:
		return { light: { display: 'high', level: action } };
	default:
		return { light: { display: 'off', level: 0 } };
	}
};

export default function Room() {
	const [room, dispatch] = useReducer(reducer, {
		light: {
			display: 'off',
			level: 0
		}
	});

	function handleClick(e) {
		dispatch(room.light.level + 1);
	}

	const turnOffAllLights = (action) => {

	};

	return (
		<div>
			<h1>Main Room</h1>
			<Light changeLight={handleClick} light={room.light} />
		</div>
	);
}

Room.propTypes = {};
