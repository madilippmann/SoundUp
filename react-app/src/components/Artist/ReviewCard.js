import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import ReviewForm from '../ReviewForm';

const ReviewCard = ({ review }) => {
    const sessionUser = useSelector(state => state.session.user)
    const [editReview, setEditReview] = useState(false)



    return (
        <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> */}
            {sessionUser.id === review.user.id &&
                <div>
                    <button type='button' onClick={() => setEditReview((prev) => !prev)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            }

            {!editReview ?
                <div key={review.id} >
                    <p>{review.user.name}</p>
                    <p>{review.rating}</p>
                    <p>{review.comment}</p>
                </div>
                :
                <ReviewForm review={review} />
            }

        </div>
    )
}

export default ReviewCard;
