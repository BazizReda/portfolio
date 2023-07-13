import React from 'react';
import './Project.css';
import saaqImage from './saaq.png';
import nextnapImage from './nextnap.png';

function ProjectPage() {
  return (
    <div className='home'>
      <h1 className='txt2'>Mes Projets</h1>
      <div className="project-container">
        <a href="/projet1">
          <div className="project-image-1" style={{ backgroundImage: `url(${saaqImage})` }}></div>
          <h2 className='txt2'>Projet 1</h2> 
        </a>
        <a href="/project2">
          <div className="project-image-2" style={{ backgroundImage: `url(${nextnapImage})` }}></div>
          <h2 className='txt2'>Projet 2</h2> 
        </a>
      </div>
    </div>
  );
}

export default ProjectPage;
