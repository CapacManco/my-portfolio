import React from 'react';

// Home
// About
// Work
// Contact
export default function Nav({ activeThemeName }) {
  return (
    <nav className={`nav ${activeThemeName ? `nav--${activeThemeName}` : ''}`}>
      <div className="nav__links"></div>
      <ul
        className={`nav__menu ${
          activeThemeName ? `nav__menu--${activeThemeName}` : ''
        }`}
      >
        <li className="nav__menu__item">Accueil</li>
        <li className="nav__menu__item">Projets</li>
        <li className="nav__menu__item">À propos</li>
        <li className="nav__menu__item">Contact</li>
      </ul>
      <div className="nav__logo"></div>
    </nav>
  );
}
