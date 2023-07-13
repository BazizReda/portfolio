import React from 'react';
import '../Header.css'; // Import du fichier CSS pour l'en-tête
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        
       {/*<Link className="navbar__link" to="/">Accueil</Link>*/} 
        <a href="/" className="navbar__link">Accueil</a>
        <Link className="navbar__link" to="/ProjectPage">Projets</Link>
        <Link className="navbar__link" to="/ContactPage">Contact</Link>
        <Link className="navbar__link" to="/TemoignageList">Temoignages</Link>

      </nav>
    </header>
  );
}

export default Header;
