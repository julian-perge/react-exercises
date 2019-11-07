import React from 'react';
import PropTypes from 'prop-types';

export default function OrderSize({ onChange }) {
	return (
		<section id="sectionSizes" className="section-sizes">
			<h2 id="headerSizes" className="section-header">
				Size
			</h2>
			<section onChange={onChange} id="sectionSizesRadios">
				<label className="size-label" htmlFor="sizeSmall">
					<input
						className="input-item"
						defaultChecked
						id="sizeSmall"
						name="size"
						type="radio"
						value="small"
					/>
					Small
				</label>

				<label className="size-label" htmlFor="sizeMedium">
					<input
						className="input-item"
						id="sizeMedium"
						name="size"
						type="radio"
						value="medium"
					/>
					Medium
				</label>

				<label className="size-label" htmlFor="sizeLarge">
					<input
						className="input-item"
						id="sizeLarge"
						name="size"
						type="radio"
						value="large"
					/>
					Large
				</label>
			</section>
		</section>
	);
}

OrderSize.propTypes = {
	onChange: PropTypes.func.isRequired
};
