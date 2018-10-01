import React from 'react';
import PropTypes from 'prop-types';

import './CardExpiration.css';

function CardExpiration({ expirationDate }) {
  return (
    <span className="expiration">
      <p className="expValid">VALID</p>
      <p className="expThru">THRU</p>
      <p className="expDate">{expirationDate}</p>
    </span>
  );
}

CardExpiration.propTypes = {
  expirationDate: PropTypes.string.isRequired,
};

export default CardExpiration;
