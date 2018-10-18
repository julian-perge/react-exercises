import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';
import Message from '../Message/Message';
import NameWithHandle from '../NameWithHandle/NameWithHandle';
import Time from '../Time/Time';
import RetweetButton from '../RetweetButton/RetweetButton';

function Tweet({ tweet }) {
  return (
    <div className={'tweet'}>
      <Avatar hash={tweet.gravatar} />
      <main className={'content'}>
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <aside className={'buttons'}>
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
    retweets: PropTypes.number,
  }).isRequired,
};

const ReplyButton = () => <i className={'fa fa-reply reply-button'} />;
const MoreOptionsButton = () => <i className={'fa fa-ellipsis-h more-options-button'} />;

export default Tweet;
