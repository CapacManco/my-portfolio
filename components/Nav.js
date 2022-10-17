import React from 'react';
import Image from 'next/image';

import { AiFillMail as MailIcon } from 'react-icons/ai';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { BsYoutube as YoutubeIcon } from 'react-icons/bs';

import logo from '../public/img/logo.png';

// Home
// About
// Work
// Contact
export default function Nav({ activeThemeName, activeSection }) {
  return (
    <nav className={`nav ${activeThemeName ? `nav--${activeThemeName}` : ''}`}>
      <div className="nav__logo">
        {/* <Image src={logo} height="600" width="600" /> */}
      </div>
      <ul
        className={`nav__menu ${
          activeThemeName ? `nav__menu--${activeThemeName}` : ''
        }`}
      >
        <a href="#home" className="nav__menu__link">
          <li
            className={`nav__menu__item ${
              activeSection === 'home'
                ? `active active--${activeThemeName}`
                : ''
            }`}
          >
            Accueil
          </li>
        </a>
        <a href="#work" className="nav__menu__link">
          <li
            className={`nav__menu__item ${
              activeSection === 'work'
                ? `active active--${activeThemeName}`
                : ''
            }`}
          >
            Projets
          </li>
        </a>
        <a href="#about" className="nav__menu__link">
          <li
            className={`nav__menu__item ${
              activeSection === 'about'
                ? `active active--${activeThemeName}`
                : ''
            }`}
          >
            À propos
          </li>
        </a>
        <a href="#contact" className="nav__menu__link">
          <li
            className={`nav__menu__item ${
              activeSection === 'contact'
                ? `active active--${activeThemeName}`
                : ''
            }`}
          >
            Contact
          </li>
        </a>
      </ul>
      <div className="nav__links">
        <a href="mailto:garcia.gvj@gmail.com">
          <MailIcon className="nav__link" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-garcia-3081b9246/">
          <LinkedinIcon className="nav__link" />
        </a>
        <a href="https://www.youtube.com/channel/UC09fH0GvtBagm7oGY5wilzA">
          <YoutubeIcon className="nav__link" />
        </a>
      </div>
    </nav>
  );
}
