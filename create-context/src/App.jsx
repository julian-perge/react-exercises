import React, { Component } from 'react';
import { Nav } from './Nav';
import { Body } from './Body';

// First, we create a new context.
// createContext returns an object with 2 properties:
//	{ Provider, Consumer }
// We'll use the Provider and Consumer below,
// but rather than pull them out individually,
// we can store the whole object in a variable.
// As long as it's named with UpperCase, we can use
// its properties in JSX expressions.
export const UserContext = React.createContext();

// Inside App, we make the context available using the Provider
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				avatar:
					'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
				name: 'Dave',
				followers: 1234,
				following: 123
			}
		};
	}

	render() {
		return (
			<div className="app">
				<UserContext.Provider value={this.state.user}>
					<Nav />
					<Body />
				</UserContext.Provider>
			</div>
		);
	}
}
