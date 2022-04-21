import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';


import ArtistCard from './ArtistCard';

import './CategoryContainer.css'

const CategoryContainer = ({ category, artists, outerContainerRef }) => {
    const container = useRef()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false)

    useEffect(() => {
        setScrollEnd(() => outerContainerRef.current.scrollWidth + 1 >= container.current.scrollWidth)
    }, [])

    const scroll = (shift) => {
        const delta = shift > 0 ? 25 : -25;
        let currShift = shift;

        const interval = setInterval(() => {
            container.current.scrollLeft += delta
            currShift -= delta;
            if (currShift === 0) {
                clearInterval(interval)
            }
        }, 15)
    }

    const handleScroll = () => {
        setScrollPosition(() => container.current.scrollLeft);

        if (container.current.scrollWidth - container.current.scrollLeft <= container.current.offsetWidth) {
            setScrollEnd(() => true);
        } else {
            setScrollEnd(() => false);
        }
    }


    return (
        <div>
            <h2 className='category__title'>{category}</h2>
            <div id='category__outer-container'>
                {scrollPosition !== 0 &&
                    // <div  id='scroll-left__button-container'>

                    <button
                        type='button'
                        onClick={() => scroll(-250)}
                        className='scroll__button'
                        id='scroll-left__button'
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>

                    // </div>
                }

                <div ref={container} onScroll={handleScroll} className='category__container' id={category}>
                    {artists.map(artist => <div key={artist.id}><ArtistCard artist={artist} /></div>)}
                </div>

                {!scrollEnd &&
                    // <div className='scroll__button' id='scroll-right__button-container'>
                    <button
                        type='button'
                        onClick={() => scroll(250)}
                        className='scroll__button'
                        id='scroll-right__button'
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    // </div>
                }
            </div>
        </div>
    );
}

export default CategoryContainer;
