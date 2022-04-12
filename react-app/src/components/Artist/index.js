import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../store/artists.js'

function Artist() {
  const dispatch = useDispatch();

  const { artistId } = useParams();
  const artist = useSelector(state => state.artists[artistId])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      await dispatch(artistsActions.loadArtist(artistId))
      setIsLoaded(() => true)
    })();
  }, [dispatch]);

  return !isLoaded ? null : (
    <div>

    </div>
  );
}
export default Artist;
