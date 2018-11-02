import React, { Children } from 'react';
import PropTypes from 'prop-types';

// Destructure props to just value to display name of person to render
function ListItem({ value }) {
	return <li className="person">{value}</li>;
}

// Destructure passed in node
function Head({ number, children }) {
	// Destructure from conversion to array
	// first const being the number of people to render
	// second const being an array of people given
	const people = Children.toArray(children);
	const peopleToRender = [];
	for (let i = 0; i < number; i++) {
		// add {number} of people to peopleToRender array
		// with key value being the current iteration
		peopleToRender.push(<ListItem key={i} value={people[i]} />);
	}
	return (
		<div className="head">
			<ul className="people">{peopleToRender}</ul>
		</div>
	);
}

Head.propTypes = {
	// node instead of element since we are not passing a single ReactElement
	children: PropTypes.node.isRequired
};

export default Head;
