import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './Components/NewsList';

import './layout.css';
import './minireset.min.css';

const listOfArticles = [
	{
		id: 1,
		title:
			'Mio – Cross-platform header-only C++11 library for memory mapped file IO',
		link: 'https://github.com/mandreyel/mio',
		upvotes: 144,
		user: {
			name: 'starbugs'
		},
		time_posted: '2018-10-20 11:00:00',
		num_of_comments: 23
	},
	{
		id: 2,
		title:
			'Validating UTF-8 bytes using only 0.45 cycles per byte (AVX edition)',
		link:
			'https://lemire.me/blog/2018/10/19/validating-utf-8-bytes-using-only-0-45-cycles-per-byte-avx-edition/',
		upvotes: 22,
		user: {
			name: 'akarambir'
		},
		time_posted: '2018-10-20 09:00:00',
		num_of_comments: 98
	},
	{
		id: 3,
		title: 'Tricks That Can Outsmart Deepfake Videos for Now',
		link:
			'https://www.wired.com/story/these-new-tricks-can-outsmart-deepfake-videosfor-now/',
		upvotes: 433,
		user: {
			name: 'joewee'
		},
		time_posted: '2018-10-20 09:15:00',
		num_of_comments: 47
	}
];

ReactDOM.render(
	<NewsList articles={listOfArticles} />,
	document.getElementById('root')
);
