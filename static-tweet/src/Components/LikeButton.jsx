import React from 'react';
import PropTypes from 'prop-types';

function LikeButton({ count }) {
  return (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number,
};

LikeButton.defaultProps = {
  count: 0,
};

export default LikeButton;
