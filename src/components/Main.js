import React, { useState } from 'react';

import './Main.css';
// --- Nhóm trang chính ---
import Home from './Main/Home';
import Accounts from './Main/Accounts';
import Deposits from './Main/Deposits';
import ObjectsApis from './Main/ObjectsApis';
import CreateGlobalUnits from './Main/CreateGlobalUnits';
import Pricelisttiers from './Main/Pricelisttiers';
import ChatSupport from './Main/ChatSupport';

// --- Nhóm TÀI KHOẢN PREMIUM ---
import YoutubePremium from './Main/YoutubePremium';
import CapcutPro from './Main/CapcutPro';
import CanvaPro from './Main/CanvaPro';
import GoogleUltraAI from './Main/GoogleUltraAI';
import SemrushPro from './Main/SemrushPro';
import ChatGPTPlus from './Main/ChatGPTPlua';
import Figma from './Main/Figma';
import KeyWindowsPro from './Main/KeyWindowsPro';

// --- Nhóm DỊCH VỤ VIỆT NAM ---
import Tiktok from './Main/Tiktok';
import Facebook from './Main/Facebook';
import Instagram from './Main/Instagram';
import Youtube from './Main/Youtube';
import Threads from './Main/Threads';



function Main({ selectedPage }) {
  const renderContent = () => {
    switch (selectedPage) {
      // Trang chính
      case 'Home': return <Home />;
      case 'Accounts': return <Accounts />;
      case 'Deposits': return <Deposits />;
      case 'Objects & APIs': return <ObjectsApis />;
      case 'Create Global Units': return <CreateGlobalUnits />;
      case 'Pricelisttiers': return <Pricelisttiers />;
      case 'Chat Support': return <ChatSupport />;

      // Tài khoản Premium
      case 'Youtube Premium': return <YoutubePremium />;
      case 'Capcut Pro': return <CapcutPro />;
      case 'Canva Pro': return <CanvaPro />;
      case 'Google Ultra AI': return <GoogleUltraAI />;
      case 'Semrush Pro': return <SemrushPro />;
      case 'ChatGPT Plua': return <ChatGPTPlus />;
      case 'Figma': return <Figma />;
      case 'Key Windows Pro': return <KeyWindowsPro />;

      // Dịch vụ Việt Nam
      case 'Tiktok': return <Tiktok />;
      case 'Facebook': return <Facebook />;
      case 'Instagram': return <Instagram />;
      case 'Youtube': return <Youtube />;
      case 'Threads': return <Threads />;

      default: return <Home />;
    }
  };

  return (
     <main className="main">
    <div className="page-title">
      Trang hiện tại: <span className="page-link">{selectedPage}</span>
    </div>
    {renderContent()}
  </main>
  );
}

export default Main;