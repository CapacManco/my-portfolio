import React from "react";

// Home
// About
// Work
// Contact
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links"></div>
      <ul className="nav__menu">
        <li className="nav__menu__item">Home</li>
        <li className="nav__menu__item">Work</li>
        <li className="nav__menu__item">About</li>
        <li className="nav__menu__item">Contact</li>
      </ul>
      <div className="nav__logo"></div>
    </nav>
  );
}
