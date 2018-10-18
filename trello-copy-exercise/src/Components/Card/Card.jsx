import React from 'react';
import PropTypes from 'prop-types';

import CardTitle from '../CardTitle/CardTitle';
import CardItem from '../CardItem/CardItem';
import OptionsButton from '../OptionsButton/OptionsButton';
import AddCard from '../AddCard/AddCard';

const Card = ({ title, children }) => (
  <main className="main-card">
    <CardTitle title={title} />
    <OptionsButton />
    <ul className="cards">
      {React.Children.toArray(children).map(item => (
        <CardItem key={item.id} text={item.text} />
      ))}
    </ul>
    <AddCard />
  </main>
);

Card.propTypes = {
  items: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.object)]).isRequired,
};

export default Card;
