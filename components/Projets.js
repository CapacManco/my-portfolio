import React, { useState, useEffect } from 'react';
import Projet from '../components/Projet';

import mathieuHue from '../public/img/mathieuhue.jpg';
import codingTutors from '../public/img/codingtutors.jpg';
import collectifRegina from '../public/img/collectifregina.jpg';
import ggarcia from '../public/img/ggarcia.jpg';
import leproductif from '../public/img/leproductif.jpg';

const projects = [
  {
    titre: 'Coding tutors',
    projectClass: 'codingtutors',
    description: [
      { text: 'Codingtutors est une ', span: false },
      { text: 'plateforme de tutorat', span: true },
      {
        text: ' qui connecte des programmeurs expérimentés et des personnes souhaitant apprendre la programmation.',
        span: false,
      },
    ],
    technologies: ['react', 'nextjs', 'firebase', 'SASS'],
    imageSrc: codingTutors,
    url: 'https://coding-tutors.netlify.app/',
  },
  {
    titre: 'Mathieu Hue',
    projectClass: 'mathieuhue',
    description: [
      { text: 'Ce site web est un ', span: false },
      { text: 'portfolio vidéo', span: true },
      {
        text: '  présentant les différents travaux du monteur de films français Mathieu Hue.',
        span: false,
      },
    ],
    technologies: ['react', 'SASS'],
    imageSrc: mathieuHue,
    url: 'https://sad-jang-450125.netlify.app/',
  },
  {
    titre: 'Collectif Régina',
    projectClass: 'collectifregina',
    description: [
      { text: 'Le Collectif Régina est une ', span: false },
      { text: 'association artistique ', span: true },
      {
        text: "dont le but est de promouvoir l'art auprès des plus jeunes",
        span: false,
      },
      {
        text: " à l'aide d'un ",
        span: false,
      },
      {
        text: 'site web et un blog',
        span: true,
      },
      {
        text: '.',
        span: false,
      },
    ],

    technologies: ['javascript', 'express', 'MySQL', 'nodejs', 'SASS'],
    imageSrc: collectifRegina,
    url: 'http://3.138.183.184:3000/',
  },

  {
    titre: 'Le Productif',
    projectClass: 'leproductif',
    description: [
      {
        text: 'Le Productif est un outil conçu pour accroître ma productivité ainsi que mon efficacité. ',
        span: false,
      },
      { text: 'Il comprend un ', span: false },
      { text: 'calendrier', span: true },
      { text: ', une ', span: false },
      { text: 'liste de tâches personnalisable', span: true },
      { text: ', une ', span: false },
      { text: "page d'évaluation", span: true },
      { text: " et bien d'autres fonctionnalités.", span: false },
    ],
    technologies: ['react', 'express', 'nodejs', 'mongoDB', 'SASS'],
    imageSrc: leproductif,
    // url: '',
  },

  {
    titre: 'Gabriel G',
    projectClass: 'gabrielg',
    description: [
      { text: 'Gabriel G est mon ', span: false },
      { text: 'portfolio', span: true },
      {
        text: ' personnel créé dans le but de montrer mes différents travaux.',
        span: false,
      },
    ],
    technologies: ['react', 'nextjs', 'firebase'],
    imageSrc: ggarcia,
    url: '',
  },
];

const Projets = ({
  projectsHovered,
  setProjectsHovered,
  activeThemeName,
  mediaQueryAnimation,
  mediaQueryNextImg,
  renderMediaQueryStyle,
}) => {
  const numOfProjects = projects.length;
  const [numProjectsShown, setNumProjectsShown] = useState(3);
  const [allProjectsShown, setAllProjectsShown] = useState(false);

  useEffect(() => {
    if (numProjectsShown === numOfProjects) {
      setAllProjectsShown(true);
    }
  }, [numProjectsShown]);

  const renderProjects = () => {
    return projects.slice(0, numProjectsShown).map((projet, i) => {
      return (
        <Projet
          key={i}
          titre={projet.titre}
          description={projet.description}
          number={i}
          technologies={projet.technologies}
          imageSrc={projet.imageSrc}
          url={projet.url}
          projectClass={projet.projectClass}
          projectsHovered={projectsHovered}
          setProjectsHovered={setProjectsHovered}
          activeThemeName={activeThemeName}
          mediaQueryAnimation={mediaQueryAnimation}
          mediaQueryNextImg={mediaQueryNextImg}
          renderMediaQueryStyle={renderMediaQueryStyle}
        />
      );
    });
  };

  const showMoreProjects = () => {
    if (numProjectsShown === numOfProjects) {
      return;
    }
    if (numOfProjects - numProjectsShown < 3) {
      const remainingProjects = numOfProjects - numProjectsShown;
      setNumProjectsShown(numProjectsShown + remainingProjects);
    } else {
      setNumProjectsShown(numProjectsShown + 3);
    }
  };

  return (
    <section className={renderMediaQueryStyle('work')} id="work">
      {renderProjects()}
      {!allProjectsShown && (
        <button
          className={renderMediaQueryStyle('button__style--2__medium')}
          onClick={() => showMoreProjects()}
        >
          Voir plus
        </button>
      )}
    </section>
  );
};

export default Projets;
