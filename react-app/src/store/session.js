// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const ADD_BOOKING = 'bookings/ADD_BOOKING'
const DELETE_BOOKING = 'bookings/DELETE_BOOKING'
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING'

/*******************/

const setUser = (user) => ({
	type: SET_USER,
	user
});

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
			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings, action.booking]
				}
			}
		}

		case UPDATE_BOOKING: {
			const bookingIndex = state.user.bookings.findIndex((booking) => booking.id === action.booking.id)
			state.user.bookings[bookingIndex] = action.booking

			return {
				...state,
				user: {
					...state.user,
					bookings: [...state.user.bookings]
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
					bookings: [...state.user.bookings]
				}
			}
		}

		default: {
			return state;
		}
	}
}
