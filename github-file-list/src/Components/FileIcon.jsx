import React from 'react';
import PropTypes from 'prop-types';

// This allows to import .svg files without any wonky workaround
// https://github.com/facebook/create-react-app/issues/1388#issuecomment-440421025
import { ReactComponent as FolderIco } from '../CSS/folder.svg';
import { ReactComponent as FileIco } from '../CSS/file.svg';

function FileIcon({ file }) {
	return <>{file.type === 'folder' ? <FolderIco /> : <FileIco />}</>;
}

FileIcon.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileIcon;
