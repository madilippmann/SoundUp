import { useEffect, useState } from 'react';

import './CategoryContainer.css'

const CategoryContainer = ({ category, artists }) => {



    return (
        <div>
            <h2 className='category__title'>{category}</h2>
            <div id='category__outer-container'>
                <div id='category__container'>
                    {artists.map(artist => <div key={artist.id}>{artist.name}</div>)}
                </div>
            </div>
        </div>
    );
}

export default CategoryContainer;
