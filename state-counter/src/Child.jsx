import React from 'react';
import PropTypes from 'prop-types';

export default function Child({ onAction }) {
	return <button onClick={onAction} type="button">Click me!</button>;
}

Child.propTypes = {
	onAction: PropTypes.func.isRequired
};
