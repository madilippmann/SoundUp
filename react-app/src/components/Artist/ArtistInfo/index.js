import Audio from "./Audio";

const ArtistInfo = ({ artist }) => {
    return (
        <div>

            <h1>{artist.name}</h1>

            <div id='artist-image-and-audio__container'>
                <div id='artist-page__image-container'>
                    <img id='artist-page__image' src={artist.profile_image_url} alt={`${artist.name}'s profile picture`} />
                </div>
                <div id='audio__container'>
                    <Audio artist={artist} />
                </div>
            </div>

            <p id='artist__bio'>
                <h3>Bio</h3>
                {artist.bio}
            </p>

        </div>
    );
}

export default ArtistInfo;
