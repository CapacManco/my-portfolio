import React, { useState } from 'react';
import { RiMenu3Fill as MenuOpenIcon } from 'react-icons/ri';
import { MdClose as MenuCloseIcon } from 'react-icons/md';

const MenuToggler = ({ toggleMobileNav, isMenuVisible }) => {
  const renderIcon = () => {
    if (!isMenuVisible) {
      return (
        <MenuOpenIcon
          className="nav__responsive__icon"
          onClick={() => toggleMobileNav()}
        />
      );
    }
    return (
      <MenuCloseIcon
        className="nav__responsive__icon"
        onClick={() => toggleMobileNav()}
      />
    );
  };
  return <div className="nav__responsive__container">{renderIcon()}</div>;
};

export default MenuToggler;
