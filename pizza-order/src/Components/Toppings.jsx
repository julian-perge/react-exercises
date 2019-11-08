import React from 'react';
import PropTypes from 'prop-types';

export default function Toppings({ onTopping, toppings }) {
	return (
		<section id="sectionToppings" className="section-toppings">
			<h2 id="headerToppings" className="section-header">
				Topping
			</h2>
			<select
				id="selectToppings"
				onChange={onTopping}
				type="select"
			>
				<option className="select-option" value="default">
					--Select a topping--
				</option>
				{toppings &&
					toppings.map((topping) => (
						<option
							className="select-option"
							key={topping.id}
							value={topping.name}
						>
							{topping.name}
						</option>
					))}
			</select>
		</section>
	);
}

Toppings.propTypes = {
	onTopping: PropTypes.func.isRequired,
	toppings: PropTypes.arrayOf(PropTypes.object).isRequired
};
