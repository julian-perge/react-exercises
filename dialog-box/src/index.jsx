import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from './Components/Dialog';
import Title from './Components/Title';
import Body from './Components/Body';
import Footer from './Components/Footer';

import './CSS/minireset.min.css';

const titleText = 'Time to Split!';
const bodyText = 'TimeSplitters 2 was a great game.';
const footerButton = <button className="close-button" type="button">{"Close"}</button>;

ReactDOM.render(
  <Dialog>
		<Title strTitle={titleText} />
		<Body strBody={bodyText} />
		<Footer button={footerButton} />
  </Dialog>,
  document.getElementById('root'),
);

/* <Title>{titleText}</Title>
<Body>{bodyText}</Body>
<Footer>{footerButton}</Footer> */
