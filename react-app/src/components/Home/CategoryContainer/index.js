import { useEffect, useState } from 'react';

import ArtistCard from './ArtistCard';

import './CategoryContainer.css'

const CategoryContainer = ({ category, artists }) => {

    useEffect(() => { console.log('Category Container: ', artists) }, [])

    return (
        <div>
            <h2 className='category__title'>{category}</h2>
            <div id='category__outer-container'>
                <div id='category__container'>
                    {artists.map(artist => <div key={artist.id}><ArtistCard artist={artist} /></div>)}
                </div>
            </div>
        </div>
    );
}

export default CategoryContainer;
