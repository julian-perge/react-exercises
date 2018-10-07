import React, { Children } from 'react';
import PropTypes from 'prop-types';

// Destructure props to just value to display name of person to render
function ListItem({ value }) {
	return <li className="person">{value}</li>;
}

/*
Render the last N children, where N is a Number
*/

// Destructure passed in node
function Tail({ children }) {
	// Destructure from conversion to array
	// first const being the number of people to render
	// second const being an array of people given
	const [number, ...people] = Children.toArray(children);
	const peopleToRender = [];
	// start at 1 to properly select the last child of the array
	for (let i = 1; i <= number; i++) {
		// add {number} of people to peopleToRender array
		// with key value being the current iteration
		peopleToRender.push(<ListItem key={i} value={people[people.length - i]} />);
	}
	return (
		<div className="tail">
			<ul className="people">{peopleToRender}</ul>
		</div>
	);
}

Tail.propTypes = {
	// node instead of element since we are not passing a single ReactElement
	children: PropTypes.node.isRequired
};

export default Tail;
