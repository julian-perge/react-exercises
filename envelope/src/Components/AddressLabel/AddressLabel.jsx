import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './addressLabel.css';

function AddressLabel({ person }) {
  return (
    <Fragment>
      <ol className="person">
        <li className="full-name">{person.fullName}</li>
        <li className="address">{person.address}</li>
        <li className="state-city-zip">{person.cityStateZip}</li>
      </ol>
    </Fragment>
  );
}

AddressLabel.propTypes = {
  person: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cityStateZip: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddressLabel;
