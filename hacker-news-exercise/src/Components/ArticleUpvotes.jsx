import React from 'react';
import PropTypes from 'prop-types';

const ArticleUpvotes = ({ upvotes }) => (
	<span className="number-of-upvotes">{`${upvotes} points`}</span>
);

ArticleUpvotes.propTypes = {
	upvotes: PropTypes.number
};

ArticleUpvotes.defaultProps = {
	upvotes: 0
};

export default ArticleUpvotes;
