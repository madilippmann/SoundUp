import { useState } from 'react';

import { filterArtists } from '../../../utils'
import './CategoryContainer.css'

const CategoryContainer = ({ category, genre, artists }) => {

    const [categoryArtists, setCategoryArtists] = useState(filterArtists(genre, artists))

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
}

export default CategoryContainer;
