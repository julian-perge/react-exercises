import React from 'react';
import ReactDOM from 'react-dom';

import LifecycleDemo from './LifecycleDemo';

class ErrorCatcher extends React.Component {
	state = { error: null };

	componentDidCatch(error, info) {
		console.log('[componentDidCatch]', error);
		this.setState({ error: info.componentStack });
	}

	render() {
		if (this.state.error) {
			return (
				<div>
					{`An error occurred: ${this.state.error}`}
				</div>
			);
		}
		return this.props.children;
	}
}
ReactDOM.render(
	<ErrorCatcher>
		<LifecycleDemo />
	</ErrorCatcher>,
	document.querySelector('#root')
);
