import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        © 2025. <a href="https://congdien.pro" target="_blank" rel="noopener noreferrer">congdien.pro</a> - Social Media Marketing.
      </div>
      
      <div className="footer-right">
        Powered By <strong>Đặng Công Diện</strong>
        <div className="footer-social">
          <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
