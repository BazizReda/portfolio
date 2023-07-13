import React from 'react';
import image1 from './image1.png'
import cv from './CV_BAZIZ.pdf';

import Homecss from '../Home.css'
function HomePage() {
  return (
    <div className='home' >

      
      <h1 className='titre'>Hi, I'm reda Welcom to my PORTFOLIO. Enjoy! </h1>


      <p className='para'>Passionné par la technologie et doté d'une double compétence en programmation informatique et télécommunication, je suis à
la recherche d'opportunités stimulantes pour mettre en application mes connaissances. Ma curiosité insatiable me pousse à
embrasser de nouveaux défis et à apprendre rapidement, transformant la méconnaissance d'un sujet en une opportunité
d'acquérir de nouvelles compétences. Je suis déterminé à apporter une valeur ajoutée en combinant mes compétences
techniques avec une approche ouverte et adaptable.
</p>
      <img className='image1' src={image1} alt="moi" />
      
      <a href={cv} download>
        <button className='cv-btn'>Télécharger CV</button>
      </a>


    </div>
  );
}

export default HomePage;
