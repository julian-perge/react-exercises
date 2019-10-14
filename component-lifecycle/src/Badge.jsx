import React, { Component } from 'react';

export default class Badge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animating: false
		};
	}

	componentDidUpdate(oldProps) {
		if (this.props.counter !== oldProps.counter) {
			this.setState({ animating: true }, () => {
				setTimeout(() => {
					this.setState({ animating: false });
				}, 2000);
			});
		}
	}

	render() {
		const animatingClass = this.state.animating ? 'animating' : '';
		return (
			<div className={`badge ${animatingClass}`}>
				SOMETHING NEAR HERE
				{this.props.counter}
			</div>
		);
	}
}
