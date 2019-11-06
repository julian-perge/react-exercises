import React, { Component } from 'react';

import Child from './Child';
import Reset from './Reset';

export class CountingParent extends Component {
	constructor(props) {
		super(props);
		// Set the state here. Use "props" if needed.
		this.state = { actionCount: 0 };
		this.handleAction = this.handleAction.bind(this);
	}

	handleAction = (action) => {
		const { actionCount } = this.state;
		// console.log(`Child says`, action);
		this.setState({ actionCount: actionCount + 1 });
	};

	resetAction = (action) => {
		// console.log(`reset says`, action.target);
		this.setState({ actionCount: 0 });
	};

	render() {
		const { actionCount } = this.state;
		return (
			<div>
				<Child onAction={this.handleAction} />
				<Reset onAction={this.resetAction} />
				<p>{`Clicked ${actionCount} times`}</p>
			</div>
		);
	}
}

export default CountingParent;
