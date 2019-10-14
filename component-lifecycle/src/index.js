import React from 'react';
import ReactDOM from 'react-dom';

import AudioControls from './AudioControls';
import AudioControls2 from './AudioControls2';
import Badge from './Badge';
import LifecycleDemo from './LifecycleDemo';
import MultiCounter from './MultiCounter';
import OneTimeButton from './OneTimeButton';
import RandomList from './RandomList';
import Reddit from './Reddit';
import StepTracker from './StepTracker';

import './layout.css';
import './minireset.min.css';

ReactDOM.render(
	<>
		<AudioControls />
		<hr />
		<AudioControls2 />
		<hr />
		<Badge counter={1} />
		<hr />
		<LifecycleDemo />
		<hr />
		<MultiCounter />
		<hr />
		<OneTimeButton onClick={() => alert('hi')} />
		<hr />
		<RandomList />
		<hr />
		<Reddit subreddit="reactjs" />
		<hr />
		<StepTracker />
	</>,
	document.querySelector('#root')
);
