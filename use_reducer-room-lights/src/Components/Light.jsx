import React from 'react';
import PropTypes from 'prop-types';

import './Light.css';

export default function Light({ changeLight, light }) {
	return (
		<div className="room-light">
			<span>{`Light Display: ${light.display}`}</span>
			<span>{`Light Level: ${light.level}`}</span>
			<button onClick={changeLight} type="button">
				Change Light
			</button>
		</div>
	);
}

Light.propTypes = {
	changeLight: PropTypes.func.isRequired
};
