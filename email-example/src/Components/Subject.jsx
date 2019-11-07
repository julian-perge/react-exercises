import React from 'react';
import PropTypes from 'prop-types';

export default function Subject({ subject }) {
	return <span className="subject">{subject}</span>;
}

Subject.propTypes = { subject: PropTypes.string.isRequired };
