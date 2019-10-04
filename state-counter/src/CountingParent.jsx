import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CountingParent extends Component {
	constructor(props) {
		super(props);
		this.state = { actionCount: 0 };
	}

	handleAction = (action) => {
		const { actionCount } = this.state;
		console.log(`Child says`, action);
		this.setState({ actionCount: actionCount + 1 });
	};

	resetAction = (action) => {
		console.log(`reset says`, action.target);
		this.setState({ actionCount: 0 });
	}

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

function Child({ onAction }) {
	return <button type="button" onClick={onAction}>Click Me!</button>;
}

function Reset({ onAction }) {
	return <button type="button" onClick={onAction}>RESET</button>;
}


export default CountingParent;
