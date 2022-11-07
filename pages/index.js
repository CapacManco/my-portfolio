import Head from 'next/head';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import MenuToggler from '../components/MenuToggler';
import Projets from '../components/Projets';

import Bubbles from '../components/Bubbles';
import photoMoi from '../public/img/me.jpg';

export default function Home() {
  const [projectsHovered, setProjectsHovered] = useState({
    codingtutors: false,
    mathieuhue: false,
    collectifregina: false,
    rethacolt: false,
    leproductif: false,
    gabrielg: false,
    photomoi: false,
  });

  const [activeThemeName, setActiveThemeName] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [mediaQueryAnimation, setMediaQueryAnimation] = useState(null);
  const [mediaQueryNextImg, setMediaQueryNextImg] = useState(null);
  const [mediaQueryMobileNav, setMediaQueryMobileNav] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(null);

  useEffect(() => {
    const setMediaQueries = () => {
      if (window.innerWidth <= 1200) {
        setIsMenuVisible(false);
        setMediaQueryMobileNav(true);
      } else {
        setMediaQueryMobileNav(false);
      }

      window.innerWidth >= 1200
        ? setIsMenuVisible(true)
        : setIsMenuVisible(false);

      window.innerWidth >= 768
        ? setMediaQueryAnimation(true)
        : setMediaQueryAnimation(false);

      window.innerWidth <= 576
        ? setMediaQueryNextImg(true)
        : setMediaQueryNextImg(false);
    };

    window.addEventListener(
      'resize',
      () => {
        setMediaQueries();
      },
      true
    );
    setMediaQueries();
  }, []);

  useEffect(() => {
    const checkClassNameHovered = () => {
      for (let [key, value] of Object.entries(projectsHovered)) {
        if (value) {
          return key;
        }
      }
    };
    setActiveThemeName(checkClassNameHovered());
  }, [projectsHovered]);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const observable = {
        home: document.querySelector('.home'),
        about: document.querySelector('.about'),
        work: document.querySelector('.work'),
        contact: document.querySelector('.contact'),
      };

      const pos = {
        home: observable.home.getBoundingClientRect(),
        about: observable.about.getBoundingClientRect(),
        work: observable.work.getBoundingClientRect(),
        contact: observable.contact.getBoundingClientRect(),
      };

      if (pos.home.top < window.innerHeight && pos.home.bottom >= 400) {
        setActiveSection('home');
      } else if (
        pos.about.bottom < window.innerHeight &&
        pos.about.bottom >= 400
      ) {
        setActiveSection('about');
      } else if (pos.work.top < window.innerHeight && pos.work.bottom >= 400) {
        setActiveSection('work');
      } else if (
        pos.contact.top < window.innerHeight &&
        pos.contact.bottom >= 400
      ) {
        setActiveSection('contact');
      }
    });

    return () => {
      window.removeEventListener('scroll', () => console.log(''));
    };
  }, []);

  const setImageHovered = (boolean) => {
    setProjectsHovered({ ...projectsHovered, ['photomoi']: boolean });
  };

  const renderMediaQueryStyle = (className) => {
    if (!mediaQueryAnimation) return className;
    return `${className} ${
      activeThemeName ? `${className}--${activeThemeName}` : ''
    }`;
  };

  const toggleMobileNav = () => {
    if (!mediaQueryMobileNav) return;
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <Head>
        <title>Gabriel Garcia | Développeur Front End</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <Nav
        activeThemeName={activeThemeName}
        activeSection={activeSection}
        mediaQueryAnimation={mediaQueryAnimation}
        renderMediaQueryStyle={renderMediaQueryStyle}
        isMenuVisible={isMenuVisible}
        toggleMobileNav={toggleMobileNav}
      />
      <MenuToggler
        toggleMobileNav={toggleMobileNav}
        isMenuVisible={isMenuVisible}
      />
      <main className="layout">
        <div className={renderMediaQueryStyle('home')} id="home">
          <Bubbles
            activeThemeName={activeThemeName}
            mediaQueryAnimation={mediaQueryAnimation}
            renderMediaQueryStyle={renderMediaQueryStyle}
          />
          <p className="home__title">
            <span className="home__title--1">Hey, </span>
            <br />
            <span className="home__title--2">
              Je suis
              <span className="home__title__span"> Gabriel</span>, <br />
            </span>
            <span className="home__title--3">développeur web</span>
          </p>
          <p className="home__description">
            Je suis un développeur web passionné par le design et la création de
            sites web.
          </p>
          <a href="#contact" className="home__link">
            <button className="button__style--1__medium home__button">
              Contactez-moi !
            </button>
          </a>
          <a href="#work" className="arrow-container__link">
            <div className="arrow-container animated fadeInDown">
              <div className="arrow-2">
                <i className="fa fa-angle-down"></i>
              </div>
              <div className="arrow-1 animated hinge infinite zoomIn"></div>
            </div>
          </a>
        </div>

        <Projets
          projectsHovered={projectsHovered}
          setProjectsHovered={setProjectsHovered}
          activeThemeName={activeThemeName}
          mediaQueryAnimation={mediaQueryAnimation}
          mediaQueryNextImg={mediaQueryNextImg}
          renderMediaQueryStyle={renderMediaQueryStyle}
        />

        <section className={renderMediaQueryStyle('about')} id="about">
          <div className="about__container">
            <div className="about__infos">
              <p className="about__title">
                <span className={renderMediaQueryStyle('about__title__span')}>
                  {'> '}
                </span>
                Qui suis-je ?
              </p>
              <div className={renderMediaQueryStyle('about__description')}>
                Ma passion pour le code remonte à il y a dix ans. À
                l&apos;époque, la programmation était, à travers mon regard
                d&apos;enfant, un terrain de jeu dans lequel tout était question
                d&apos;
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  apprentissage
                </span>{' '}
                et d&apos;
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  expérimentation
                </span>
                . Aujourd&apos;hui, cet état d&apos;esprit ne m&apos;a jamais
                quitté et je continue à apprendre et à créer dans le
                développement web.
                <br />
                <br />
                J&apos;ai ainsi expérimenté différentes technologies{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  frontend{' '}
                </span>
                (telles que{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  React
                </span>{' '}
                et plus récemment{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  Vue.js
                </span>
                ) ainsi que{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  backend{' '}
                </span>
                (
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  Express
                </span>
                ,{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  Nodejs
                </span>{' '}
                et plus récemment{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  Django
                </span>
                ) sur plusieurs projets.
                <br />
                <br />
                L&apos;approche{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  pragmatique
                </span>{' '}
                et{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  artistique
                </span>{' '}
                nécessaires à la conception de sites web sont ce qui me plaît le
                plus. Ce mélange intéressant de qualités que demandent le design
                et la création d&apos;un site web fait directement écho au
                travail de l&apos;artisan,{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  minitueux
                </span>{' '}
                et{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  créatif
                </span>
                .
                <br />
                <br />
                J&pos;approche chacun des projets qui me sont confiés avec
                rigueur et communication.
              </div>
            </div>
            <div
              className={renderMediaQueryStyle('about__image')}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <Image src={photoMoi} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className={renderMediaQueryStyle('contact')} id="contact">
          <div className={renderMediaQueryStyle('contact__title')}>
            <span className={renderMediaQueryStyle('contact__title__span')}>
              {'> '}
            </span>
            Me contacter
          </div>
          <div className={renderMediaQueryStyle('contact__description')}>
            Si vous souhaitez me parler à propos d&apos;un projet ou si vous
            avez une question, n&apos;hésitez pas à m&apos;écrire :-{')'}
          </div>
          <a href="mailto:garcia.gvj@gmail.com">
            <button className="button__style--1__small">Contactez-moi !</button>
          </a>
        </section>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
