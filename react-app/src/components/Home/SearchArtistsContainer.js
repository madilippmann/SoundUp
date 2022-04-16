import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';

import { times } from '../../utils.js'
const SearchArtistsContainer = () => {



    return (
        <div id='artists-search-container'>
            <h1 id='search-title'>Find your musician for any occasion</h1>

            <div className='search__input'>
                <div id='date-time__search-input' className='input__backdrop'>
                    <FontAwesomeIcon icon={faCalendar} />
                    <input
                        className='input-no-style add'
                        type='date'
                    />
                    <FontAwesomeIcon icon={faClock} />
                    <select
                        className='input-no-style'
                        type='select'
                    >
                        {times.map(time => <option value={time}>{time}</option>)}
                    </select>
                </div>

                <div id='genre__search-input' className='input__backdrop'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='input-no-style' />
                </div>

                <button className='search-disabled search__button' type='button' id='search__button'>Let's go</button>
            </div>
        </div>
    );
}

export default SearchArtistsContainer;
