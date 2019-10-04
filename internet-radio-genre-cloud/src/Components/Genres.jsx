import React from 'react';

import Genre from './Genre';

function Genres({ arrayOfGenres }) {
	// const genres = React.Children.toArray(arrayOfGenres);
	return (
		<>
			{arrayOfGenres.map((genre) => (
				<Genre key={arrayOfGenres.indexOf(genre)} genre={genre} />
			))}
		</>
	);
}

export default Genres;
