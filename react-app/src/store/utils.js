
export const normalizeArtists = (artistsArr) => {
    return artistsArr.reduce((obj, artist) => {
        obj[artist.id] = artist;

        // obj[artist.id].reviews = artist.reviews

        // obj[artist.id].genres = artist.genres

        return obj
    }, {})
}
