import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const Time = ({ time }) => {
	// method 1
	const timeString = Moment(time).fromNow();
	return <span className="time">{timeString}</span>;

	// method 2 - throws no-unused-expressions
	// <span className="time">{moment(time).fromNow()}</span>;
};

Time.propTypes = {
	time: PropTypes.string.isRequired
};

export default Time;
