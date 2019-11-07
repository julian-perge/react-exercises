import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ bannerItems }) {
	const listOfItems = React.Children.toArray(bannerItems);
	for (let i = listOfItems.length - 1; i >= 0; i -= 1) {
		listOfItems.splice(i, 1, [
			<span key={i} id={`${listOfItems[i]}`} className="banner-item">
				{listOfItems[i]}
			</span>,
			' | '
		]);
	}
	return <>{listOfItems}</>;
}

Banner.propTypes = {
	bannerItems: PropTypes.arrayOf(PropTypes.string).isRequired
};
