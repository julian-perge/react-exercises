import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './Components/CreditCard';

import './layout.css';
import './minireset.min.css';

const cardInfo = {
  bank: 'Big Bank, Inc.',
  number: '1234567887654321',
  security: '123',
  expirationDate: '08/19',
  cardHolder: 'William P. MoneyBags',
};

ReactDOM.render(<CreditCard cardInfo={cardInfo} />, document.getElementById('root'));
