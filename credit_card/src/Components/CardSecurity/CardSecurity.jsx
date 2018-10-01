import React from 'react';
import PropTypes from 'prop-types';

import './CardSecurity.css';

function CardSecurity({ security }) {
  return <span className="cardSecurity">{security}</span>;
}

CardSecurity.propTypes = {
  security: PropTypes.string.isRequired,
};

export default CardSecurity;
