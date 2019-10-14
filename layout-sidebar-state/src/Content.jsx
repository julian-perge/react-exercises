import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
	<div className="content">
		{!isSidebarVisible && (
			<button onClick={onShowSidebar} type="button">Show</button>
		)}
		{children}
	</div>
);

export default Content;

Content.propTypes = {
	children: PropTypes.string,
	isSidebarVisible: PropTypes.bool.isRequired,
	onShowSidebar: PropTypes.func.isRequired,
};
