import React from 'react';
import PropTypes from 'prop-types';

const ArticleComments = ({ numberOfComments, id }) => (
	<a href={`item?id=${id}`} className="number-of-comments">
		{`${numberOfComments} ${numberOfComments === 1 ? ' comment' : ' comments'}`}
	</a>
);

ArticleComments.propTypes = {
	numberOfComments: PropTypes.number
};

ArticleComments.defaultProps = {
	numberOfComments: 0
};

export default ArticleComments;
