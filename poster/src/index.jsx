import React from 'react';
import ReactDOM from 'react-dom';
import Poster from './Components/Poster/Poster';
import logo from './Components/Poster/react-logo.png';

import './layout.css';
import './minireset.min.css';

ReactDOM.render(
  <Poster image={logo} title="React" text="The best thing since jQuery, probably." />,
  document.getElementById('root'),
);
