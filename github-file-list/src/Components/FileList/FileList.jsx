import React from 'react';
import PropTypes from 'prop-types';

import FileListItem from '../FileListItem/FileListItem';
import './FileList.css';

const FileList = ({ files }) => (
	<table className="files">
		<tbody>
			<>
				{files.map((file) => (
					<FileListItem key={file.id || 1} file={file} />
				))}
			</>
		</tbody>
	</table>
);

FileList.propTypes = {
	files: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FileList;
