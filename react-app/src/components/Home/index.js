import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as artistsActions from '../../store/artists'

const Home = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artists)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(artistsActions.fetchArtists())
            setIsLoaded(() => true)
        })()
        console.log('artists', artists)
    }, [dispatch])

    return !isLoaded ? null : (
        <div>
            <ul>
                {Object.values(artists)?.map((artist) => {
                    return (
                        <li key={artist.id}>
                            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

export default Home;
