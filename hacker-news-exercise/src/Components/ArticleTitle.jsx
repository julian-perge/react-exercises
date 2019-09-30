import React from 'react';
import PropTypes from 'prop-types';

import ArticleLink from './ArticleLink';
import UpvoteIcon from './UpvoteIcon';

const ArticleTitle = ({ article, rank }) => (
	<span className="article-title">
		<span className="article-position">
			{rank}
			{'.'}
		</span>
		<UpvoteIcon />
		<ArticleLink article={article} />
	</span>
);

ArticleTitle.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired
};

export default ArticleTitle;
