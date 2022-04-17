import ReactAudioPlayer from 'react-audio-player';


const Audio = ({ artist }) => {
    return (
        <div id='audio__player'>
            {artist.audio_url_1 &&
                <div className='audio__container'>
                    <h5 className='audio__title__first'>Audio Title #1</h5>
                    <ReactAudioPlayer
                        src={artist.audio_url_1}
                        controls

                    />
                </div>
            }

            {artist.audio_url_2 &&
                <div className='audio__container'>
                    <h5 className='audio__title'>Audio Title #2</h5>
                    <ReactAudioPlayer
                        src={artist.audio_url_2}
                        controls
                    />
                </div>

            }

            {artist.audio_url_3 &&

                <div className='audio__container'>
                    <h5 className='audio__title'>Audio Title #1</h5>
                    <ReactAudioPlayer
                        src={artist.audio_url_3}
                        controls
                    />
                </div>
            }
        </div>
    );
}

export default Audio;
