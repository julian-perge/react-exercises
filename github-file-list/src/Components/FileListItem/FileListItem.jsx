import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from '../FileIcon/FileIcon';
import FileName from '../FileName/FileName';
import CommitMessage from '../CommitMessage/CommitMessage';
import Time from '../Time/Time';

function FileListItem({ file }) {
	return (
		<tr className="file-list-item">
			<td className="file-icon">
				<FileIcon file={file} />
			</td>
			<td>
				<FileName file={file} />
			</td>
			<td>
				<CommitMessage commit={file.latestCommit} />
			</td>
			<td className="age">
				<Time time={file.updated_at} />
			</td>
		</tr>
	);
}

FileListItem.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileListItem;
