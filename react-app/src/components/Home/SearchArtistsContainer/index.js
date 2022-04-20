import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';

import './SearchArtistsContainer.css'

import { times } from '../../../utils.js'

const SearchArtistsContainer = () => {

    const onChange = (date) => {
        // TODO
    };

    return (
        <div id='artists-search-container'>
            <h1 id='search-title'>Find your musician for any occasion</h1>

            <div className='search__input'>
                <div id='date-time__search-input' className='input__backdrop'>
                    <div className='flex-row' id='date__search-input' >
                        <FontAwesomeIcon icon={faCalendar} />
                        <input
                            className='input-no-style add cursor-not-allowed'
                            type='date'
                        />
                    </div>

                    <div className='flex-row' id='time__search-input' >
                        <FontAwesomeIcon icon={faClock} />
                        <select
                            id='select-time'
                            className='input-no-style cursor-not-allowed'
                            type='select'
                        >
                            {times.map(time => <option value={time}>{time}</option>)}
                        </select>
                    </div>
                </div>

                <div id='genre__search-input' className='input__backdrop'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-no-style cursor-not-allowed' placeholder='Artist or Genre' />
                </div>

                <button
                    type='button'
                    title='        ⚠️ feature under construction'
                    className='search-disabled search__button'
                    id='search__button'>Let's go</button>
            </div>
        </div>
    );
}

export default SearchArtistsContainer;
