import React, { useState } from 'react';
import './Keywin.css';

const KeyWin = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'win10pro',
      duration: '1000 Tháng',
      price: 80000,
      description: 'Windows 10 Pro Vĩnh Viễn',
    },
    {
      id: 'win11pro',
      duration: '1000 Tháng',
      price: 80000,
      description: 'Windows 11 Pro Vĩnh Viễn',
    },
    {
      id: 'win10home',
      duration: '1000 Tháng',
      price: 80000,
      description: 'Windows 10 Home Vĩnh Viễn',
    },
    {
      id: 'win11home',
      duration: '1000 Tháng',
      price: 80000,
      description: 'Windows 11 Home Vĩnh Viễn',
    },
  ];

  const handleSelect = (id) => setSelectedPlan(id);

  return (
    <div className="kw-container">
      <div className="kw-image">
        <img src="./images/keywin.png" alt="Key Windows Pro" />
      </div>

      <div className="kw-content">
        <div className="kw-header">
          <span className="kw-label-premium">Tài Khoản Premium</span>
          <h2>Key Windows Pro</h2>
          <p>Key Kích Hoạt Bản Quyền Chính Hãng Windows Pro Và Windows Home</p>
          <span className="kw-label-stock">Còn hàng</span>
        </div>

        <div className="kw-plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`kw-plan-box ${selectedPlan === plan.id ? 'active' : ''}`}
              onClick={() => handleSelect(plan.id)}
            >
              <div className="kw-plan-duration">
                {plan.duration} - {plan.price.toLocaleString()}đ
              </div>
              <div className="kw-plan-description">{plan.description}</div>
            </div>
          ))}
        </div>

        <textarea
          className="kw-note-box"
          placeholder="Vui Lòng Nhập SĐT Admin Tiện Hỗ Trợ"
        ></textarea>

        <div className="kw-footer">
          <h3>
            Tổng thanh toán{' '}
            <span className="kw-price">
              {selectedPlan
                ? `${plans.find((p) => p.id === selectedPlan)?.price.toLocaleString()}đ`
                : '0đ'}
            </span>
          </h3>
          <button className="kw-pay-button">🛒 Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default KeyWin;
