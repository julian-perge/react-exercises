import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialog from './Components/Dialog/Dialog';
import Title from './Components/Title/Title';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

const titleText = 'Time to Split!';
const bodyText = 'TimeSplitters 2 was a great game.';
const footerButton = <button className="close-button" type="button">Close</button>;

const dialogChildren = [
  <Title key={1}>{titleText}</Title>,
  <Body key={2}>{bodyText}</Body>,
  <Footer key={3}>{footerButton}</Footer>,
];

console.log(dialogChildren);

ReactDOM.render(
  <Dialog>
    {dialogChildren}
  </Dialog>,
  document.getElementById('root'),
);
