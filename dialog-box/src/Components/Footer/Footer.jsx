import React from 'react';
import PropTypes from 'prop-types';

function Footer({ buttonText }) {
  return (
    <footer className="footer">
      {buttonText}
    </footer>
  );
}

Footer.propTypes = {
  buttonText: PropTypes.string,
};

Footer.defaultProps = {
  buttonText: 'Close',
};

export default Footer;
