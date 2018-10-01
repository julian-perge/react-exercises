import React from 'react';
import PropTypes from 'prop-types';

import Bank from '../Bank/Bank';
import CardNumber from '../CardNumber/CardNumber';
import CardSecurity from '../CardSecurity/CardSecurity';
import CardExpiration from '../CardExpiration/CardExpiration';
import CardHolder from '../CardHolder/CardHolder';

import './CreditCard.css';

function CreditCard({ cardInfo }) {
  return (
    <main className="creditCard">
      <Bank name={cardInfo.bank} />
      <CardNumber number={cardInfo.number} />
      <CardSecurity security={cardInfo.security} />
      <CardExpiration expirationDate={cardInfo.expirationDate} />
      <CardHolder person={cardInfo.cardHolder} />
    </main>
  );
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    bank: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    security: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreditCard;
