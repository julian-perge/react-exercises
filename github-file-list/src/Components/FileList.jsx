import React from 'react';
import PropTypes from 'prop-types';

import FileListItem from './FileListItem';

import '../CSS/FileList.css';

const FileList = ({ files }) => (
	<table className="file-list">
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
