import React from 'react';
import PropTypes from 'prop-types';

import '../CSS/Stamp.css';

function Stamp({ image }) {
	return (
		<aside className="stamp">
			<img alt="stamp" className="stamp-image" src={image} />
		</aside>
	);
}

Stamp.propTypes = {
	image: PropTypes.string.isRequired
};

export default Stamp;
