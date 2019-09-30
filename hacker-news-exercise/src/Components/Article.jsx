import React from 'react';
import PropTypes from 'prop-types';

import ArticleTitle from './ArticleTitle';
import ArticleUpvotes from './ArticleUpvotes';
import User from './User';
import ArticleComments from './ArticleComments';
import Time from './Time';

const ArticleItem = ({ article, rank }) => (
	<tr className="news-list-item">
		<td className="article">
			<ArticleTitle article={article} rank={rank} />
			<section className="article-data">
				<ArticleUpvotes upvotes={article.upvotes} />
				{' by  '}
				<User user={article.user} />
				<Time time={article.time_posted} />
				{' | hide | '}
				<ArticleComments numberOfComments={article.num_of_comments} />
			</section>
		</td>
	</tr>
);

ArticleItem.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		user: PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired,
		time_posted: PropTypes.string.isRequired
	}).isRequired,
	rank: PropTypes.number.isRequired
};

export default ArticleItem;
