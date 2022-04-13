
// ACTION VARIABLES ***************************************
const LOAD_ARTISTS = 'artists/LOAD_ARTISTS'


// ACTION CREATORS ****************************************


const loadArtists = (artists) => {
    return {
        type: LOAD_ARTISTS,
        artists
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



// REDUCER ************************************************
const artistsReducer = (state = {}, action) => {

    switch (action.type) {
        case LOAD_ARTISTS: {
            return action.artists
        };


        default: {
            return state;
        }
    }
};

export default artistsReducer;
