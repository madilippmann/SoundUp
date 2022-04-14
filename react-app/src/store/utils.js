
export const normalizeArtists = (artistsArr) => {
    return artistsArr.reduce((obj, artist) => {
        obj[artist.id] = artist;
        obj[artist.id].reviews = artist.reviews
        obj[artist.id].genres = artist.genres

        // obj[artist.id].reviews = normalizeArr(artist.reviews)
        // if (Array.isArray(obj[artist.id].reviews)) {
        // obj[artist.id].reviews = [...artist.reviews]
        // } else {
        //     obj[artist.id].reviews = []
        // }

        // obj[artist.id].genres = normalizeArr(artist.genres)
        // if (Array.isArray(obj[artist.id].genres)) {
        // obj[artist.id].genres = [...artist.genres]
        // } else {
        //     obj[artist.id].genres = []
        // }
        // obj[artist.id].genres = artist.genres

        return obj
    }, {})
}



export const normalizeArr = (arr) => {
    return arr.map((obj) => {
        return { ...obj }
    })
}
