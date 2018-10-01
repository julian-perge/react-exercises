import React from 'react';
import PropTypes from 'prop-types';
import AddressLabel from '../AddressLabel/AddressLabel';
import Stamp from '../Stamp/Stamp';
import StampImage from '../Stamp/stamp.jpg';
import './Envelope.css';

function Envelope({ fromPerson, toPerson }) {
  return (
    <main className="envelope">
      <section className="fromPerson">
        <AddressLabel person={fromPerson} />
      </section>
      <section className="toPerson">
        <AddressLabel person={toPerson} />
      </section>
      <Stamp image={StampImage} />
    </main>
  );
}

Envelope.propTypes = {
  fromPerson: PropTypes.shape().isRequired,
  toPerson: PropTypes.shape().isRequired,
};

export default Envelope;
