import { useEffect, useState } from 'react'
import image_1 from '../../static/splash/1.png';
import image_2 from '../../static/splash/2.png';
import image_3 from '../../static/splash/3.png';

import './Splash.css';

const Splash = () => {
    const [image, setImage] = useState(image_3)
    const [n, setN] = useState(3)

    useEffect(() => {
        const interval = setInterval(() => {
            setN((prev) => {
                if (prev + 1 === 4) return 1
                else return prev + 1
            })
        }, 7000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div id='splash__container'>
            {/* <div id='carousel'> */}
            {n === 3 &&
                <img id='splash__image' src={image_3} alt='splash' />
            }
            {n === 1 &&
                <img id='splash__image' src={image_1} alt='splash' />
            }
            {n === 2 &&
                <img id='splash__image' src={image_2} alt='splash' />
            }

            {/* </div> */}
        </div>
    )
}

export default Splash;
