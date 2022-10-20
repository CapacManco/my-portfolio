import React from 'react';

const Technology = ({
  technologie,
  projectClass,
  activeThemeName,
  mediaQueryAnimation,
}) => {
  const nameToUppercase = (name) => {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restOfWord = name.slice(1);

    return firstLetter + restOfWord;
  };

  const renderStyle = () => {
    if (!mediaQueryAnimation) {
      return 'none';
    }
    return activeThemeName === projectClass ? 'none' : 'grayscale(100%)';
  };

  return (
    <div
      className={`technologie technologie__${projectClass}--${technologie}`}
      style={{
        filter: renderStyle(),
      }}
    >
      {nameToUppercase(technologie)}
    </div>
  );
};

export default Technology;
