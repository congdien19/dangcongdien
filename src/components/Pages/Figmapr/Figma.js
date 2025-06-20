import React, { useState } from 'react';
import './Figma.css';

const Figma = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'private',
      duration: '24 Tháng',
      price: 287040,
      discount: '-8%',
      type: 'Tài Khoản Dùng Riêng',
    },
    {
      id: 'shared',
      duration: '24 Tháng',
      price: 234000,
      discount: '-25%',
      type: 'Tài Khoản Dùng Chung',
    },
  ];

  const handleSelect = (id) => setSelectedPlan(id);

  return (
    <div className="fg-container">
      <div className="fg-image">
        <img src="./images/figmapro.jpg" alt="Figma Premium" />
      </div>

      <div className="fg-content">
        <div className="fg-header">
          <span className="fg-label-premium">Tài Khoản Premium</span>
          <h2>Figma</h2>
          <p>Tài Khoản Figma Pro Edu Full Tính Năng</p>
          <span className="fg-label-status">Còn hàng</span>
        </div>

        <div className="fg-plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`fg-plan-box ${selectedPlan === plan.id ? 'active' : ''}`}
              onClick={() => handleSelect(plan.id)}
            >
              <div className="fg-plan-duration">
                {plan.duration} - {plan.price.toLocaleString()}đ
              </div>
              <div className="fg-plan-type">{plan.type}</div>
              <span className="fg-plan-note">{plan.discount}</span>
            </div>
          ))}
        </div>

        <textarea
          className="fg-note-box"
          placeholder="Nhập Bất Kì Có Thể Nhập Số Điện Thoại Để Được Hỗ Trợ Nhanh"
        ></textarea>

        <div className="fg-footer">
          <h3>
            Tổng thanh toán{' '}
            <span className="fg-price">
              {selectedPlan
                ? `${plans.find((p) => p.id === selectedPlan)?.price.toLocaleString()}đ`
                : '0đ'}
            </span>
          </h3>
          <button className="fg-pay-button">🛒 Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default Figma;
