import React from 'react';
import PropTypes from 'prop-types';

export default function OrderSize({ onSize }) {
	console.log(onSize);
	return (
		<section id="sectionSizes" className="section-sizes">
			<h2 id="headerSizes" className="section-header">
				Size
			</h2>
			<section id="sectionSizesRadios">
				<label className="size-label" htmlFor="sizeSmall">
					<input
						checked={onSize === 'small'}
						className="input-item"
						id="sizeSmall"
						name="size"
						onChange={onSize}
						type="radio"
						value="small"
					/>
					Small
				</label>

				<label className="size-label" htmlFor="sizeMedium">
					<input
						checked={onSize === 'medium'}
						className="input-item"
						id="sizeMedium"
						name="size"
						onChange={onSize}
						type="radio"
						value="medium"
					/>
					Medium
				</label>

				<label className="size-label" htmlFor="sizeLarge">
					<input
						checked={onSize === 'large'}
						className="input-item"
						id="sizeLarge"
						name="size"
						onChange={onSize}
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
	onSize: PropTypes.func.isRequired
};
