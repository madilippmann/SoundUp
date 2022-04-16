import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import SearchArtistsContainer from "./SearchArtistsContainer";
import CategoryContainer from "./CategoryContainer";
import * as artistsActions from '../../store/artists'

import { categorizeArtists } from "../../utils";

import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const artists = useSelector(state => state.artists)
    const [isLoaded, setIsLoaded] = useState(false)

    const categories = ['Trending Artists', 'Folk', 'Electronic / DJ', 'Classical']
    const genres = ['all', 'folk', 'electronic', 'classical']

    const [categorizedArtists, setCategorizedArtists] = useState()

    useEffect(() => {
        (async () => {
            await dispatch(artistsActions.fetchArtists())
            setCategorizedArtists(() => categorizeArtists(artists))
            setIsLoaded(() => true)
        })()
    }, [dispatch])

    return !isLoaded ? null : (
        <div>
            <div>
                <SearchArtistsContainer />
            </div>

            <div className='category__container'>
                {categories.map((category, i) => (
                    <div key={i}>
                        <CategoryContainer category={category} artists={categorizedArtists[genres[i]]} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;
