import React from 'react';
import PropTypes from 'prop-types';

function GlutenCheckbox({ isChecked }) {
	return (
		<label id="checkboxGluten" htmlFor="checkbox-gluten">
			<input
				className="input-item"
				name="checkbox-gluten"
				onClick={isChecked}
				type="checkbox"
				defaultChecked={false}
			/>
			Gluten Free
		</label>
	);
}

GlutenCheckbox.propTypes = {
	isChecked: PropTypes.func.isRequired
};

export default GlutenCheckbox;
