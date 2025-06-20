import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import HeaderNgang from './components/Headerngang/HeaderNgang';

import Footer from './components/Footer';
import './responsive.css';
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');

  return (
    
  
    <div className="app-container">
      <HeaderNgang />
      <Header setSelectedPage={setSelectedPage} />
      <div className="content-container">
        <Main selectedPage={selectedPage} />
        <Footer />
      </div>
    </div>
  );
}

export default App;