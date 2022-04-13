import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as artistsActions from '../../store/artists'

const Home = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artists)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(artistsActions.fetchArtists())
            setIsLoaded(true)
        })()
    }, [dispatch])

    return !isLoaded ? null : (
        <div>
            Home
        </div>
    );
}

export default Home;
