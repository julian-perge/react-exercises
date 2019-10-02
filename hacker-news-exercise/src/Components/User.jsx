import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => <a className="article-user">{user.name}</a>;

User.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired
};

export default User;
