import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchArtistsContainer from "../Home/SearchArtistsContainer";

import './Search.css'

const Search = ({ artists, }) => {

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
