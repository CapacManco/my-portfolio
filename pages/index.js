import Head from 'next/head';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import Nav from '../components/Nav';
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

  useEffect(() => {
    window.innerWidth >= 768
      ? setMediaQueryAnimation(true)
      : setMediaQueryAnimation(false);

    window.innerWidth <= 576
      ? setMediaQueryNextImg(true)
      : setMediaQueryNextImg(false);
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

  return (
    <div>
      <Head>
        <title>Gabriel Garcia | Développeur Front End</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        activeThemeName={activeThemeName}
        activeSection={activeSection}
        mediaQueryAnimation={mediaQueryAnimation}
        renderMediaQueryStyle={renderMediaQueryStyle}
      />
      <main className="layout">
        <div className={renderMediaQueryStyle('home')} id="home">
          <Bubbles
            activeThemeName={activeThemeName}
            mediaQueryAnimation={mediaQueryAnimation}
            renderMediaQueryStyle={renderMediaQueryStyle}
          />
          <p className="home__title">
            Hey, <br />
            Je suis
            <span className="home__title__span"> Gabriel</span>, <br />
            développeur web
          </p>
          <p className="home__description">
            Je suis un développeur web passionné par le design et la création de
            sites web qui véhiculent un message sensé.
          </p>
          <a href="#contact" className="home__link">
            <button className="button__style--1__medium">
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
                En tant que développeur frontend junior, j&apos;ai eu
                l&apos;occasion d&apos;expérimenter plusieurs technologies{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  frontend et backend
                </span>{' '}
                sur les différents projets sur lesquels j&apos;ai pu travailler.{' '}
                <br />
                <br />
                L&apos;approche{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  pragmatique et artistique
                </span>{' '}
                nécessaires à la conception de sites web sont ce qui me plaît le
                plus. Ce mélange intéressant de qualités que demandent{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  le design et création
                </span>{' '}
                d&apos;un site web fait directement écho au travail de
                l&apos;artisan, minutieusement travaillé et inventif.
                <br /> <br />
                J&apos;approche chacun des projets qui me sont confiés avec{' '}
                <span
                  className={renderMediaQueryStyle('about__description__span')}
                >
                  rigueur et communication
                </span>
                .
              </div>
            </div>
            <div
              className={renderMediaQueryStyle('about__image')}
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <Image
                src={photoMoi}
                width="1500"
                height="1500"
                layout="fill"
                objectFit="cover"
              />
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
