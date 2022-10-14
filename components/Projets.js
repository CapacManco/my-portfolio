import React, { useState, useEffect } from 'react';
import Projet from '../components/Projet';

import mathieuHue from '../public/img/mathieuhue.png';
import codingTutors from '../public/img/codingTutors.png';
import collectifRegina from '../public/img/collectifregina4.png';
import rethaColt from '../public/img/rethacolt.png';
import ggarcia from '../public/img/ggarcia.png';

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
    url: 'codingtutors.io',
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
    url: 'codingtutors.io',
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
    url: 'codingtutors.io',
  },
  {
    titre: 'Rethacolt',
    projectClass: 'rethacolt',
    description: [
      { text: 'Rethacolt est un ', span: false },
      { text: 'portfolio', span: true },
      { text: ' exposant toutes les ', span: false },
      { text: 'photographies', span: true },
      { text: " de l'artiste du même nom", span: false },
    ],
    technologies: ['javascript', 'SASS'],
    imageSrc: rethaColt,
    url: 'codingtutors.io',
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
    imageSrc: rethaColt,
    url: 'codingtutors.io',
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
    url: 'codingtutors.io',
  },
  // description:[{text: '', span: false},{text: '', span: true},{text: '', span: false},],
  // {
  //   titre: 'Wordle',
  //   description:
  //     "Le Productif est un outil conçu pour accroître ma productivité ainsi que mon efficacité. Il comprend un calendrier, une liste de tâches personnalisable, une page d'évaluation et bien d'autres fonctionnalités.",
  //   technologies: ['react', 'nextjs', 'javascript'],
  //   imageSrc: rethaColt,
  //   url: 'codingtutors.io',
  // },
];

const Projets = ({ projectsHovered, setProjectsHovered, activeThemeName }) => {
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
    <section
      className={`work ${activeThemeName ? `work--${activeThemeName}` : ''}`}
      id="work"
    >
      {renderProjects()}
      {!allProjectsShown && (
        <button
          className={`button__style--2__medium ${
            activeThemeName
              ? `button__style--2__medium--${activeThemeName}`
              : ''
          }`}
          onClick={() => showMoreProjects()}
        >
          Voir plus
        </button>
      )}
    </section>
  );
};

export default Projets;
