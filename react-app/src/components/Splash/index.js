import { useEffect, useState } from 'react'
import image_1 from '../../static/splash/1.png';
import image_2 from '../../static/splash/2.png';
import image_3 from '../../static/splash/3.png';

import AwesomeSlider from 'react-awesome-slider';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


import './Splash.css';

const Splash = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const [image, setImage] = useState(image_3)
    const [n, setN] = useState(3)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setN((prev) => {
    //             if (prev + 1 === 4) return 1
    //             else return prev + 1
    //         })
    //     }, 7000)

    //     return () => clearInterval(interval);
    // }, [])

    return (
        <>
            <div id='splash__container'>
                <AutoplaySlider
                    play={true}
                    // cancelOnInteraction={false}
                    interval={5000}
                    bullets={false}
                    infinite={true}
                    buttons={false}

                >
                    <div id="splash__image" data-src={image_3} />
                    <div id="splash__image" data-src={image_1} />
                    <div id="splash__image" data-src={image_2} />
                </AutoplaySlider>
            </div>
            {/* <div id='splash__container'>
                {n === 3 &&
                    <img id='splash__image' src={image_3} alt='splash' />
                }
                {n === 1 &&
                    <img id='splash__image' src={image_1} alt='splash' />
                }
                {n === 2 &&
                    <img id='splash__image' src={image_2} alt='splash' />
                }

            </div> */}
        </>
    )
}

export default Splash;
