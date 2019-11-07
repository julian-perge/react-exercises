import React from 'react';
import PropTypes from 'prop-types';

export default function Body({ strBody }) {
	return <main className="body">{strBody}</main>;
}

Body.propTypes = {
	strBody: PropTypes.string
};

Body.defaultProps = {
	strBody: 'Something has gone horribly wrong'
};
