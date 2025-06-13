import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // <-- voilà l'import manquant
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Evrard Nkono</h1>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Accueil</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>À propos</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMenu}>Compétences</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projets</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'fixed',
            top: 15,
            right: 20,
            zIndex: 2000,
            fontSize: '1.8rem',
            color: '#1e90ff',
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
