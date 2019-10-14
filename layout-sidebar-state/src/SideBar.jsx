import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ onHide, children }) => (
	<div className="sidebar">
		<button onClick={onHide} type="button">
			Hide
		</button>
		{children}
	</div>
);

export default SideBar;

SideBar.propTypes = {
	onHide: PropTypes.func.isRequired,
	children: PropTypes.string
};
