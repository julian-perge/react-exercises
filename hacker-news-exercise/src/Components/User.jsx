import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
	<a href={`user?id=${user.name}`} className="article-user">
		{user.name}
	</a>
);

User.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired
};

export default User;
