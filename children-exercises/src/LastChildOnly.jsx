import React, { Children } from 'react';
import PropTypes from 'prop-types';

function LastChildOnly({ children }) {
	const items = Children.toArray(children);
	return (
		<div className="LastChildOnly">
			<span className="lastChild">
				{items.length >= 1 && items[items.length - 1]}
			</span>
		</div>
	);
}

LastChildOnly.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]).isRequired,
};

export default LastChildOnly;