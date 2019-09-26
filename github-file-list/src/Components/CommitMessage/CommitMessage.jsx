import React, { Component } from 'react';
import PropTypes from 'prop-types';

function CommitMessage({ message }) {
	return <td className="commit-message">{message}</td>;
}

CommitMessage.propTypes = {
	message: PropTypes.string.isRequired
};

export default CommitMessage;
