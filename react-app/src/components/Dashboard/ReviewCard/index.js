import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../../utils";
const ReviewCard = ({ review }) => {
    return (
        <div>
            <Link to={`/artists/${review.artist.id}`} className='booking__card' type='button'>
                <div id='artist__card' >
                    <div id='artist__image' >
                        <img src={review.artist.profile_image_url} alt={`${review.artist.name}'s profile picture`} />
                    </div>

                    <div id='artist___info-container' className='review-card__info'>
                        <h4 id='artist__card-title'>{review.artist.name}</h4>
                        <p>{formatDate(review.created_at)} {formatTime(new Date(review.created_at))}</p>
                        <p id='review-preview' className='line-clamp'>{review.comment}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ReviewCard;
