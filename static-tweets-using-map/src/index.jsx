import React from 'react';
import ReactDOM from 'react-dom';

import Tweets from './Components/Tweets/Tweets';

import './minireset.min.css';
import './index.css';

const multipleTweets = [
  {
    id: 1,
    author: {
      handle: 'catperson',
      name: 'IAMA Cat person',
    },
    gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
    likes: 5,
    message: 'Something about cats.',
    retweets: 2,
    timestamp: '2018-09-28 03:52:30',
  },
  {
    id: 2,
    author: {
      handle: 'catperson',
      name: 'IAMA Cat person',
    },
    gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
    likes: 5,
    message: 'Something about cats.',
    retweets: 2,
    timestamp: '2018-09-28 03:52:30',
  },
  {
    id: 3,
    author: {
      handle: 'catperson',
      name: 'IAMA Cat person',
    },
    gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
    likes: 5,
    message: 'Something about cats.',
    retweets: 2,
    timestamp: '2018-09-28 03:52:30',
  },
];

const testTweet = {
  author: {
    handle: 'catperson',
    name: 'IAMA Cat person',
  },
  gravatar: 'd71cdfb0b46c835e7dfe7f846d0d2398',
  likes: 5,
  message: 'Something about cats.',
  retweets: 2,
  timestamp: '2018-09-28 03:52:30',
};

ReactDOM.render(<Tweets tweets={multipleTweets} />, document.getElementById('root'));
