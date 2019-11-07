import React from 'react';
import PropTypes from 'prop-types';

import '../CSS/CardHolder.css';

export default function CardHolder({ person }) {
  return <span className="cardHolder">{person}</span>;
}

CardHolder.propTypes = {
  person: PropTypes.string.isRequired,
};
