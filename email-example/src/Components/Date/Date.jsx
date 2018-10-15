import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// Time format is yyyy-mm-dd hh:mm:ss

const Date = ({ date }) => {
	const dateString = Moment(date).fromNow();
	return <span className="date">{dateString}</span>;
};

Date.propTypes = {
	date: PropTypes.string.isRequired
};

export default Date;
