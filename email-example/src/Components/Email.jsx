import React from 'react';
import PropTypes from 'prop-types';
import Sender from './Sender';
import Subject from './Subject';
import Date from './Date';
import Message from './Message';

import '../CSS/Email.css';

const PinIcon = () => <i className="fas fa-thumbtack" />;
const Checkbox = () => <input className="checkbox" type="checkbox" />;

export default function Email({ email }) {
	return (
		<main className="email">
			<Checkbox />
			<PinIcon />
			<Sender sender={email.sender} />
			<Subject subject={email.subject} />
			<Date date={email.date} />
			<Message message={email.message} />
		</main>
	);
}

Email.propTypes = {
	email: PropTypes.shape({
		sender: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired
	}).isRequired
};
