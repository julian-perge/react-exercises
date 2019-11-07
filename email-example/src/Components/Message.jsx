import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ message }) {
	return <span className="message">{message}</span>;
}

Message.propTypes = { message: PropTypes.string.isRequired };
