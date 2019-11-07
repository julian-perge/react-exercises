import React from 'react';
import ReactDOM from 'react-dom';

import Email from './Components/Email';

import './CSS/layout.css';
import './CSS/minireset.min.css';

const singleEmail = {
	sender: 'SlayTheSpireFanClub',
	subject: 'The Defect - Issue 420',
	date: '2018-10-14 23:59:59',
	message:
		'SlayTheSpireFanClub - Invites you to discuss the inner workings and shortfalls of the latest character, The Defect. Any and all levels of spire slaying players are welcome to join the discussion!'
};

ReactDOM.render(<Email email={singleEmail} />, document.getElementById('root'));
