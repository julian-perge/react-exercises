import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import CorrectPresses from './CorrectPresses';
import PadButton from './PadButton';

function correctSequence(state, action) {
	switch (action) {
	case true:
		return {
			validSequence: state.validSequence,
			correctPresses: (state.correctPresses += 1)
		};
	default:
		return { validSequence: state.validSequence, correctPresses: 0 };
	}
}

function init(keypad) {
	const arrValidSequence = [];
	// if a number type, use remainder to get individual digits and push to array
	if (typeof keypad.validSequence === 'number') {
		let num = keypad.validSequence;
		let tmp = 0;

		while (Math.floor(num) > 0) {
			tmp = Math.floor(num % 10);
			num /= 10;
			arrValidSequence.unshift(tmp);
		}
		keypad.validSequence = arrValidSequence;
	}
	// keypad.validSequence should either be an array or not false
	if (!Array.isArray(keypad.validSequence) || !keypad.validSequence) {
		let counter = 0;
		while (counter < 6) {
			// generate digits from 0-9
			arrValidSequence.push(Math.floor(Math.random() * (9 - 0)) + 1);
			counter += 1;
		}
		keypad.validSequence = arrValidSequence;
	}
	// return an Object
	return keypad;
}

export default function Keypad({ numberSequence }) {
	const [keypad, dispatch] = useReducer(
		correctSequence,
		{ validSequence: numberSequence, correctPresses: 0 },
		init
	);

	function padButtonPressed(e) {
		// parse the button value as value returns a String
		if (
			Number.parseInt(e.currentTarget.value)
			=== keypad.validSequence[keypad.correctPresses]
		) {
			return dispatch(true);
		}
		return dispatch(false);
	}

	return (
		<section className="section-keypad">
			<header id="keypadDetails">
				<h1 className="correct-sequence">{`The correct sequence of numbers is: ${keypad.validSequence}`}</h1>
			</header>
			<div className="keypad">
				<section className="section-presses">
					<CorrectPresses
						correctPresses={keypad.correctPresses}
						totalPresses={keypad.validSequence.length}
					/>
				</section>
				<section className="section-pad-buttons">
					<PadButton onAction={padButtonPressed} padNumber={1} />
					<PadButton onAction={padButtonPressed} padNumber={2} />
					<PadButton onAction={padButtonPressed} padNumber={3} />
					<PadButton onAction={padButtonPressed} padNumber={4} />
					<PadButton onAction={padButtonPressed} padNumber={5} />
					<PadButton onAction={padButtonPressed} padNumber={6} />
					<PadButton onAction={padButtonPressed} padNumber={7} />
					<PadButton onAction={padButtonPressed} padNumber={8} />
					<PadButton onAction={padButtonPressed} padNumber={9} />
					<PadButton onAction={padButtonPressed} padNumber={0} />
				</section>
			</div>
		</section>
	);
}

Keypad.propTypes = {
	numberSequence: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.number),
		PropTypes.number
	])
};
