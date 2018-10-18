import React from 'react';
import PropTypes from 'prop-types';

function Body({ strBody }) {
  return <main className="body">{strBody}</main>;
}

Body.propTypes = {
  strBody: PropTypes.string,
};

Body.defaultProps = {
  strBody: 'Something has gone horribly wrong',
};

export default Body;
