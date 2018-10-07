import React from 'react';
import PropTypes from 'prop-types';
import FirstChildOnly from './FirstChildOnly';
import LastChildOnly from './LastChildOnly';
import Head from './Head';
import Tail from './Tail';

import './ErrorBox.css';

function ErrorBox({ children }) {
	const items = ['FirstChild', 'SecondChild', 'LastChild'];
	const renderChildren = [
		3,
		'Alan',
		'Donny',
		'Brian',
		'Kendra',
		'Lauren',
		'Anne',
		'Lacey',
		'Aaron'
	];
	return (
		<main className="errorBox-with-children">
      <div className="errorBox">
        <i className="fas fa-exclamation-triangle" />
        <span className="children">{children}</span>
      </div>
			<div className="children-exercises">
				<FirstChildOnly>{items}</FirstChildOnly>
				<LastChildOnly>{items}</LastChildOnly>
				<Head>{renderChildren}</Head>
				<Tail>{renderChildren}</Tail>
			</div>
		</main>
	);
}

ErrorBox.propTypes = {
	// node instead of element since we are not passing a single ReactElement
	children: PropTypes.node.isRequired
};

export default ErrorBox;
