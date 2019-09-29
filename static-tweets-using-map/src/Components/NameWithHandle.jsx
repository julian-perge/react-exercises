import React from 'react';
import PropTypes from 'prop-types';

// \u0040 for Commercial At symbol
function NameWithHandle({ author }) {
	const { name, handle } = author;
	return (
		<span className="name-with-handle">
			<strong className="name">{name}</strong>
			<span className="handle">{`\u0040${handle}`}</span>
		</span>
	);
}

NameWithHandle.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired
	}).isRequired
};

export default NameWithHandle;
