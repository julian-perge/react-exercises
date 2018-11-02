import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

import CardItem from '../CardItem/CardItem';
import OptionsButton from '../OptionsButton/OptionsButton';
import AddCard from '../AddCard/AddCard';

const Card = ({ title, children }) => (
  <section className="single-card">
    <h1 className="card-title">
      <strong>{title}</strong>
    </h1>
    <OptionsButton />
    <ul className="cards">
      {children.map(item => (
        <CardItem key={item.id} text={item.text} />
      ))}
    </ul>
    <AddCard />
  </section>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Card;
