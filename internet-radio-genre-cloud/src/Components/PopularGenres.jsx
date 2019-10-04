import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

import Genres from './Genres';

function PopularGenres({ genres }) {
	return (
		<>
			<header className="panel-div">
				<section className="panel-heading-section">
					<h3 className="panel-title">
						<FontAwesomeIcon id="panel-icon" icon={faFireAlt} />
						Popular Genres
					</h3>
				</section>
			</header>
			<main>
				<section className="panel-body">
					<Genres arrayOfGenres={genres} />
				</section>
			</main>
		</>
	);
}
export default PopularGenres;

PopularGenres.propTypes = {
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
