import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../store/artists.js'

import BookingForm from './BookingForm/index.js';

import Reviews from './Reviews/index.js';
import './Artist.css'
import ArtistInfo from './ArtistInfo/index.js';

function Artist() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { artistId } = useParams();
	const artist = useSelector(state => state.artists[artistId])
	// const reviews = useSelector(state => state.artists[artistId].reviews)
	const [isLoaded, setIsLoaded] = useState(false)


	useEffect(() => {
		(async () => {
			const loadedArtist = await dispatch(artistsActions.fetchArtist(artistId))
			if (!loadedArtist) {
				history.push('/')
				return <Redirect to='/' />
			}
			setIsLoaded(() => true)
		})();

	}, [dispatch]);



	return !isLoaded ? null : (
		<div id='artist-page__container'>
			<div id='artist-page__left'>
				<ArtistInfo artist={artist} />
				<Reviews artist={artist} />
			</div>

			<div id='artist-page__right'>
				<BookingForm parent={artist} />
			</div>

		</div >
	);
}
export default Artist;
