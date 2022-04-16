import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArtistCard.css'

const ArtistCard = ({ artist }) => {
    useEffect(() => { console.log('Artist Card: ', artist) }, [])

    return (
        <Link to={`/artists/${artist.id}`}>
            <div id='artist__card'>
                <div id='artist__image'>
                    <img src={artist.profile_image_url} alt={`${artist.name}'s profile picture`} />
                </div>

                Artist Card
            </div>
        </Link>
    );
}

export default ArtistCard;
