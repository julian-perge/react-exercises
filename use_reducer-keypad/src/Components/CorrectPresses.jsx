import React from 'react';
import PropTypes from 'prop-types';

export default function CorrectPresses({ correctPresses, totalPresses }) {
	function getNumberOfIndicators() {
		const arrNew = [];
		for (let index = 0; index < totalPresses; index += 1) {
			arrNew.push(
				<span
					className={
						index >= correctPresses
							? 'keypad-indicator'
							: 'keypad-indicator correct-indicator'
					}
				/>
			);
		}
		return arrNew;
	}

	return (
		<>
			<span className="correct-presses">
				{`${
					correctPresses === totalPresses
						? `You've unlocked the secret door!`
						: `Number of correct presses: ${correctPresses}/${totalPresses}`
				}`}
			</span>
			<section className="section-keypad-indicators">
				{getNumberOfIndicators()}
			</section>
		</>
	);
}

CorrectPresses.propTypes = {
	correctPresses: PropTypes.number.isRequired,
	totalPresses: PropTypes.number.isRequired,
};
