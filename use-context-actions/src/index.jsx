import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import RoomStore from './Components/RoomStore';

ReactDOM.render(
	<RoomStore>
		<App />
	</RoomStore>,
	document.getElementById('root')
);
