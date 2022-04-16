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

    const [categorizedArtists, setCategorizedArtists] = useState(categorizeArtists(artists))

    useEffect(() => {
        console.log('Categorized Artists: ', categorizedArtists)
    }, [])
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


            {categories.map((category, i) => (
                <div key={i}>
                    <CategoryContainer category={category} artists={artists} genre={genres[i]} />
                </div>
            ))}

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
