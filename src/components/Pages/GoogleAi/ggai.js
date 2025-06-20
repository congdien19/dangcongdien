import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ggai.css';

const GgAi = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [price, setPrice] = useState(0);

  const plans = [
    { id: 1, label: '1 Tháng - 80,000đ', value: 80000, status: 'Hết hàng' }
  ];

  const handleSelect = (plan) => {
    setSelectedPlan(plan.id);
    setPrice(plan.value);
  };

  return (
    <div className="ggai-container">
      <div className="ggai-card">
        <div className="ggai-left">
          <img
            src="./images/ggai.jpg"
            alt="Google AI Ultra Banner"
            className="ggai-image"
          />
        </div>

        <div className="ggai-right">
          <span className="premium-label">Tài Khoản Premium</span>
          <h4 className="title">Google Ultra AI</h4>
          <p className="description">
            Tài Khoản Google Ultra AI 30 TB (Veo3) Có Sẵn 12500 Credit Tạo Hơn 100 Video ( Dành Tạo Video 1 Phút )
          </p>

          <div className="status-box">Còn hàng</div>

          <div className="plans">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`plan-button ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => handleSelect(plan)}
              >
                <span>{plan.label}</span>
                <span className="sold-out">{plan.status}</span>
              </button>
            ))}
          </div>

          <textarea
            className="note-box"
            placeholder="Nhập SĐT Để Admin Liên Hệ Hỗ Trợ Bạn"
          ></textarea>

          <div className="total-box">
            Tổng thanh toán <span className="price">{price > 0 ? `${price.toLocaleString()}đ` : '0đ'}</span>
          </div>

          <button className="pay-button">🛒 Thanh Toán</button>
        </div>
      </div>
    </div>
  );
};

export default GgAi;
