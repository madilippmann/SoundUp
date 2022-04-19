import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
    return (
        <div>
            <Link to={`/artists/${review.artist.id}`} className='booking__card' type='button'>
                <div id='artist__card'>
                    <div id='artist__image'>
                        <img src={review.artist.profile_image_url} alt={`${review.artist.name}'s profile picture`} />
                    </div>

                    <div id='artist___info-container'>
                        <h4 id='artist__card-title'>{review.artist.name}</h4>



                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ReviewCard;
