import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State qui dit si le menu est ouvert (true) ou fermé (false)
  const [menuOpen, setMenuOpen] = useState(false);

  // Change l’état d’ouverture du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Ferme le menu (utile quand on clique sur un lien)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo / Titre */}
        <h1 className="logo">Evrard Nkono</h1>

        {/* Le menu, avec la classe 'active' si ouvert sur mobile */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Accueil</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>À propos</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMenu}>Compétences</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projets</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        {/* Le bouton hamburger visible uniquement en mobile */}
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
