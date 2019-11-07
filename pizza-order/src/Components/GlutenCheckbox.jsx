import React from 'react';
import PropTypes from 'prop-types';

function GlutenCheckbox({ isChecked }) {
	return (
		<label id="checkboxGluten" htmlFor="checkbox-gluten">
			<input
				className="input-item"
				onClick={isChecked}
				name="checkbox-gluten"
				type="checkbox"
				value="gluten-free"
			/>
			Gluten Free
		</label>
	);
}

GlutenCheckbox.propTypes = {
	isChecked: PropTypes.func.isRequired
};

export default GlutenCheckbox;
