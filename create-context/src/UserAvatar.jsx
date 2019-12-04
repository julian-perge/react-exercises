import React from 'react';

import { UserContext } from './App';

// Components that need the data can tap into the context by rendering the Consumer.
// It uses the "render props" pattern -- rendering a function as a child
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
