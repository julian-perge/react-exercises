import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './CardNumber.css';

function CardNumber({ number }) {
	let splitNumber = '';
	// checks to verify card number is correct length
	if (number.length !== 16) {
		console.log(
			`Invalid card number. Expected 16 digits, found ${number.length}`
		);
		// if the card number does not include spaces,
		// e.g. 1234567898765432
		// then split at every 4th character
	} else if (!number.includes(' ')) {
		splitNumber = number.match(/.{1,4}/g);
		// if the number does contain spaces
	} else {
		splitNumber = number.split(' ');
	}

	return (
		<Fragment>
			{splitNumber.length === 4 && (
				<ol className="cardNumber">
					<li className="numberSetOne">{splitNumber[0]}</li>
					<li className="numberSetTwo">{splitNumber[1]}</li>
					<li className="numberSetThree">{splitNumber[2]}</li>
					<li className="numberSetFour">{splitNumber[3]}</li>
				</ol>
			)}
		</Fragment>
	);
}

CardNumber.propTypes = {
	number: PropTypes.string.isRequired
};

export default CardNumber;
