import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import LikeButton from './LikeButton';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import RetweetButton from './RetweetButton';

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<Avatar hash={tweet.gravatar} />
			<main className="content">
				<NameWithHandle author={tweet.author} />
				<Time time={tweet.timestamp} />
				<Message text={tweet.message} />
				<aside className="buttons">
					<ReplyButton />
					<RetweetButton count={tweet.retweets} />
					<LikeButton count={tweet.likes} />
					<MoreOptionsButton />
				</aside>
			</main>
		</div>
	);
}

Tweet.propTypes = {
	tweet: PropTypes.shape({
		gravatar: PropTypes.string,
		likes: PropTypes.number,
		message: PropTypes.string,
		retweets: PropTypes.number
	}).isRequired
};

const ReplyButton = () => <i className="fa fa-reply icon reply-icon-button" />;
const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h icon more-options-icon-button" />
);

export default Tweet;
