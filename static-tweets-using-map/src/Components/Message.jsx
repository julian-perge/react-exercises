import React from 'react';
import PropTypes from 'prop-types';

function Message({ text }) {
	return <p className="message">{text}</p>;
}

Message.propTypes = {
	text: PropTypes.string
};

Message.defaultProps = {
	text: ''
};

export default Message;
