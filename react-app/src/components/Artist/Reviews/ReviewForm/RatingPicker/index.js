import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './RatingPicker.css'
import { useEffect, useRef } from 'react';

const RatingPicker = ({ rating, setRating }) => {

    const one = document.getElementById('one-star')
    const two = document.getElementById('two-stars')
    const three = document.getElementById('three-stars')
    const four = document.getElementById('four-stars')
    const five = document.getElementById('five-stars')

    const addRatingColor = (n) => {
        one.style.color = 'grey'
        two.style.color = 'grey'
        three.style.color = 'grey'
        four.style.color = 'grey'
        five.style.color = 'grey'

        if (n > 4) { five.style.color = 'rgb(227,55,0)'; }
        if (n > 3) { four.style.color = 'rgb(227,55,0)'; }
        if (n > 2) { three.style.color = 'rgb(227,55,0)'; }
        if (n > 1) { two.style.color = 'rgb(227,55,0)'; }
        if (n > 0) { one.style.color = 'rgb(227,55,0)'; }

        setRating(() => n)
    }

    return (
        <div>
            <FontAwesomeIcon
                style={{ color: "grey" }}
                onClick={() => { addRatingColor(1) }}
                onMouseOver={() => { one.style.opacity = '.5' }}
                onMouseLeave={() => { one.style.opacity = '1' }}
                id='one-star'
                icon={faStar}
            />

            <FontAwesomeIcon
                style={{ color: "grey" }}
                onClick={() => { addRatingColor(2) }}
                onMouseOver={() => { two.style.opacity = '.5' }}
                onMouseLeave={() => { two.style.opacity = '1' }}
                id='two-stars'
                icon={faStar}
            />

            <FontAwesomeIcon
                style={{ color: "grey" }}
                onClick={() => { addRatingColor(3) }}
                onMouseOver={() => { three.style.opacity = '.5' }}
                onMouseLeave={() => { three.style.opacity = '1' }}
                id='three-stars'
                icon={faStar}
            />

            <FontAwesomeIcon
                style={{ color: "grey" }}
                onClick={() => { addRatingColor(4) }}
                onMouseOver={() => { four.style.opacity = '.5' }}
                onMouseLeave={() => { four.style.opacity = '1' }}
                id='four-stars'
                icon={faStar}
            />

            <FontAwesomeIcon
                style={{ color: "grey" }}
                onClick={() => { addRatingColor(5) }}
                onMouseOver={() => { five.style.opacity = '.5' }}
                onMouseLeave={() => { five.style.opacity = '1' }}
                id='five-stars'
                icon={faStar}
            />

        </div>
    )
}

export default RatingPicker;
