import React from 'react';
import TienTaiKhoai from '../Pages/TrangChu/tientaikhoan';
import SanPham from '../Pages/TrangChu/sanpham';
import KhoiTaoDon from '../Pages/TrangChu/khoitaodon';
import QuanTriVien from '../Pages/TrangChu/quantrivien';
import './Home.css'; // Thêm dòng này

const Home = () => { 
  return (
    <div className="home-container">
      <TienTaiKhoai />
      <SanPham />
      <div className="home-flex-row">
        <KhoiTaoDon />     {/* Bên trái */}
        <QuanTriVien />    {/* Bên phải */}
      </div>
    </div>
  );
};

export default Home;