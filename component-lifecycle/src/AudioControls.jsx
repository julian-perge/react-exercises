// Storing state values in an Object
import React, { useState } from 'react';

import './AudioControls.css';

export default function AudioControls() {
	const [audioLevels, setAudioLevel] = useState({
		volume: 50,
		treble: 32,
		mid: 50,
		bass: 41
	});

	const changeVolume = (action) => {
		const audioSelected = action.currentTarget.value;
		const btnClicked = action.currentTarget.innerText;

		setAudioLevel(() => ({
			...audioLevels,
			[audioSelected]:
				btnClicked === '+'
					? audioLevels[audioSelected] + 1
					: audioLevels[audioSelected] - 1
		}));
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
					<span className="audio-display-numbers">{audioLevels.volume}</span>
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
					onClick={changeVolume}
					type="button"
					value="treble"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{audioLevels.treble}</span>
					<span className="audio-display-text">TREBLE</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeVolume}
					type="button"
					value="treble"
				>
					+
				</button>
			</section>
			<section id="mid-section">
				<button
					className="btn decrease-level"
					onClick={changeVolume}
					type="button"
					value="mid"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{audioLevels.mid}</span>
					<span className="audio-display-text">MID</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeVolume}
					type="button"
					value="mid"
				>
					+
				</button>
			</section>
			<section id="bass-section">
				<button
					className="btn decrease-level"
					onClick={changeVolume}
					type="button"
					value="bass"
				>
					-
				</button>
				<div className="audio-display-container">
					<span className="audio-display-numbers">{audioLevels.bass}</span>
					<span className="audio-display-text">BASS</span>
				</div>
				<button
					className="btn increase-level"
					onClick={changeVolume}
					type="button"
					value="bass"
				>
					+
				</button>
			</section>
		</div>
	);
}
