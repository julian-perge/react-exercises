import React from 'react';
import PropTypes from 'prop-types';

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  }
  return null;
}

function RetweetButton({ count }) {
  return (
    <span className="retweetButton">
      <i className="fa fa-retweet retweet-button" />
      {getRetweetCount(count)}
    </span>
  );
}

RetweetButton.propTypes = {
  count: PropTypes.number,
};

RetweetButton.defaultProps = {
  count: 0,
};

export default RetweetButton;
