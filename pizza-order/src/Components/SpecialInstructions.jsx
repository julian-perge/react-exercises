import React from 'react';
import PropTypes from 'prop-types';

function SpecialInstructions({ getInstructions, charCount }) {
	return (
		<section id="sectionInstructions" className="section-instructions">
			<h2 className="section-header">Special Instructions</h2>
			<h3 id="charCount">{`Max Characters: ${charCount}/140`}</h3>
			<textarea
				id="textareaInstruction"
				cols="24"
				maxLength="140"
				name="instructions"
				onChange={getInstructions}
				rows="6"
				spellCheck={false}
			/>
		</section>
	);
}

SpecialInstructions.propTypes = {
	getInstructions: PropTypes.func.isRequired,
	charCount: PropTypes.number.isRequired
};

export default SpecialInstructions;
