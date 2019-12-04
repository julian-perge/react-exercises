import React, { createContext, useState } from 'react';

// export the context to be used in Room.jsx
export const RoomContext = createContext();

//  A components whose sole job is to manage the state of the Room
export default function RoomStore({ children }) {
	const [isLit, setIsLit] = useState(false);

	const toggleLight = () => {
		setIsLit(!isLit);
	};

	//  Pass down the state and the onToggleLight action
	return (
		<RoomContext.Provider
			value={{
				isLit,
				onToggleLight: toggleLight
			}}
		>
			{children}
		</RoomContext.Provider>
	);
}
