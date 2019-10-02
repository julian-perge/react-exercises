import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Time({ time, id }) {
	// method 1
	const timeString = Moment(time).fromNow();
	return <a href={`item?id=${id}`} className="time">{timeString}</a>;

	// method 2 - throws no-unused-expressions
	// <span className="time">{moment(time).fromNow()}</span>;
}

Time.propTypes = {
	time: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
};

export default Time;
