import React from 'react';
import PropTypes from 'prop-types';

function Message({ message }) {
	return <span className="message">{message}</span>;
}

Message.propTypes = { message: PropTypes.string.isRequired };

export default Message;
