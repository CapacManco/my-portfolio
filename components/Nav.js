import React from 'react';
import Image from 'next/image';

import { AiFillMail as MailIcon } from 'react-icons/ai';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { BsYoutube as YoutubeIcon } from 'react-icons/bs';

export default function Nav({
  activeThemeName,
  activeSection,
  mediaQueryAnimation,
  renderMediaQueryStyle,
  isMenuVisible,
  toggleMobileNav,
}) {
  const renderMediaQueryUlStyle = (section) => {
    if (!mediaQueryAnimation) {
      return `nav__menu__item ${activeSection === section ? `active` : ''}`;
    }
    return `nav__menu__item ${activeSection === section ? `active` : ''} ${
      activeThemeName && activeSection === section
        ? `active--${activeThemeName}`
        : ''
    }`;
  };

  return (
    <menu
      className={`${renderMediaQueryStyle('nav')} ${
        isMenuVisible ? 'nav--fadein' : 'nav--fadeout'
      }`}
    >
      <div className="nav__logo"></div>
      <ul className={renderMediaQueryStyle('nav__menu')}>
        <a
          onClick={() => toggleMobileNav()}
          href="#home"
          className="nav__menu__link"
        >
          <li className={renderMediaQueryUlStyle('home')}>Accueil</li>
        </a>
        <a
          onClick={() => toggleMobileNav()}
          href="#work"
          className="nav__menu__link"
        >
          <li className={renderMediaQueryUlStyle('work')}>Projets</li>
        </a>
        <a
          onClick={() => toggleMobileNav()}
          href="#about"
          className="nav__menu__link"
        >
          <li className={renderMediaQueryUlStyle('about')}>À propos</li>
        </a>
        <a
          onClick={() => toggleMobileNav()}
          href="#contact"
          className="nav__menu__link"
        >
          <li className={renderMediaQueryUlStyle('contact')}>Contact</li>
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
    </menu>
  );
}
