import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './canvapro.css';

const CanvaPro = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [price, setPrice] = useState(0);

  const plans = [
    { id: 1, label: '12 Tháng - 10,200đ', value: 10200 },
    { id: 2, label: '24 Tháng - 18,360đ', value: 18360, discount: '-10%' },
    { id: 3, label: '36 Tháng - 26,010đ', value: 26010, discount: '-15%' }
  ];

  const handleSelect = (plan) => {
    setSelectedPlan(plan.id);
    setPrice(plan.value);
  };

  return (
    <div className="canva-container">
      <div className="canva-card">
        <div className="canva-left">
          <img
            src="./images/canvapro.jpg"
            alt="Canva Banner"
            className="canva-image"
          />
        </div>

        <div className="canva-right">
          <span className="premium-label">Tài Khoản Premium</span>
          <h4>Canva Pro</h4>
          <p className="description">
            Tài Khoản Canva Pro Education Chính Chủ Đăng Ký Bằng Mail Của Bạn
          </p>

          <div className="status-box">Còn hàng</div>

          <div className="plans">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`plan-button ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => handleSelect(plan)}
              >
                {plan.label}
                {plan.discount && <span className="discount">{plan.discount}</span>}
              </button>
            ))}
          </div>

          <textarea
            className="note-box"
            placeholder="Nhập Mail Bạn Cần Đăng Kí Gói Canva Pro Edu Chính Chủ..."
          ></textarea>

          <div className="total-box">
            Tổng thanh toán <span>{price > 0 ? `${price.toLocaleString()}đ` : '0đ'}</span>
          </div>

          <button className="pay-button">🛒 Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default CanvaPro;
