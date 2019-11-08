import React from 'react';
import PropTypes from 'prop-types';

function SpecialInstructions({ onChange }) {
	return (
		<section id="sectionInstructions" className="section-instructions">
			<h2 className="section-header">Special Instructions</h2>
			{/* <h3 id="charCount">{`Max Characters: ${
				document.getElementById('textareaInstruction').textLength
			}/140`}</h3> */}
			<textarea
				id="textareaInstruction"
				cols="24"
				maxLength="140"
				name="instructions"
				onChange={onChange}
				rows="6"
				spellCheck={false}
			/>
		</section>
	);
}

SpecialInstructions.propTypes = {
	onChange: PropTypes.func.isRequired,
	charCount: PropTypes.number.isRequired
};

SpecialInstructions.defaultProps = {};

export default SpecialInstructions;
