import React from "react";
import PropTypes from "prop-types";

import ArticleLink from "../ArticleLink/ArticleLink";
import UpvoteIcon from "../UpvoteIcon/UpvoteIcon";

const ArticleTitle = ({ article }) => (
  <span className="article-title">
    <UpvoteIcon />
    <ArticleLink article={article} />
  </span>
);

ArticleTitle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default ArticleTitle;
