// Storing state values in individual useState variables
import React, { useState } from 'react';

import './AudioControls.css';

export default function AudioControls() {
	const [volume, setVolumeLevel] = useState(89);
	const [treble, setTrebleLevel] = useState(32);
	const [mid, setMidLevel] = useState(50);
	const [bass, setBassLevel] = useState(41);


	const changeVolume = (action) => {
		const btnClicked = action.currentTarget.innerText;
		setVolumeLevel(() => (btnClicked === '+' ? volume + 1 : volume - 1));
	};

	const changeTreble = (action) => {
		const btnClicked = action.currentTarget.innerText;
		setTrebleLevel(() => (btnClicked === '+' ? treble + 1 : treble - 1));
	};

	const changeMid = (action) => {
		const btnClicked = action.currentTarget.innerText;
		setMidLevel(() => (btnClicked === '+' ? mid + 1 : mid - 1));
	};

	const changeBass = (action) => {
		const btnClicked = action.currentTarget.innerText;
		setBassLevel(() => (btnClicked === '+' ? bass + 1 : bass - 1));
	};

	return (
		<div id="audio-controller">
			<section id="volume-section">
				<button
					className="btn decrease-level"
					onClick={changeVolume}
					type="button"
					value="volume"
				>
					-
				</button>

				<div id="volume-display" className="audio-display-container">
					<span className="audio-display-numbers">{volume}</span>
					<span id="volume-text" className="audio-display-text">
						VOLUME
					</span>
				</div>

				<button
					className="btn increase-level"
					onClick={changeVolume}
					type="button"
					value="volume"
				>
					+
				</button>
			</section>

			<section id="treble-section">
				<button
					className="btn decrease-level"
					onClick={changeTreble}
					type="button"
					value="treble"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{treble}</span>
					<span className="audio-display-text">TREBLE</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeTreble}
					type="button"
					value="treble"
				>
					+
				</button>
			</section>
			<section id="mid-section">
				<button
					className="btn decrease-level"
					onClick={changeMid}
					type="button"
					value="mid"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{mid}</span>
					<span className="audio-display-text">MID</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeMid}
					type="button"
					value="mid"
				>
					+
				</button>
			</section>
			<section id="bass-section">
				<button
					className="btn decrease-level"
					onClick={changeBass}
					type="button"
					value="bass"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{bass}</span>
					<span className="audio-display-text">BASS</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeBass}
					type="button"
					value="bass"
				>
					+
				</button>
			</section>
		</div>
	);
}
