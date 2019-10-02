import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Time({ time }) {
	// method 1
	const timeString = Moment(time).fromNow();
	return <a className="time">{timeString}</a>;

	// method 2 - throws no-unused-expressions
	// <span className="time">{moment(time).fromNow()}</span>;
}

Time.propTypes = {
	time: PropTypes.string.isRequired
};

export default Time;
