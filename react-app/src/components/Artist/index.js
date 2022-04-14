import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../store/artists.js'

import BookingForm from '../BookingForm/index.js';

import Reviews from './Reviews.js';

function Artist() {
	const dispatch = useDispatch();
	const { artistId } = useParams();
	const artist = useSelector(state => state.artists[artistId])
	// const reviews = useSelector(state => state.artists[artistId].reviews)
	const [isLoaded, setIsLoaded] = useState(false)


	useEffect(() => {
		(async () => {
			await dispatch(artistsActions.fetchArtist(artistId))
			setIsLoaded(() => true)
		})();

	}, [dispatch]);


	return !isLoaded ? null : (
		<div>
			<div>
				<ul>
					<li>{artist.name}</li>
					<li>${artist.rate}</li>
					<li>{artist.bio}</li>
				</ul>
			</div>

			<div>
				<h3>Book Artist</h3>
				<BookingForm artist={artist} />
			</div>

			<Reviews artist={artist} />

		</div >
	);
}
export default Artist;
