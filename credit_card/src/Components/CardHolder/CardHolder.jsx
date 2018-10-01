import React from 'react';
import PropTypes from 'prop-types';

import './CardHolder.css';

function CardHolder({ person }) {
  return <span className="cardHolder">{person}</span>;
}

CardHolder.propTypes = {
  person: PropTypes.string.isRequired,
};

export default CardHolder;
