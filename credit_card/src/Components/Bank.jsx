import React from 'react';
import PropTypes from 'prop-types';

import '../CSS/Bank.css';

export default function Bank({ name }) {
  return (
      <strong className="bankName">{name}</strong>
  );
}

Bank.propTypes = {
  name: PropTypes.string.isRequired,
};
