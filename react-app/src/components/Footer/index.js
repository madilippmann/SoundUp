
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
    return (
        <div id='footer__container'>
            <div>
                <h4>TECHNOLOGIES</h4>
                {/* <div id='tech'>
                    <div className='tech__list'>
                        <p>Python</p>
                        <p>Flask</p>
                    </div>
                    <div className='tech__list'>
                        <p>React</p>
                        <p>Redux</p>
                    </div>
                    <div className='tech__list'>
                        <p>PostgreSQL</p>
                        <p>SQLAlchemy</p>
                    </div>
                    <div className='tech__list'>
                        <p>CSS3</p>
                        <p>HTML5</p>
                    </div>
                    <div className='tech__list'>
                        <p>Heroku</p>
                        <p>Docker</p>
                    </div>
                </div> */}

                <div id='tech'>
                    <p>Python</p>
                    <p>Flask</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>PostgreSQL</p>
                    <p>SQLAlchemy</p>
                    <p>CSS3</p>
                    <p>HTML5</p>
                    <p>Heroku</p>
                    <p>Docker</p>
                </div>
            </div>

            <div id='social'>
                <h4>FOLLOW THIS DEV ON</h4>
                <div id='social__icon__container'>
                    <a href='https://github.com/madilippmann'>
                        <FontAwesomeIcon className='social__icon' icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/madilippmann/'>
                        <FontAwesomeIcon className='social__icon' icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
