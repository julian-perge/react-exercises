import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialog from './Components/Dialog/Dialog';
import Title from './Components/Title/Title';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

const titleText = 'Time to Split!';
const bodyText = 'TimeSplitters 2 was a great game.';
const footerButton = <button className="close-button" type="button">{"Close"}</button>;

ReactDOM.render(
  <Dialog>

  </Dialog>,
  document.getElementById('root'),
);

/* <Title>{titleText}</Title>
<Body>{bodyText}</Body>
<Footer>{footerButton}</Footer> */
