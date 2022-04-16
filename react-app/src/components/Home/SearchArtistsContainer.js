import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';


import { times } from '../../utils.js'
const SearchArtistsContainer = () => {

    const onChange = (date) => {
        console.log(date.toString());
    };

    return (
        <div id='artists-search-container'>
            <h1 id='search-title'>Find your musician for any occasion</h1>

            <div className='search__input'>
                <div id='date-time__search-input' className='input__backdrop'>
                    <div className='flex-row' id='date__search-input' >
                        <FontAwesomeIcon icon={faCalendar} />
                        <input
                            className='input-no-style add'
                            type='date'
                        />
                    </div>

                    <div className='flex-row' id='time__search-input' >
                        <FontAwesomeIcon icon={faClock} />
                        <select
                            className='input-no-style'
                            type='select'
                        >
                            {times.map(time => <option value={time}>{time}</option>)}
                        </select>
                    </div>
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
