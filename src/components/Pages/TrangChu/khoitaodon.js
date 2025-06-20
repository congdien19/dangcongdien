// File: khoitaodon.js
import React, { useState } from 'react';
import './khoitaodon.css';
import { FaFacebook, FaCheckCircle, FaClock } from 'react-icons/fa';

const KhoiTaoDon = () => {
  const [service, setService] = useState('');
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [schedule, setSchedule] = useState(false);
  const [repeat, setRepeat] = useState(false);

  return (
    <div className="form-container">
      <h2 className="title">Khởi Tạo Đơn Hàng Nhanh</h2>

      <section className="section">
        <label className="label">Tìm nhanh dịch vụ</label>
        <div className="service-box">
          <span className="tag">SV41688</span>
          <p className="desc">Facebook Followers | Max 10M | All Type Page/Profile | Vietnamese + Global | 1k-5k/day - Instant - REFILL 30D</p>
        </div>
      </section>

      <section className="section select-group">
        <div>
          <label className="label">Nền tảng</label>
          <div className="input-icon"><FaFacebook /> Facebook Global</div>
        </div>
        <div>
          <label className="label">Dịch vụ</label>
          <select className="select" value={service} onChange={e => setService(e.target.value)}>
            <option value="">Facebook Profile Followers</option>
          </select>
        </div>
      </section>

      <section className="section">
        <div className="server-box">
          <span className="tag">SV3</span>
          Facebook Followers | Max 10M | All Type Page/Profile | Vietnamese + Global | 1k-5k/day - Instant - REFILL 30D
        </div>

        <label className="label">Link Cần Mua</label>
        <input type="text" value={link} onChange={e => setLink(e.target.value)} className="input" placeholder="Nhập Link Cần Mua Seeding" />

        <label className="checkbox">
          <input type="checkbox" /> Mua Nhiều Đơn Cùng Lúc
        </label>
      </section>

      <section className="section status-row">
        <div><FaCheckCircle className="icon" /> Hoạt Động</div>
        <div><FaClock className="icon" /> 00:00:00</div>
        <div><FaCheckCircle className="icon" /> Có Hoàn Tiền</div>
        <div><FaCheckCircle className="icon" /> Có Bảo Hành</div>
      </section>

      <section className="section">
        <label className="label">Số lượng: (100 ~ 10.000)</label>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} className="input" placeholder="Nhập số lượng" />

        <label className="label">Tổng thanh toán</label>
        <input type="text" disabled value="0đ" className="input" />
      </section>

      <section className="section">
        <label className="checkbox">
          <input type="checkbox" checked={schedule} onChange={() => setSchedule(!schedule)} /> Đặt lịch chạy. Múi giờ: +07:00
        </label>

        <label className="checkbox">
          <input type="checkbox" checked={repeat} onChange={() => setRepeat(!repeat)} /> Đặt hàng lặp lại.
        </label>
        <p className="note">Tự động đặt lại đơn hàng sau khi đơn hàng này HOÀN THÀNH. Đảm bảo số dư đủ cho các đơn hàng sau.</p>
      </section>

      <button className="submit-btn">Tạo đơn hàng</button>
    </div>
  );
};

export default KhoiTaoDon;
