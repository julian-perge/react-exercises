import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './Components/NewsList';

import './CSS/layout.css';
import './CSS/minireset.min.css';

import listOfArticles from './Data/articles-data.json'

ReactDOM.render(
	<NewsList articles={listOfArticles} />,
	document.getElementById('root')
);
