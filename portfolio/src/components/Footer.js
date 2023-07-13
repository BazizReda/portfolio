import React from 'react';
import footercss from '../Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>
      <p>
      <FontAwesomeIcon className='lien' icon={faGithub} /> {' '}
        <a href="https://github.com/BazizReda/">GitHub</a> |{' '}
        <FontAwesomeIcon className='lien' icon={faLinkedin} /> {' '}
        <a href="https://www.linkedin.com/in/redha-baziz-a38450159/">LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
