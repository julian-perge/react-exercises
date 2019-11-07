import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ button }) {
	return <footer className="footer">{button}</footer>;
}

Footer.propTypes = {
	buttonText: PropTypes.string
};

Footer.defaultProps = {
	buttonText: 'Close'
};
