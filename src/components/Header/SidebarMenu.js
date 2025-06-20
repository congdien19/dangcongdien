import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './SidebarMenu.css';

function SidebarMenu({ setSelectedPage }) {
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const sections = [
    {
      items: [
        { label: 'Trang chủ', value: 'Home', icon: '/images/icons/application.svg' },
        { label: 'Tài khoản', value: 'Accounts', icon: '/images/icons/users.svg' },
        { label: 'Nạp tiền', value: 'Deposits', icon: '/images/icons/wallet.svg' },
        { label: 'Đối Tác & APIs', value: 'Objects & APIs', icon: '/images/icons/web.svg' },
        { label: 'Bảng giá & cấp bậc', value: 'Create Global Units', icon: '/images/icons/price-list.svg' },
        { label: 'Lịch sử giao dịch ', value: 'Chat Support', icon: '/images/icons/transaction-history.svg' },
      ]
    },
    {
      heading: 'TÀI KHOẢN PREMIUM',
      items: [
        { label: 'Youtube Premium', value: 'Youtube Premium', icon: '/images/icons/youtube.png' },
        { label: 'Capcut Pro', value: 'Capcut Pro', icon: '/images/icons/capcut.jpg' },
        { label: 'Canva Pro', value: 'Canva Pro', icon: '/images/icons/canva.png' },
        { label: 'Google Ultra AI', value: 'Google Ultra AI', icon: '/images/icons/gg.jpg' },
        { label: 'Semrush Pro', value: 'Semrush Pro', icon: '/images/icons/soppro.jpg' },
        { label: 'ChatGPT Plus', value: 'ChatGPT Plua', icon: '/images/chap.png' },
        { label: 'Figma', value: 'Figma', icon: '/images/icons/figma.jpg' },
        { label: 'Key Windows Pro', value: 'Key Windows Pro', icon: '/images/icons/keywin11.png' },
      ]
    },
    {
      heading: 'DỊCH VỤ VIỆT NAM',
      items: [
        { label: 'Tiktok', value: 'Tiktok', icon: '/images/icons/tiktok.png' },
        { label: 'Facebook', value: 'Facebook', icon: '/images/icons/fb.png' },
        { label: 'Instagram', value: 'Instagram', icon: '/images/icons/ig.png' },
        { label: 'Youtube', value: 'Youtube', icon: '/images/icons/youtube.png' },
        { label: 'Threads', value: 'Threads', icon: '/images/icons/thitder.png' }
      ]
    }
  ];

  const handleClick = (page) => {
    setActiveItem(page);
    if (typeof setSelectedPage === 'function') {
      setSelectedPage(page);
    } else {
      console.error('❌ setSelectedPage không được truyền đúng từ component cha!');
    }
    setShowMobileMenu(false);
  };

  return (
    <>
      <div className="sidebar-hamburger-mobile">
        <button
          className="hamburger-btn"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Mở menu"
          style={{
            padding: 0,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <GiHamburgerMenu size={28} color="#222" />
        </button>
      </div>

      <div className={`sidebar-menu${showMobileMenu ? ' show-mobile' : ''}`}>
        {sections.map((section, idx) => (
          <div key={idx} className="menu-section">
            {section.heading && <h6 className="menu-heading">{section.heading}</h6>}
            <ul>
              {section.items.map((item) => (
                <li
                  key={item.value}
                  className={`${activeItem === item.value ? 'active' : ''} ${hoveredItem === item.value ? 'hovered' : ''}`}
                  onClick={() => handleClick(item.value)}
                  onMouseEnter={() => setHoveredItem(item.value)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && <img src={item.icon} alt="" className="menu-icon" />}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default SidebarMenu;