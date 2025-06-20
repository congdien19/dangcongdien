import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const SunIcon = () => {
  const [dark, setDark] = useState(() => {
    return document.body.classList.contains('dark-theme');
  });

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setDark(document.body.classList.contains('dark-theme'));
  };

  return dark ? (
    <FiSun
      className="header-icon"
      onClick={toggleTheme}
      style={{ cursor: 'pointer', color: '#ffd600', fontSize: '1.5rem' }}
      title="Chuyển sang giao diện sáng"
    />
  ) : (
    <FiMoon
      className="header-icon"
      onClick={toggleTheme}
      style={{ cursor: 'pointer', color: '#333', fontSize: '1.5rem' }}
      title="Chuyển sang giao diện tối"
    />
  );
};

export default SunIcon;
