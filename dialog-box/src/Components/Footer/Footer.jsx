import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.element,
};

Footer.defaultProps = {
  children: 'test',
};

export default Footer;
