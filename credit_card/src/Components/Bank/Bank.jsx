import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Bank.css';

function Bank({ name }) {
  return (
    <Fragment>
      <strong className="bankName">{name}</strong>
    </Fragment>
  );
}

Bank.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Bank;
