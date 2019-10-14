import React, { Component } from 'react';

import SideBar from './SideBar';
import Content from './Content';

import './styles.css';

export default class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSidebar: false
		};
	}

	toggleSidebar = () => {
		const { showSidebar } = this.state;
		this.setState({
			showSidebar: !showSidebar
		});
	}

	render() {
		const { showSidebar } = this.state;

		return (
			<div className="layout">
				{showSidebar
					&& <SideBar onHide={this.toggleSidebar}>some sidebar content</SideBar>}
				<Content
					isSidebarVisible={showSidebar}
					onShowSidebar={this.toggleSidebar}
				>
					Some Content Here
				</Content>
			</div>
		);
	}
}
