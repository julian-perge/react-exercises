import React from 'react';
import PropTypes from 'prop-types';

function getRetweetCount(count) {
	if (count > 0) {
		return <span className="retweet-count">{count}</span>;
	}
	return null;
}

function RetweetButton({ count }) {
	return (
		<button className="button retweet-button" type="button">
			<i className="fa fa-retweet icon retweet-icon-button" />
			{getRetweetCount(count)}
		</button>
	);
}

RetweetButton.propTypes = {
	count: PropTypes.number
};

RetweetButton.defaultProps = {
	count: 0
};

export default RetweetButton;
