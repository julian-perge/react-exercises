import React from "react";
import PropTypes from "prop-types";
import Article from "../Article/Article";

import "../../styles.css";
import icon from "../../y18.gif";

const NewsList = ({ articles }) => (
  <div className="wrapper">
    <header className="banner">
      <img className="site-icon" src={icon} alt="white letter Y surrounded by orange" />
      <strong className="site">{"Hacker News"}</strong>
      <span className="site-children__new">{"new "}</span>
      <span className="site-children__comments">{"comments"}</span>
      <span className="site-children__show">{"show"}</span>
      <span className="site-children__ask">{"ask"}</span>
      <span className="site-children__jobs">{"jobs"}</span>
      <span className="site-children__submit">{"submit"}</span>
      <span className="site-children__login">{"login"}</span>
    </header>
    <table className="news-list">
      <tbody>
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </tbody>
    </table>
  </div>
);

NewsList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NewsList;
