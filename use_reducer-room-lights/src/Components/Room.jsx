import React, { useState } from 'react';
import Light from './Light';

export default function Room({ numberOfLights }) {
	const [lights, setLights] = useState(
		{
			room: {
			}
		}
	);

	const changeLightLevel = () => {
		setLights();
	};

	const turnOffAllLights = (action) => {

	};

	function addLights(numOfLights) {
		const elements = [];
		for (let num = 0; num < numberOfLights; num += 1) {
			useState({ room: `light${num}` });
			elements.push(<Light onChange={changeLightLevel} />);
		}
	}


	return (
		<div>
			<h1>Main Room</h1>
			{addLights(numberOfLights)}
		</div>
	);
}

Room.propTypes = {

};
