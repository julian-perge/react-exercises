import React from 'react';
import PropTypes from 'prop-types';

import FileIcon from '../FileIcon/FileIcon';
import FileName from '../FileName/FileName';
import CommitMessage from '../CommitMessage/CommitMessage';
import Time from '../Time/Time';

function FileListItem({ file }) {
	return (
		<tr className="file-list-item">
			<FileIcon type={file.type} />
			<FileName name={file.name} />
			<CommitMessage message={file.latestCommit.message} />
			<td className="updated_at">
				<Time time={file.updated_at} />
			</td>
		</tr>
	);
}

FileListItem.propTypes = {
	file: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		latestCommit: PropTypes.shape({
			message: PropTypes.string.isRequired
		}).isRequired,
		updated_at: PropTypes.string.isRequired
	}).isRequired
};

export default FileListItem;
