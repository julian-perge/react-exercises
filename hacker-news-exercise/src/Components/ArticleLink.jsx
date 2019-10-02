import React from 'react';
import PropTypes from 'prop-types';

function ParseUrl(link) {
	// http://blog.stevenlevithan.com/archives/parseuri
	// https://stackoverflow.com/a/24527267
	const regExp = /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	const parsedUrl = link.match(regExp)[2];
	return `${
		parsedUrl.startsWith('www')
			? `${parsedUrl.substring(4)}`
			: parsedUrl
	}`;
}

function ArticleLink({ article }) {
	const parsedURL = ParseUrl(article.link);
	return (
		<>
			<a href={`from?site=${parsedURL}`} className="article-link">
				{article.title}
				<span className="article-link-domain">
					{'('}
					{parsedURL}
					{')'}
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
