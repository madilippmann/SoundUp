import { useEffect, useState } from 'react';

import './CategoryContainer.css'

const CategoryContainer = ({ category, genre, artists }) => {


    useEffect(() => {
        console.log('Genre: ', genre)
        console.log('Arists: ', artists)

    }, [])

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
}

export default CategoryContainer;
