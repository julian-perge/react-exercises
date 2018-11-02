import React from "react";
import PropTypes from "prop-types";

import ArticleTitle from "../ArticleTitle/ArticleTitle";
import ArticleUpvotes from "../ArticleUpvotes/ArticleUpvotes";
import User from "../User/User";
import ArticleComments from "../ArticleComments/ArticleComments";
import Time from "../Time/Time";

const ArticleItem = ({ article }) => (
  <tr className="news-list-item">
    <td className="article">
      <ArticleTitle article={article} />
      <section className="article-data">
        <ArticleUpvotes upvotes={article.upvotes} />
        {" by "} <User user={article.user} /> <Time time={article.time_posted} />
        {" | hide | "}
        <ArticleComments numberOfComments={article.num_of_comments} />
      </section>
    </td>
  </tr>
);

ArticleItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    time_posted: PropTypes.string.isRequired
  }).isRequired
};

export default ArticleItem;
