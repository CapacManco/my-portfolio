import React, { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink as ExtLinkIcon } from 'react-icons/fi';

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
  mediaQueryAnimation,
  mediaQueryNextImg,
  renderMediaQueryStyle,
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
          mediaQueryAnimation={mediaQueryAnimation}
        />
      );
    });
  };

  const renderDescription = () => {
    return description.map((descriptionPart, i) => {
      if (descriptionPart.span)
        return (
          <span key={i} className={renderMediaQueryStyle('work__projet__span')}>
            {descriptionPart.text}
          </span>
        );
      return descriptionPart.text;
    });
  };

  const setProjectHover = (boolean) => {
    setProjectsHovered({ ...projectsHovered, [`${projectClass}`]: boolean });
  };

  const renderMediaQueryImg = () => {
    if (!mediaQueryNextImg)
      return (
        <Image
          className="work__projet__image"
          src={imageSrc}
          height="500"
          width="1000"
          // layout="fill"
          objectFit="cover"
        />
      );
    return (
      <Image
        className="work__projet__image"
        src={imageSrc}
        height="500"
        width="1000"
        layout="fill"
        objectFit="cover"
      />
    );
  };

  return (
    <div className="work__projet">
      <div
        className={`work__projet__image__container work__projet__image__container--${imagePosition}`}
      >
        <a href={url} className="work__projet__link">
          <div
            className={renderMediaQueryStyle(
              'work__projet__image__container--fix'
            )}
            onMouseEnter={() => setProjectHover(true)}
            onMouseLeave={() => setProjectHover(false)}
          >
            {renderMediaQueryImg()}
          </div>
        </a>
      </div>
      <div
        className={`work__projet__infos work__projet__infos--${infosPosition}`}
      >
        <p
          className={`work__projet__title ${
            activeThemeName ? `work__projet__title--${activeThemeName}` : ''
          }`}
        >
          <span className={renderMediaQueryStyle('work__projet__title__span')}>
            0{numberOfProject}.{' '}
          </span>
          {titre}
        </p>
        <div className={renderMediaQueryStyle('work__projet__description')}>
          {renderDescription(description)}
        </div>
        <div className="work__projet__technologies">
          {renderTechnologies(technologies)}
        </div>
        <a href={url} className="work__projet__link">
          <ExtLinkIcon
            className={renderMediaQueryStyle('work__projet__external-link')}
          />
        </a>
      </div>
    </div>
  );
};

export default Projet;
