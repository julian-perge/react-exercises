import React from 'react';
import PropTypes from 'prop-types';
import Sender from '../Sender/Sender';
import Subject from '../Subject/Subject';
import Date from '../Date/Date';
import Message from '../Message/Message';

import '../Email/Email.css';

const PinIcon = () => <i className="fas fa-thumbtack" />;
const Checkbox = () => <input className="checkbox" type="checkbox" />;

function Email({ email }) {
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

export default Email;
