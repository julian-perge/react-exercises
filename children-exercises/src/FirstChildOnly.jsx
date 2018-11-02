import React, { Children } from 'react';
import PropTypes from 'prop-types';

function FirstChildOnly({ children }) {
	const items = Children.toArray(children);
	return (
		<div className="firstChildOnly">
			<span className="firstChild">
				{items.length >= 1 && items[0]}
			</span>
		</div>
	);
}

FirstChildOnly.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]).isRequired,
};

export default FirstChildOnly;