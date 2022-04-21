import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './RatingPicker.css'
import { useEffect, useState } from 'react';

const EditRatingPicker = ({ rating, setRating }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const one = document.getElementById('one-star-edit')
    const two = document.getElementById('two-stars-edit')
    const three = document.getElementById('three-stars-edit')
    const four = document.getElementById('four-stars-edit')
    const five = document.getElementById('five-stars-edit')


    const addRatingColor = (n) => {

        console.log('RATIBNG OSEB:KSJDBG', n);
        (n > 4) ? five.style.color = 'rgb(227,55,0)' : five.style.color = 'grey';
        (n > 3) ? four.style.color = 'rgb(227,55,0)' : four.style.color = 'grey';
        (n > 2) ? three.style.color = 'rgb(227,55,0)' : three.style.color = 'grey';
        (n > 1) ? two.style.color = 'rgb(227,55,0)' : two.style.color = 'grey';
        (n > 0) ? one.style.color = 'rgb(227,55,0)' : one.style.color = 'grey';
        if (n === 0) {
            one.style.color = 'grey';
            two.style.color = 'grey';
            three.style.color = 'grey';
            four.style.color = 'grey';
            five.style.color = 'grey';
        }

        setRating(() => n)

    }


    useEffect(() => {

        if (one && !isLoaded) {
            addRatingColor(rating)
            setIsLoaded(true)
        }

    }, [one, rating])


    return (
        <div>
            <FontAwesomeIcon
                onClick={() => { addRatingColor(1) }}
                onMouseOver={() => { one.style.opacity = '.5' }}
                onMouseLeave={() => { one.style.opacity = '1' }}
                id='one-star-edit'
                icon={faStar}
            />

            <FontAwesomeIcon
                onClick={() => { addRatingColor(2) }}
                onMouseOver={() => { two.style.opacity = '.5' }}
                onMouseLeave={() => { two.style.opacity = '1' }}
                id='two-stars-edit'
                icon={faStar}
            />

            <FontAwesomeIcon
                onClick={() => { addRatingColor(3) }}
                onMouseOver={() => { three.style.opacity = '.5' }}
                onMouseLeave={() => { three.style.opacity = '1' }}
                id='three-stars-edit'
                icon={faStar}
            />

            <FontAwesomeIcon
                onClick={() => { addRatingColor(4) }}
                onMouseOver={() => { four.style.opacity = '.5' }}
                onMouseLeave={() => { four.style.opacity = '1' }}
                id='four-stars-edit'
                icon={faStar}
            />

            <FontAwesomeIcon
                onClick={() => { addRatingColor(5) }}
                onMouseOver={() => { five.style.opacity = '.5' }}
                onMouseLeave={() => { five.style.opacity = '1' }}
                id='five-stars-edit'
                icon={faStar}
            />

        </div>
    )
}

export default EditRatingPicker;
