import React, { useState } from 'react';
import './taikhoanpr.css';

const Taikhoanpr = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const plans = [
    { month: 1, price: 25000, discount: 0 },
    { month: 3, price: 63000, discount: 16 },
    { month: 6, price: 123000, discount: 18 },
    { month: 12, price: 240000, discount: 20 },
  ];

  return (
    <div className="yt-container">
      <div className="yt-left">
        <img src="/images/youtubepr.png" alt="YouTube Premium" className="yt-banner" />
      </div>
      <div className="yt-right">
        <span className="yt-badge">Tài Khoản Premium</span>
        <h2>Youtube Premium</h2>
        <p className="yt-desc">
          Tài Khoản Youtube Premium Chính Chủ Đăng Ký Gmail Của Bạn + Tặng Gemini AI PRO 2TB (Kèm Veo3)
        </p>
        <div className="yt-chip">Còn hàng</div>

        <div className="yt-plans">
          {plans.map((plan, index) => (
            <div
              key={plan.month}
              className={`yt-plan ${selectedPlan === plan.month ? 'active' : ''}`}
              onClick={() => setSelectedPlan(plan.month)}
            >
              <strong>{plan.month} Tháng - {plan.price.toLocaleString()}đ</strong>
              <p>+ Tặng Gemini AI PRO 2TB <br />(Kèm Veo3)</p>
              {plan.discount > 0 && <span className="yt-discount">-{plan.discount}%</span>}
            </div>
          ))}
        </div>

        <textarea
          className="yt-input"
          placeholder="Nhập Gmail Cần Đăng Kí Gói Youtube Premium của bạn (Không yêu cầu Password)"
        ></textarea>

        <div className="yt-total">
          <strong>Tổng thanh toán <span>{plans.find(p => p.month === selectedPlan).price.toLocaleString()}đ</span></strong>
        </div>

        <button className="yt-button">Thanh Toán</button>
      </div>
    </div>
  );
};

export default Taikhoanpr;
