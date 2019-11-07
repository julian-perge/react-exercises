import React from 'react';
import PropTypes from 'prop-types';

function Sender({ sender }) {
	return <span className="sender">{sender}</span>;
}

Sender.propTypes = { sender: PropTypes.string.isRequired };

export default Sender;
