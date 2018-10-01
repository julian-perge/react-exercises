import React from 'react';
import ReactDOM from 'react-dom';
import Envelope from './Components/Envelope/Envelope';
import './minireset.min.css';
import './layout.css';

const fromPerson = {
  fullName: 'Julian Perge',
  address: '123 Blank Street',
  cityStateZip: 'Columbus, OH 43203',
};

const toPerson = {
  fullName: 'Perge Julian',
  address: '321 Blank Street',
  cityStateZip: 'San Francisco, CA 43204',
};

ReactDOM.render(
  <Envelope fromPerson={fromPerson} toPerson={toPerson} />,
  document.getElementById('root'),
);
