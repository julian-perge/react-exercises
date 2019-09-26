import React from 'react';
import PropTypes from 'prop-types';

function FileName({ name }) {
	return <td className="file-name">{name}</td>;
}

FileName.propTypes = {
	name: PropTypes.string.isRequired
};

export default FileName;
