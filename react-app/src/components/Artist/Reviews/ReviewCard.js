import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../../store/artists'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import ReviewForm from './ReviewForm';

const ReviewCard = ({ review }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [editReview, setEditReview] = useState(false)

    const deleteReview = async () => {
        await dispatch(artistsActions.removeReview(review.id))
    }

    return (
        <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> */}
            {sessionUser.id === review.user.id &&
                <div>
                    <button type='button' onClick={() => setEditReview(true)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button type='button' onClick={deleteReview}>
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
                <ReviewForm review={review} type='edit' setEditReview={setEditReview} />
            }

        </div>
    )
}

export default ReviewCard;
