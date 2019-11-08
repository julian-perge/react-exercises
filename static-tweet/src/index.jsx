import React from 'react';
import ReactDOM from 'react-dom';

import Tweet from './Components/Tweet/Tweet';

import './CSS/minireset.min.css';
import './CSS/index.css';

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

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById('root'));
