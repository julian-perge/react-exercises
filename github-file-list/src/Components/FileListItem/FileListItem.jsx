import React from 'react';
import PropTypes from 'prop-types';

import FileName from '../FileName/FileName';
import CommitMessage from '../CommitMessage/CommitMessage';

function FileListItem({ file }) {
	return (
		<tr className="file-list-item">
			<FileName file={file} />
			<CommitMessage commit={file.latestCommit} />
		</tr>
	);
}

FileListItem.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileListItem;
