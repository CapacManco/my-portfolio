import React from 'react';

const Technology = ({ technologie, projectClass, activeThemeName }) => {
  const nameToUppercase = (name) => {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restOfWord = name.slice(1);

    return firstLetter + restOfWord;
  };

  return (
    <div
      className={`technologie technologie__${projectClass}--${technologie}`}
      style={{
        filter: activeThemeName === projectClass ? 'none' : 'grayscale(100%)',
      }}
    >
      {nameToUppercase(technologie)}
    </div>
  );
};

export default Technology;
