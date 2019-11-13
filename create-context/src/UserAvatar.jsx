import React from 'react';

import {UserContext} from './App'

export const UserAvatar = ({ size }) => (
	<UserContext.Consumer>
		{(user) => (
			<img
				alt="user avatar"
				className={`user-avatar ${size || ''}`}
				src={user.avatar}
			/>
		)}
	</UserContext.Consumer>
);
