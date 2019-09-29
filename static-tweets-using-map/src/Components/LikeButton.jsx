import React from 'react';
import PropTypes from 'prop-types';

function LikeButton({ count }) {
	return (
		<button className="button like-button" type="button">
			<i className="fa fa-heart icon like-icon-button" />
			{count > 0 && <span className="like-count">{count}</span>}
		</button>
	);
}

LikeButton.propTypes = {
	count: PropTypes.number
};

LikeButton.defaultProps = {
	count: 0
};

export default LikeButton;
