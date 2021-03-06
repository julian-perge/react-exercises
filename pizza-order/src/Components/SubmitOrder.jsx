import React from 'react';
import PropTypes from 'prop-types';

const SubmitOrder = ({ onSubmit }) => (
	<button id="btnSendOrder" onClick={onSubmit} type="submit">
		Send Order
	</button>
);

SubmitOrder.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default SubmitOrder;
