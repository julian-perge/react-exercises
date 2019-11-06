import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import CorrectPresses from './CorrectPresses';
import PadButton from './PadButton';

function correctSequence(state, action) {
	switch (action.isCorrect) {
	case true:
		action.parentIndicators.children[2].children[state.correctPresses].classList.add(
			'correct-indicator'
		);
		// document.querySelector(`.keypad-indicators:nth-child(${state.correctPresses + 1})`).classList.add('correct-indicator');
		// console.log(document.querySelector(`.keypad-indicators:nth-child(${state.correctPresses + 1})`));
		return {
			validSequence: state.validSequence,
			correctPresses: (state.correctPresses += 1)
		};
	default:
		console.log(action.parentIndicators.children[2]);
		action.parentIndicators.children[2].childNodes.forEach((element) => {
			element.classList.remove('correct-indicator');
		});
		return { validSequence: state.validSequence, correctPresses: 0 };
	}
}

function init(keypad) {
	const arrValidSequence = [];
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
	if (!Array.isArray(keypad.validSequence) || !keypad.validSequence) {
		let counter = 0;
		while (counter < 6) {
			arrValidSequence.push(Math.floor(Math.random() * (9 - 0)) + 1);
			counter += 1;
		}
		keypad.validSequence = arrValidSequence;
	}
	return keypad;
}

export default function Keypad({ numberSequence }) {
	const [keypad, dispatch] = useReducer(
		correctSequence,
		{ validSequence: numberSequence, correctPresses: 0 },
		init
	);

	function padButtonPressed(e) {
		if (
			Number.parseInt(e.currentTarget.value)
			=== keypad.validSequence[keypad.correctPresses]
		) {
			return dispatch({ isCorrect: true, parentIndicators: e.currentTarget.parentElement.previousElementSibling });
		}
		return dispatch({
			isCorrect: false,
			parentIndicators: e.currentTarget.parentElement.previousElementSibling
		});
	}

	return (
		<section className="section-keypad">
			<header id="keypadDetails">
				<h1 id="correctSequence">{`The correct sequence of numbers is: ${keypad.validSequence}`}</h1>
				<CorrectPresses correctPresses={keypad.correctPresses} totalPresses={keypad.validSequence.length} />
			</header>
			<div className="keypad">
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
