import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';

const Tweets = ({ tweets }) => (
	<>
		{tweets.map((tweet) => (
			<Tweet key={tweet.id || 1} tweet={tweet} />
		))}
	</>
);

Tweets.propTypes = {
	tweets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tweets;
