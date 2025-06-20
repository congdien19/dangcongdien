import React from 'react';
import './HeaderNgang.css';
import BellIcon from '../Headerngang/BellIcon';
import SunIcon from '../Headerngang/SunIcon';
import LoginButton from '../Headerngang/LoginButton';

const HeaderNgang = () => {
  return (
    <header className="custom-header">
      <div className="icon-group">
        <BellIcon />
        <SunIcon />

      <LoginButton />
      </div>
    </header>
  );
};

export default HeaderNgang;
