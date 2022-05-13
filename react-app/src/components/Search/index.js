import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SearchArtistsContainer from "../Home/SearchArtistsContainer";

import './Search.css'

const Search = ({ searchDate, searchTime }) => {
    const { genre } = useParams();

    const [date, setDate] = useState(searchDate);
    const [time, setTime] = useState(searchTime);

    useEffect(() => { console.log(date, time) }, [date, time])
    console.log('PARAM: ', genre)
    return (
        <>
            <div>
                <SearchArtistsContainer />
            </div>

            <div id='searched-artists'>

            </div>
        </>
    );
}

export default Search;
