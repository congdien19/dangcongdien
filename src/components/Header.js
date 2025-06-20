// Header.js
import React from 'react';
import './Header.css';
import Logo from './Header/Logo';
import SidebarMenu from './Header/SidebarMenu';


function Header({ setSelectedPage }) {
  return (
    <header className="header">
      <Logo />
      <SidebarMenu setSelectedPage={setSelectedPage} />
    </header>
  );
}

export default Header;
