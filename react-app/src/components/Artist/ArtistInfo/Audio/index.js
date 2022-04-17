import ReactAudioPlayer from 'react-audio-player';


const Audio = ({ artist }) => {
    return (
        <div id='audio__player'>
            {artist.audio_url_1 &&
                <ReactAudioPlayer
                    src={artist.audio_url_1}
                    controls
                />
            }
            {artist.audio_url_2 &&
                <ReactAudioPlayer
                    src={artist.audio_url_2}
                    controls
                />

            }
            {artist.audio_url_3 &&
                <ReactAudioPlayer
                    src={artist.audio_url_3}
                    controls
                />
            }
        </div>
    );
}

export default Audio;
