import { useEffect, useState, useRef } from 'react';

import ArtistCard from './ArtistCard';

import './CategoryContainer.css'

const CategoryContainer = ({ category, artists, outerContainerRef }) => {
    const container = useRef()
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false)

    useEffect(() => {
        setScrollEnd(() => outerContainerRef.current.scrollWidth + 1 >= container.current.scrollWidth)
    }, [])

    useEffect(() => {
        console.log('OUTER REF: ', outerContainerRef.current.scrollWidth)
        console.log('INNER REF: ', container.current.scrollWidth)

        console.log(outerContainerRef.current.scrollWidth + 1 >= container.current.scrollWidth)
    }, [scrollPosition])

    const scroll = (shift) => {
        console.log('entered', shift)
        container.current.scrollLeft += shift
        console.log('BEFORE: ', container.current.scrollLeft)
    }
    const handleScroll = () => {
        setScrollPosition(() => container.current.scrollLeft);

        if (container.current.scrollWidth - container.current.scrollLeft <= container.current.offsetWidth) {
            setScrollEnd(() => true);
        } else {
            setScrollEnd(() => false);
        }

        console.log('Scroll position: ', scrollPosition)

    }


    return (
        <div>
            <h2 className='category__title'>{category}</h2>
            <div id='category__outer-container'>
                {scrollPosition !== 0 &&
                    <button
                        type='button'
                        onClick={() => scroll(-250)}
                        id='scroll-left__button'
                    >
                        left
                    </button>
                }
                <div ref={container} onScroll={handleScroll} className='category__container' id={category}>
                    {artists.map(artist => <div key={artist.id}><ArtistCard artist={artist} /></div>)}
                </div>
                {!scrollEnd &&
                    <button
                        type='button'
                        onClick={() => scroll(250)}
                        id='scroll-right__button'
                    >
                        right
                    </button>
                }
            </div>
        </div>
    );
}

export default CategoryContainer;
