import React from 'react';
import PropTypes from 'prop-types';

import Tweet from '../Tweet/Tweet';

const Tweets = ({ tweets }) => (
  <React.Fragment>
    {tweets.map(tweet => (
      <Tweet key={tweet.id || 1} tweet={tweet} />
    ))}
  </React.Fragment>
);

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tweets;
