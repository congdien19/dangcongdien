// src/components/SanPham.js
import React from 'react';
import './sanpham.css';

const data = [
  {
    title: 'Youtube Premium',
    image: '/images/youtube.jpg',
      link: '/youtube-premium' // Update this to the correct route
  },
  {
    title: 'Capcut Pro',
    image: '/images/capcut.jpg',
    link: '#'
  },
  {
    title: 'Canva Pro',
    image: '/images/Untitled-design.png',
    link: '#'
  },
  {
    title: 'Google Ultra AI',
    image: '/images/google-ultra-ai-veo-3.jpg',
    link: '#'
  },
  {
    title: 'Semrush Pro',
    image: '/images/thongke.jpg',
    link: '#'
  },
  {
    title: 'ChatGPT Plus',
    image: '/images/chapgpt.png',
    link: '#'
  },
  {
    title: 'Figma',
    image: '/images/51dd72c7-179b-4c5a-80f3-c6f4491d69dc.jpg',
    link: '#'
  },
  {
    title: 'Key Windows Pro',
    image: '/images/keywin11.jpg',
    link: '#'
  }
];

const SanPham = () => {
  return (
    <div className="sanpham-container">
      {data.map((item, index) => (
        <div key={index} className="sanpham-card">
          <img src={item.image} alt={item.title} className="sanpham-image" />
          <div className="sanpham-title">{item.title}</div>
          <a href={item.link} className="sanpham-button">Xem ngay</a>
        </div>
      ))}
    </div>
  );
};

export default SanPham;
