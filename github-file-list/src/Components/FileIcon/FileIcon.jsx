import React, { Component } from 'react';
import PropTypes from 'prop-types';

import folderIco from './folder.svg';
import fileIco from './file.svg';

function FileIcon({ type }) {
	return (
		<td className="file-icon">
			{type === 'folder' ? (
				<img className="file-icon_img" src={folderIco} alt="folder icon" />
			) : (
				<img className="file-icon" src={fileIco} alt="file icon" />
			)}
		</td>
	);
}

FileIcon.propTypes = {
	type: PropTypes.string.isRequired
};

export default FileIcon;
