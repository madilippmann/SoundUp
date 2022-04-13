// ACTION VARIABLES ***************************************
const ADD_USER = "users/ADD_USER";

const ADD_BOOKING = "users/ADD_BOOKING";
// const LOAD_BOOKINGS = "users/LOAD_BOOKINGS";
const DELETE_BOOKING = "users/DELETE_BOOKING";

const ADD_FAVORITE = "users/ADD_FAVORITE";
// const LOAD_FAVORITES = "users/LOAD_FAVORITES";
const REMOVE_FAVORITE = "users/REMOVE_FAVORITE";


// ACTION CREATORS ****************************************
const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    };
};

const addBooking = (sessionUser) => {
    return {
        type: ADD_BOOKING,
        sessionUser
    }
}

// const loadBookings = (sessionUser)

const deleteBooking = (sessionId) => {
    return {
        type: DELETE_BOOKING,
        sessionId
    }
}

// THUNK ACTION CREATORS **********************************
export const loadUser = () => async (dispatch) => {
    const res = await fetch(`/api/user/`);

    if (res.ok) {
        const user = await res.json();
        dispatch(addUser(user));
        return user;
    }
};


// REDUCER ************************************************
const userReducer = (state = {}, action) => {

    switch (action.type) {
        case ADD_USER: {

            // newState = { ...state };
            // newState[action.user.id] = action.user;
            return action.user

            // return newState;
        }

        default: {
            return state;
        }
    }
};

export default userReducer;
