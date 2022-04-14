import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../store/artists.js'

import ReviewForm from '../ReviewForm/index.js';
import BookingForm from '../BookingForm/index.js';

function Artist() {
  const dispatch = useDispatch();

  const { artistId } = useParams();
  const artist = useSelector(state => state.artists[artistId])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => { console.log('ARTIST') }, [])

  useEffect(() => {
    (async () => {
      await dispatch(artistsActions.fetchArtist(artistId))
      console.log('ARTIST: ', artist)

      setIsLoaded(() => true)
    })();
    console.log('ARTIST: ', artist)

  }, [dispatch]);

  return !isLoaded ? null : (
    <div>
      <div>
        <ul>
          <li>{artist.name}</li>
          <li>{artist.rate}</li>
          <li>{artist.bio}</li>
        </ul>
      </div>

      <div>
        <h3>Book Artist</h3>
        <BookingForm />
      </div>

      <div>
        <h3>Create New Review</h3>
        <ReviewForm />

        <div>
          <h3>Reviews</h3>
          <ul>
            {artist.reviews.map(review => (
              <div>
                <p>{review.user.name}</p>
                <p>{review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Artist;
