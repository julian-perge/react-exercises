import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ card }) {
  return <h1 className="card-title">{card.title}</h1>;
}

CardTitle.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default CardTitle;
