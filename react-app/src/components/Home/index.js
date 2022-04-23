import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import SearchArtistsContainer from "./SearchArtistsContainer";
import CategoryContainer from "./CategoryContainer";
import * as artistsActions from '../../store/artists'

import { categorizeArtists } from "../../utils";

import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const outerContainer = useRef(null)

    const artists = useSelector(state => state.artists)
    const [isLoaded, setIsLoaded] = useState(false)

    const categories = ['Trending Artists', 'Electronic / DJ', 'Classical', 'Jazz', 'Singer/Songwriter']
    const genres = ['all', 'electronic', 'classical', 'jazz', 'singerSongwriter']

    const [categorizedArtists, setCategorizedArtists] = useState()

    useEffect(() => {
        (async () => {
            await dispatch(artistsActions.fetchArtists())
            setIsLoaded(() => true)
        })()
    }, [dispatch])


    useEffect(() => {
        setCategorizedArtists(() => categorizeArtists(artists))
    }, [artists])

    return !isLoaded ? null : (
        <div>
            <div>
                <SearchArtistsContainer />
            </div>

            <div className='category__outer-container' ref={outerContainer}>
                {categories.map((category, i) => (
                    <div key={i}>
                        <CategoryContainer category={category} artists={categorizedArtists[genres[i]]} outerContainerRef={outerContainer} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;
