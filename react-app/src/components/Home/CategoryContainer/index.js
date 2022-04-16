import { useEffect, useState } from 'react';

import './CategoryContainer.css'

const CategoryContainer = ({ category, artists }) => {



    return (
        <div>
            <h1>{category}</h1>
            {artists.map(artist => <div key={artist.id}>{artist.name}</div>)}
        </div>
    );
}

export default CategoryContainer;
