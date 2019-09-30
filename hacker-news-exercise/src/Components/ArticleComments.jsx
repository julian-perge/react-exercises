import React from 'react';
import PropTypes from 'prop-types';

const ArticleComments = ({ numberOfComments }) => (
	<span className="number-of-comments">
		{`${numberOfComments} ${numberOfComments === 1 ? ' comment' : ' comments'}`}
	</span>
);

ArticleComments.propTypes = {
	numberOfComments: PropTypes.number
};

ArticleComments.defaultProps = {
	numberOfComments: 0
};

export default ArticleComments;
