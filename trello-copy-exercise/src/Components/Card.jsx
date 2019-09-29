import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

import CardItem from './CardItem';
import OptionsButton from './OptionsButton';
import AddCard from './AddCard';

const Card = ({ title, children }) => (
	<section className="single-card">
		<h1 className="h1-card-title">
			<strong className="card-title">{title}</strong>
			<OptionsButton />
		</h1>
		<ul className="cards">
			{children.map((item) => (
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
			id: PropTypes.number.isRequired
		})
	).isRequired
};

export default Card;
