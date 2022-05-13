import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';


import './SearchArtistsContainer.css'

import { times } from '../../../utils.js'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchArtistsContainer = () => {
    const history = useHistory();

    const [genres, setGenres] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const [validationErrors, setValidationErrors] = useState([]);
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [genre, setGenre] = useState('any');

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/genres/')
            const loadedGenres = await res.json();
            if (loadedGenres) setGenres(loadedGenres)
            setIsLoaded(() => true)
        }
        )()
    }, [])



    useEffect(() => {
        // TODO DELETE useEffect
        console.log('Genres: ', genres)
    }, [genres])

    const onSubmit = (e) => {
        e.preventDefault();

        setValidationErrors(() => [])
        const errors = []

        console.log(!date)
        if (!date || new Date(date) <= new Date()) {
            errors.push('Please select future date')
        }

        if (errors.length) setValidationErrors(() => errors)

        history.push(`/genres/${genre}`, { state: { searchDate: date, searchTime: time } })
    };

    return !isLoaded ? null : (
        <div id='artists-search-container'>
            <h1 id='search-title'>Find your musician for any occasion</h1>

            <form onSubmit={onSubmit}>
                <div className='search__input'>
                    <div id='date-time__search-input' className='input__backdrop'>
                        <div className='flex-row' id='date__search-input' >
                            <FontAwesomeIcon icon={faCalendar} />
                            <input
                                className='input-no-style add'
                                type='date'
                                onChange={(e) => setDate(() => e.target.value)}

                            />
                        </div>

                        <div className='flex-row' id='time__search-input' >
                            <FontAwesomeIcon icon={faClock} />
                            <select
                                id='select-time'
                                className='input-no-style'
                                type='select'
                                onChange={(e) => setTime(() => e.target.value)}
                            >
                                {times.map(time => <option key={time} value={time}>{time}</option>)}
                            </select>
                        </div>
                    </div>

                    <div id='genre__search-input' className='input__backdrop'>
                        <FontAwesomeIcon icon={faSearch} />
                        <select
                            id='select-genre'
                            type='select'
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value='all' hidden >Select Genre...</option>
                            <option value='all' >Any Genre</option>
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                        {/* <input className='input-no-style cursor-not-allowed' placeholder='Artist or Genre' /> */}
                    </div>

                    <button
                        // title='        ⚠️ feature under construction'
                        className='search__button'
                        id='search__button'>
                        Let's go
                    </button>

                </div >
                {validationErrors.length ? <div>{validationErrors.map((error, i) => <div key={i}>{error}</div>)}</div> : null}

            </form>
        </div>
    );
}

export default SearchArtistsContainer;
