import React from 'react';
import PropTypes from 'prop-types';

function Title({ strTitle }) {
  return <header className="title">{strTitle}</header>;
}

Title.propTypes = {
  strTitle: PropTypes.string,
};

Title.defaultProps = {
  strTitle: 'This Is Important',
};

export default Title;
