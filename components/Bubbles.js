import React, { useState, useEffect } from 'react';

const Bubbles = ({ activeThemeName }) => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setMousePosition({ left: e.pageX, top: e.pageY });
    });
  }, []);

  return (
    <ul
      className={`bg-bubbles ${
        activeThemeName ? `bg-bubbles--${activeThemeName}` : ''
      }`}
    >
      <li
        style={{
          left: `calc(10% - ${mousePosition.left / 5}px)`,
          bottom: -160 + mousePosition.top / 5,
        }}
      ></li>
      <li
        style={{
          left: `calc(20% - ${mousePosition.left / 4}px)`,
          bottom: -160 + mousePosition.top / 4,
        }}
      >
        {' '}
      </li>
      <li
        style={{
          left: `calc(25% - ${mousePosition.left / 7}px)`,
          bottom: -160 + mousePosition.top / 7,
        }}
      ></li>
      <li
        style={{
          left: `calc(40% - ${mousePosition.left / 4}px)`,
          bottom: -160 + mousePosition.top / 4,
        }}
      ></li>
      <li
        style={{
          left: `calc(70% - ${mousePosition.left / 3}px)`,
          bottom: -160 + mousePosition.top / 3,
        }}
      ></li>
      <li
        style={{
          left: `calc(80% - ${mousePosition.left / 6}px)`,
          bottom: -160 + mousePosition.top / 6,
        }}
      ></li>
      <li
        style={{
          left: `calc(42% - ${mousePosition.left / 7}px)`,
          bottom: -160 + mousePosition.top / 7,
        }}
      ></li>
      <li
        style={{
          left: `calc(65% - ${mousePosition.left / 3}px)`,
          bottom: -160 + mousePosition.top / 3,
        }}
      ></li>
      <li
        style={{
          left: `calc(25% - ${mousePosition.left / 5}px)`,
          bottom: -160 + mousePosition.top / 5,
        }}
      ></li>
      <li
        style={{
          left: `calc(90% - ${mousePosition.left / 5}px)`,
          bottom: -160 + mousePosition.top / 5,
        }}
      ></li>
    </ul>
  );
};

export default Bubbles;
