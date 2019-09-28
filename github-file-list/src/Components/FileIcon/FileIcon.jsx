import React from 'react';
import PropTypes from 'prop-types';

// This allows to import .svg files without any wonky workaround
// https://github.com/facebook/create-react-app/issues/1388#issuecomment-440421025
import { ReactComponent as FolderIco } from './folder.svg';
import { ReactComponent as FileIco } from './file.svg';

function FileIcon({ file }) {
	return (
		<td className="file-icon">
			{file.type === 'folder' ? <FolderIco /> : <FileIco />}
		</td>
	);
}

FileIcon.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileIcon;
