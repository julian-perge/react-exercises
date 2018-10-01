import React from 'react';
import PropTypes from 'prop-types';

import './Poster.css';

function Poster({ image, title, text }) {
  return (
    <main className="poster">
      <img alt="poster" className="poster-image" src={image} />
      <h1 className="title">{title}</h1>
      <h2 className="text">{text}</h2>
    </main>
  );
}

Poster.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Poster;
