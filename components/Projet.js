import React, { useState } from 'react';
import Image from 'next/image';

import Technologie from '../components/Technologie';

const Projet = ({
  titre,
  number,
  description,
  technologies,
  imageSrc,
  url,
  projectClass,
  projectsHovered,
  setProjectsHovered,
  activeThemeName,
}) => {
  const numberOfProject = number + 1;
  const imagePosition = numberOfProject % 2 === 0 ? 'right' : 'left';
  const infosPosition = numberOfProject % 2 === 0 ? 'left' : 'right';

  const renderTechnologies = () => {
    return technologies.map((technologie, i) => {
      return (
        <Technologie
          key={i}
          technologie={technologie}
          projectClass={projectClass}
          activeThemeName={activeThemeName}
        />
      );
    });
  };

  const renderDescription = () => {
    return description.map((descriptionPart, i) => {
      if (descriptionPart.span)
        return (
          <span
            key={i}
            className={`work__projet__span  ${
              activeThemeName ? `work__projet__span--${activeThemeName}` : ''
            }`}
          >
            {descriptionPart.text}
          </span>
        );
      return descriptionPart.text;
    });
  };

  const setProjectHover = (boolean) => {
    setProjectsHovered({ ...projectsHovered, [`${projectClass}`]: boolean });
  };

  return (
    <div className="work__projet">
      <div
        className={`work__projet__image__container work__projet__image__container--${imagePosition}`}
      >
        <div
          className={`work__projet__image__container--fix ${
            activeThemeName
              ? `work__projet__image__container--fix--${activeThemeName}`
              : ''
          }`}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        >
          <Image
            className="work__projet__image"
            src={imageSrc}
            height="500"
            width="1000"
            // layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div
        className={`work__projet__infos work__projet__infos--${infosPosition}`}
      >
        <p
          className={`work__projet__title ${
            activeThemeName ? `work__projet__title--${activeThemeName}` : ''
          }`}
        >
          <span
            className={`work__projet__title__span ${
              activeThemeName
                ? `work__projet__title__span--${activeThemeName}`
                : ''
            }`}
          >
            0{numberOfProject}.{' '}
          </span>
          {titre}
        </p>
        <div
          className={`work__projet__description ${
            activeThemeName
              ? `work__projet__description--${activeThemeName}`
              : ''
          }`}
        >
          {renderDescription(description)}
        </div>
        <div className="work__projet__technologies">
          {renderTechnologies(technologies)}
        </div>
      </div>
    </div>
  );
};

export default Projet;
