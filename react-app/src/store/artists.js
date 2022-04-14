
// ACTION VARIABLES ***************************************
const LOAD_ARTISTS = 'artists/LOAD_ARTISTS'

const ADD_REVIEW = 'artists/ADD_REVIEW'
const DELETE_REVIEW = 'artists/DELETE_REVIEW'
const UPDATE_REVIEW = 'artists/UPDATE_REVIEW'

// ACTION CREATORS ****************************************


const loadArtists = (artists) => {
    return {
        type: LOAD_ARTISTS,
        artists
    }
}

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const updateReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

// THUNK ACTION CREATORS **********************************
export const fetchArtists = () => async (dispatch) => {
    const res = await fetch(`/api/artists/`);

    if (res.ok) {
        const artists = await res.json();
        dispatch(loadArtists(artists));
        return artists;
    }
};


export const createReview = (review) => async (dispatch) => {
    const res = await fetch(`/api/reviews/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(addReview(review));
        return review;
    }
};

export const editReview = (review) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${review.id}/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(updateReview(review));
        return review;
    }
};

export const removeReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(deleteReview(review));
        return review;
    }
};

// REDUCER ************************************************
const artistsReducer = (state = {}, action) => {
    let newState = {}

    switch (action.type) {
        case LOAD_ARTISTS: {
            return action.artists
        };

        case ADD_REVIEW: {
            return {
                ...state,
                [action.review.arist_id]: {
                    ...state[action.review.artist_id],
                    genres: [...state[action.review.artist_id].genres],
                    reviews: [...state[action.review.artists_id].reviews, action.review],
                }
            }
        }

        case UPDATE_REVIEW: {
            const reviewIndex = state[action.review.artist_id].reviews.findIndex((review) => review.id === action.review.id)
            state[action.review.artist_id].reviews[reviewIndex] = action.review

            newState = {
                ...state,
                [action.review.arist_id]: {
                    ...state[action.review.artist_id],
                    genres: [...state[action.review.artist_id].genres],
                    reviews: [...state[action.review.artists_id].reviews]
                }
            }
        }

        case DELETE_REVIEW: {
            const reviewIndex = state[action.review.artist_id].reviews.findIndex((review) => review.id === action.review.id)
            state[action.review.artist_id].reviews.splice(reviewIndex, 1)

            newState = {
                ...state,
                [action.review.arist_id]: {
                    ...state[action.review.artist_id],
                    genres: [...state[action.review.artist_id].genres],
                    reviews: [...state[action.review.artists_id].reviews]
                }
            }
        }

        default: {
            return state;
        }
    }
};

export default artistsReducer;
