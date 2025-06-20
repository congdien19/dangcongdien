import React, { useState } from 'react';
import './thongke.css'; // Đảm bảo tên trùng với file CSS bạn đang dùng

const ThongKe = () => {
  const [selectedPlan, setSelectedPlan] = useState('1m-shared');

  const plans = [
    { id: '1m-shared', duration: '1 Tháng', price: 80000, type: 'Dùng Chung', note: '', tag: '' },
  ];

  const handlePlanSelect = (id) => setSelectedPlan(id);

  return (
    <div className="tk-container">
      <div className="tk-image">
        <img
          src="./images/thongke.jpg"
          alt="Semrush Pro Banner"
        />
      </div>

      <div className="tk-content">
        <div className="tk-header">
          <span className="tk-label-premium">Tài Khoản Premium</span>
          <h2>Semrush Pro</h2>
          <p>Tài Khoản Semrush Pro Bản API Dùng Chung</p>
          <span className="tk-label-status">Còn hàng</span>
        </div>

        <div className="tk-plans">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`tk-plan-box ${selectedPlan === plan.id ? 'active' : ''} ${plan.tag}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <div className="tk-plan-duration">
                {plan.duration} - {plan.price.toLocaleString()}đ
              </div>
              <div className="tk-plan-type">{plan.type}</div>
            </div>
          ))}
        </div>

        <textarea
          placeholder="vui lòng nhập số điện thoại để shop liên hệ với bạn"
          className="tk-note-box"
        ></textarea>

        <div className="tk-footer">
          <h3>
            Tổng thanh toán{' '}
            <span className="tk-price">
              {plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}đ
            </span>
          </h3>
          <button className="tk-pay-button">Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default ThongKe;
