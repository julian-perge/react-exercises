import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import Banner from './Banner';

import '../CSS/styles.css';
import icon from '../CSS/y18.gif';

const NewsList = ({ articles }) => (
	<div className="background">
		<header className="banner">
			<img
				className="site-icon"
				src={icon}
				alt="white letter Y surrounded by orange"
			/>
			<strong className="site-name">Hacker News</strong>
			<Banner bannerItems={items} />
		</header>
		<table className="news-list">
			<tbody>
				{articles
					.sort((art1, art2) => art1.upvotes < art2.upvotes)
					.map((article) => (
						<Article
							key={article.id}
							article={article}
							rank={articles.indexOf(article) + 1}
						/>
					))}
			</tbody>
		</table>
	</div>
);

NewsList.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NewsList;

const items = [
	'new',
	'past',
	'comments',
	'ask',
	'show',
	'jobs',
	'submit',
	'testing',
	'login'
];
