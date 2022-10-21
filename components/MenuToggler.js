import React, { useState } from 'react';

const MenuToggler = ({ toggleMobileNav }) => {
  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        className="toggler"
        onClick={() => toggleMobileNav()}
      />
      <div className="hamburger">
        <div></div>
      </div>
    </div>
  );
};

export default MenuToggler;
