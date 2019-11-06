import React from 'react';
import PropTypes from 'prop-types';

export default function Reset({ onAction }) {
	return (
		<button type="button" onClick={onAction}>
			RESET
		</button>
	);
}

Reset.propTypes = {
	onAction: PropTypes.func.isRequired
};
