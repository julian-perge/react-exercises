import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Avatar from './Components/Avatar';
import LikeButton from './Components/LikeButton';
import Message from './Components/Message';
import NameWithHandle from './Components/NameWithHandle';
import RetweetButton from './Components/RetweetButton';

import './minireset.min.css';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className={"tweet"}>
      <Avatar hash={tweet.gravatar} />
      <main className={"content"}>
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <aside className={"buttons"}>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </aside>
      </main>
    </div>
  );
}
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

Tweet.propTypes = {
  tweet: PropTypes.shape({
    gravatar: PropTypes.string,
    likes: PropTypes.number,
    message: PropTypes.string,
    retweets: PropTypes.number,
  }).isRequired,
};

const Time = ({ time }) => {
  // method 1
  const timeString = Moment(time).fromNow();
  return <span className={"time"}>{timeString}</span>;

  // method 2 - throws no-unused-expressions
  // <span className="time">{moment(time).fromNow()}</span>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired,
};

const ReplyButton = () => <i className={"fa fa-reply reply-button"} />;
const MoreOptionsButton = () => <i className={"fa fa-ellipsis-h more-options-button"} />;

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById('root'));
