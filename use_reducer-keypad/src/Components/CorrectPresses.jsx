import React from 'react';
import PropTypes from 'prop-types';

function CorrectPresses({ correctPresses, totalPresses }) {
	function getNumberOfIndicators() {
		const arrNew = [];
		for (let index = 0; index < totalPresses; index += 1) {
			arrNew.push(<span className={index >= correctPresses ? 'keypad-indicator' : 'keypad-indicator correct-indicator'} />);
		}
		return arrNew;
	}

	return (
		<>
			<h2 id="correctPresses">
				{`Number of correct presses: ${
					correctPresses === totalPresses
						? `You've unlocked the secret door!`
						: `${correctPresses}/${totalPresses}`
				}`}
			</h2>
			<section className="section-keypad-indicators">
				{getNumberOfIndicators()}
			</section>
		</>
	);
}

CorrectPresses.propTypes = {

};

export default CorrectPresses;
