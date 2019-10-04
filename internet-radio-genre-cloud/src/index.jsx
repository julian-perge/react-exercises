import React from 'react';
import ReactDOM from 'react-dom';

import PopularGenres from './Components/PopularGenres';

import arrayOfGenres from './Data/listOfGenres';

import './layout.css';
import './minireset.min.css';
import './styles.css';

ReactDOM.render(<PopularGenres genres={arrayOfGenres} />, document.getElementById('root'));
