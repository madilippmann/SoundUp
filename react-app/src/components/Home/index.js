import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import SearchArtistsContainer from "./SearchArtistsContainer";
import CategoryContainer from "./CategoryContainer";
import * as artistsActions from '../../store/artists'

import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artists)
    const [isLoaded, setIsLoaded] = useState(false)

    const categories = ['Trending Artists', 'Folk', 'Electronic / DJ', 'Classical']
    const genres = ['all', 'folk', 'electronic', 'classical']

    useEffect(() => {
        (async () => {
            await dispatch(artistsActions.fetchArtists())
            setIsLoaded(() => true)
        })()
        console.log('artists', artists)
    }, [dispatch])

    return !isLoaded ? null : (
        <div>
            <div>
                <SearchArtistsContainer />
            </div>


            {categories.map(category => <CategoryContainer category={category} artists={artists} />)}
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
