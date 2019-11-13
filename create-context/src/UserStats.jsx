import React from 'react';

import {UserAvatar} from './UserAvatar';
import {UserContext} from './App'

// The Consumer fetches the user from context
export const UserStats = () => (
	<UserContext.Consumer>
		{(user) => (
			<>
				<div className="user-stats">
					<UserAvatar user={user} />
					{user.name}
				</div>
				<div className="stats">
					<span>{user.followers} Followers</span>
					<span>Following {user.following}</span>
				</div>
			</>
		)}
	</UserContext.Consumer>
);
