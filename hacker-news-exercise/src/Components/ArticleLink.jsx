import React from 'react';
import PropTypes from 'prop-types';

function ParseUrl(link) {
	const regExp = /^(?:(?:(([^:/#?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@/#?]+)(?::([^:@/#?]*))?)@)?(([^:/#?\][]+|\[[^/\]@#?]+\])(?::([0-9]+))?))?)?)?((?:\/?(?:[^/?#]+\/+)*)(?:[^?#]*)))?(\?[^#]+)?)(#.*)?/g;
	console.log(link.match(regExp));
	return 'test';
}

function ArticleLink({ article }) {
	return (
		<>
			<a className="article-link" href={article.link}>
				{article.title}
				<span className="article-link-domain">
					{ParseUrl(article.link.match(/[^/][^/]*/gi)[1])}
				</span>
			</a>
		</>
	);
}

ArticleLink.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	}).isRequired
};

export default ArticleLink;
