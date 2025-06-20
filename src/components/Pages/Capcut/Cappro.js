import React, { useState } from 'react';
import './Cappro.css';

const Cappro = () => {
  const [selectedPlan, setSelectedPlan] = useState('12m-shared');

  const plans = [
    { id: '6m-shared', duration: '6 Tháng', price: 120000, type: '1 Thiết Bị', note: '', tag: '' },
    { id: '12m-shared', duration: '12 Tháng', price: 204000, type: '1 Thiết Bị', note: '-15%', tag: 'selected' },
    { id: '12m-owned', duration: '12 Tháng', price: 720000, type: 'Chính Chủ', note: '+200%', tag: 'premium' }
  ];

  const handlePlanSelect = (id) => setSelectedPlan(id);

  return (
    <div className="cappro-container">
      <div className="cappro-image">
        <img
          src="./images/capcut1.jpg"
          alt="Capcut Pro Banner"
        />
      </div>

      <div className="cappro-content">
        <div className="cappro-header">
          <span className="premium-label">Tài Khoản Premium</span>
          <h2>Capcut Pro</h2>
          <p>Tài Khoản CapCut Pro Dùng Chung (Chỉ Hỗ Trợ Trên Máy Tính)</p>
          <span className="status-label">Còn hàng</span>
        </div>

        <div className="cappro-plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-box ${selectedPlan === plan.id ? 'active' : ''} ${plan.tag}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <div className="plan-duration">{plan.duration} - {plan.price.toLocaleString()}đ</div>
              <div className="plan-type">{plan.type}</div>
              {plan.note && <span className="plan-note">{plan.note}</span>}
            </div>
          ))}
        </div>

        <textarea
          placeholder="Vui Lòng Nhập Số Điện Thoại Để Được Hỗ Trợ Nhanh"
          className="note-box"
        ></textarea>

        <div className="cappro-footer">
          <h3>
            Tổng thanh toán{' '}
            <span className="price">
              {plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}đ
            </span>
          </h3>
          <button className="pay-button">Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default Cappro;
