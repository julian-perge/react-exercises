import React from 'react';
import ReactDOM from 'react-dom';
import './minireset.min.css';
import FileList from './Components/FileList/FileList';

const listOfFiles = [
	{
		id: 1,
		name: '.eslintrc',
		type: 'folder',
		updated_at: '2016-07-11 21:24:00',
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 2,
		name: 'tests',
		type: 'folder',
		updated_at: '2016-07-11 21:24:00',
		latestCommit: {
			message: 'Initial commit'
		}
	},
	{
		id: 3,
		name: 'README',
		type: 'file',
		updated_at: '2016-07-18 21:24:00',
		latestCommit: {
			message: 'Added a readme'
		}
	}
];

ReactDOM.render(
	<FileList files={listOfFiles} />,
	document.getElementById('root')
);
