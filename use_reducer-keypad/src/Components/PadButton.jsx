import React from 'react';
import PropTypes from 'prop-types';

export default function PadButton({ onAction, padNumber }) {
	return (
		<button className="pad-button" onClick={onAction} type="button" value={padNumber}>
			{padNumber}
		</button>
	);
}

PadButton.propTypes = {
	onAction: PropTypes.func.isRequired,
	padNumber: PropTypes.number.isRequired,
};
