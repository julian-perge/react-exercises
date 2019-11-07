import React from 'react';
import PropTypes from 'prop-types';

import '../CSS/CardSecurity.css';

export default function CardSecurity({ security }) {
  return <span className="cardSecurity">{security}</span>;
}

CardSecurity.propTypes = {
  security: PropTypes.string.isRequired,
};
