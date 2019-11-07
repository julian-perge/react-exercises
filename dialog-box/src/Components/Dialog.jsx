import React from 'react';
import PropTypes from 'prop-types';

import '../CSS/Dialog.css';

export default function Dialog({ children }) {
	const arrChildren = React.Children.toArray(children);
	return <div className="dialog">{arrChildren}</div>;
}

Dialog.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
};

// DialogBox.defaultProps = {
// 	children: [<Title key={1} />, <Body key={2} />, <Footer key={3} />]
// };

/* <Title title={<h1>This Is Important</h1>} />,
    <Body text={<span>Here is some important text or error or something.</span>} />,
    <Footer footer={<button type="button">Close</button>} />, */
