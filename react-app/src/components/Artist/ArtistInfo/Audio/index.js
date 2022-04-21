import ReactAudioPlayer from 'react-audio-player';

import './Audio.css'

const Audio = ({ artist }) => {
    return (
        <div id='audio__player'>
            {artist.audio_url_1 &&
                <div className='audio__container'>
                    <h5 className='audio__title__first'>{artist.audio_track_name_1}</h5>
                    <ReactAudioPlayer
                        src={artist.audio_url_1}
                        controls

                    />
                </div>
            }

            {artist.audio_url_2 &&
                <div className='audio__container'>
                    <h5 className='audio__title'>{artist.audio_track_name_2}</h5>
                    <ReactAudioPlayer
                        src={artist.audio_url_2}
                        controls
                    />
                </div>

            }

            {artist.audio_url_3 &&

                <div className='audio__container'>
                    <h5 className='audio__title'>{artist.audio_track_name_3}</h5>
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
