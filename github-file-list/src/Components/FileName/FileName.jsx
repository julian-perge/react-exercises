import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FileIcon from '../FileIcon/FileIcon';

function FileName({ file }) {
	return (
		<>
			<FileIcon file={file} />
			<td className="file-name">{file.name}</td>
		</>
	);
}

FileName.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileName;
