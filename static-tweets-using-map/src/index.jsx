import React from 'react';
import ReactDOM from 'react-dom';

import Tweets from './Components/Tweets';

import './minireset.min.css';
import './index.css';

const multipleTweets = [
	{
		id: 1,
		author: {
			handle: 'catperson',
			name: 'IAMA Cat person'
		},
		gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
		likes: 5,
		message:
			'Something about cats. And cats are adorable and quite snuggly. I wonder what type of cat Garfield is.',
		retweets: 2,
		timestamp: '2018-09-28 03:52:30'
	},
	{
		id: 2,
		author: {
			handle: 'BlueEyesWhiteDragon',
			name: 'Seto Kaiba'
		},
		gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
		likes: 5,
		message: 'The strongest Monster card in all of existance.',
		retweets: 2,
		timestamp: '2018-09-28 03:52:30'
	},
	{
		id: 3,
		author: {
			handle: 'DuelistYugi',
			name: 'Yugi Moto'
		},
		gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
		likes: 0,
		message: 'YU-GI-OH.',
		retweets: 0,
		timestamp: '2018-12-28 03:52:30'
	}
];

ReactDOM.render(
	<Tweets tweets={multipleTweets} />,
	document.getElementById('root')
);
