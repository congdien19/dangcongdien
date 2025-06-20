import React, { useState } from 'react';
import './chatai.css';

const Chatai = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const plans = [
    { month: 1, price: 90000, discount: 0 },
    { month: 3, price: 256500, discount: 5 },
    { month: 6, price: 502200, discount: 7 },
  ];

  return (
    <div className="chatai-container">
      <div className="chatai-left">
        <img src="/images/chatai.jpg" alt="ChatGPT Plus" className="chatai-banner" />
      </div>
      <div className="chatai-right">
        <span className="chatai-badge">Tài Khoản Premium</span>
        <h2>ChatGPT Plus</h2>
        <p className="chatai-desc">Tài Khoản Chat GPT PLus Dùng Chung</p>
        <div className="chatai-chip">Còn hàng</div>

        <div className="chatai-plans">
          {plans.map((plan) => (
            <div
              key={plan.month}
              className={`chatai-plan ${selectedPlan === plan.month ? 'active' : ''}`}
              onClick={() => setSelectedPlan(plan.month)}
            >
              <strong>{plan.month} Tháng - {plan.price.toLocaleString()}đ</strong>
              <p>1 Thiết Bị</p>
              {plan.discount > 0 && <span className="chatai-discount">-{plan.discount}%</span>}
            </div>
          ))}
        </div>

        <textarea
          className="chatai-input"
          placeholder="vui lòng nhập ghi chú bất kì"
        ></textarea>

        <div className="chatai-total">
          <strong>Tổng thanh toán <span>{plans.find(p => p.month === selectedPlan).price.toLocaleString()}đ</span></strong>
        </div>

        <button className="chatai-button">Thanh Toán</button>
      </div>
    </div>
  );
};

export default Chatai;
