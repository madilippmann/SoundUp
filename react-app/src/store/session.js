// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const LOAD_USER = 'session/LOAD_USER'

const ADD_BOOKING = 'bookings/ADD_BOOKING'
const DELETE_BOOKING = 'bookings/DELETE_BOOKING'
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING'

const ADD_REVIEW = 'session/ADD_REVIEW'
const DELETE_REVIEW = 'session/DELETE_REVIEW'
const UPDATE_REVIEW = 'session/UPDATE_REVIEW'

/*******************/

const setUser = (user) => ({
	type: SET_USER,
	user
});

export const loadUser = () => ({
	type: LOAD_USER
})


const removeUser = () => ({
	type: REMOVE_USER,
})

const addBooking = (booking) => ({
	type: ADD_BOOKING,
	booking
})

const updateBooking = (booking) => ({
	type: UPDATE_BOOKING,
	booking
})

const deleteBooking = (booking) => ({
	type: DELETE_BOOKING,
	booking
})


export const sessionAddReview = (review) => ({
	type: ADD_REVIEW,
	review
})

export const sessionUpdateReview = (review) => ({
	type: UPDATE_REVIEW,
	review
})

export const sessionDeleteReview = (review) => ({
	type: DELETE_REVIEW,
	review
})



/*** THUNKS ****************/
export const authenticate = () => async (dispatch) => {
	const res = await fetch('/api/auth/', {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (res.ok) {
		const data = await res.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
}

export const login = (email, password) => async (dispatch) => {
	const res = await fetch('/api/auth/login/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	});

	if (res.ok) {
		const data = await res.json();
		dispatch(setUser(data))
		return null;
	} else if (res.status < 500) {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ['An error occurred. Please try again.']
	}

}

export const logout = () => async (dispatch) => {
	const res = await fetch('/api/auth/logout/', {
		headers: {
			'Content-Type': 'application/json',
		}
	});

	if (res.ok) {
		dispatch(removeUser());
	}
};




export const signUp = (name, email, password) => async (dispatch) => {
	const res = await fetch('/api/auth/signup/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			email,
			password,
		}),
	});

	if (res.ok) {
		const data = await res.json();
		dispatch(setUser(data))
		return null;
	} else if (res.status < 500) {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}



export const createBooking = (booking) => async (dispatch) => {
	const res = await fetch('/api/bookings/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(booking)
	});

	if (res.ok) {
		const newBooking = await res.json();
		dispatch(addBooking(newBooking));
		return newBooking
	} else {
		const errors = await res.json()
		return errors
	}
};

export const editBooking = (booking) => async (dispatch) => {
	const res = await fetch(`/api/bookings/${booking.id}/`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(booking)
	});

	if (res.ok) {
		const newBooking = await res.json();
		dispatch(updateBooking(newBooking));
		return newBooking
	} else {
		const errors = await res.json()
		return errors
	}
};

export const removeBooking = (booking) => async (dispatch) => {
	const res = await fetch(`/api/bookings/${booking.id}/`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		}
	});

	if (res.ok) {
		const deletedBooking = await res.json();
		dispatch(deleteBooking(deletedBooking));
		return deletedBooking
	}
};


/*** REDUCER ****************/

const initialState = { user: null };


export default function reducer(state = initialState, action) {

	switch (action.type) {
		case SET_USER: {
			const sessionUser = action.user
			sessionUser.bookings = [...action.user.bookings]
			sessionUser.reviews = [...action.user.reviews]


			return { user: sessionUser }
		}


		case REMOVE_USER: {
			return { user: null }
		}

		// BOOKINGS
		case ADD_BOOKING: {
			// state.user.bookings.forEach(booking => {
			// 	if (booking.user.id === action.booking.user.id) {
			// 		booking.artist = action.booking.artist
			// 	}
			// })

			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings, action.booking]
				}
			}
		}

		case UPDATE_BOOKING: {
			// state.user.bookings[bookingIndex] = action.booking
			const bookingIndex = state.user.bookings.findIndex((booking) => booking.id === action.booking.id)


			return {
				...state,
				user: {
					...state.user,
					bookings: state.user.bookings.map((booking, i) => {
						if (i === bookingIndex) {
							return { ...action.booking }
						} else {
							return { ...booking }
						}
					})
				}
			}
		}

		case DELETE_BOOKING: {
			const bookingIndex = state.user.bookings.findIndex((booking) => booking.id === action.booking)
			state.user.bookings.splice(bookingIndex, 1)

			return {
				...state,
				user: {
					...state.user,
					reviews: [...state.user.reviews],
					bookings: [...state.user.bookings]
				}
			}
		}


		// REVIEWS
		case ADD_REVIEW: {
			// state.user.reviews.forEach(review => {
			// 	if (review.user.id === action.review.user.id) {
			// 		review.user = action.review.user
			// 	}
			// })

			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings],
					reviews: [action.review, ...state.user.reviews]
				}
			}
		}

		case UPDATE_REVIEW: {
			const reviewIndex = state.user.reviews.findIndex((review) => review.id === action.review.id)
			state.user.reviews[reviewIndex] = action.review

			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings],
					reviews: [...state.user.reviews]
				}
			}
		}

		case DELETE_REVIEW: {
			const reviewIndex = state.user.reviews.findIndex((review) => review.id === action.review.id)
			state.user.reviews.splice(reviewIndex, 1)

			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings],
					reviews: [...state.user.reviews]
				}
			}
		}

		default: {
			return state;
		}
	}
}
