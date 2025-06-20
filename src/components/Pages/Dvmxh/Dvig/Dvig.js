import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Dvig.css';

const Dvig = () => {
  const [link, setLink] = useState('');
  const [server, setServer] = useState('MC-1');
  const [quantity, setQuantity] = useState(100);
  const [pricePerInteraction, setPricePerInteraction] = useState(18);
  const [note, setNote] = useState('');
  const [multiOrder, setMultiOrder] = useState(false);

  const total = quantity * pricePerInteraction;

  const serverOptions = [
    {
      id: 'MC-1',
      name: 'MC-1',
      price: 18,
      description: 'Tăng Người Theo Dõi Instagram ~ Tốc Độ Nhanh ~ Tài Nguyên Việt Nam 🇻🇳 - 18đ/1 follow',
      badge: 'green'
    },
    {
      id: 'MC-2',
      name: 'MC-2',
      price: 19.5,
      description: 'Tăng Người Theo Dõi Instagram ~ Ít Tụt ~ Siêu Nhanh ~ VN 🔥 - 19.5đ/1 follow',
      badge: 'red'
    }
  ];

  const handleServerChange = (option) => {
    setServer(option.id);
    setPricePerInteraction(option.price);
  };

  return (
    <div className="dvig-container">
      {/* Header */}
      <div className="dvig-header">
        <div className="breadcrumb">
          <span className="instagram-icon"><FaInstagram /></span>
          INSTAGRAM &gt;&gt; TĂNG NGƯỜI THEO DÕI
        </div>
        <div className="header-actions">
          <button className="btn-create-order">KHỞI TẠO ĐƠN HÀNG</button>
          <button className="btn-history">🔍 LỊCH SỬ ĐƠN HÀNG</button>
        </div>
      </div>

      <div className="dvig-main-content">
        {/* Left Column - Form */}
        <div className="dvig-form-column">
          <div className="form-section">
            <div className="form-group">
              <label>Nhập Link Trang Cá Nhân:</label>
              <input 
                type="text" 
                value={link} 
                onChange={e => setLink(e.target.value)} 
                placeholder="Nhập Link Trang Cá Nhân cần mua" 
                className="form-input"
              />
            </div>

            <div className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="multi-order"
                checked={multiOrder}
                onChange={e => setMultiOrder(e.target.checked)}
              />
              <label htmlFor="multi-order">Mua nhiều đơn cùng lúc ~ Chờ trước khi nhập danh sách link</label>
            </div>

            <div className="server-section">
              <h4>Chọn máy chủ:</h4>
              
              {serverOptions.map((option) => (
                <div key={option.id} className="server-option">
                  <label className="server-label">
                    <input 
                      type="radio" 
                      name="server" 
                      checked={server === option.id} 
                      onChange={() => handleServerChange(option)}
                    />
                    <span className={`server-badge ${option.badge}`}>{option.name}</span>
                    <span className="server-description">{option.description}</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Số lượng: (100 ~ 50000)</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="form-input"
                  min="100"
                  max="50000"
                />
              </div>
              <div className="form-group">
                <label>Số tiền mỗi tương tác:</label>
                <input 
                  type="number" 
                  value={pricePerInteraction} 
                  className="form-input"
                  readOnly
                />
              </div>
            </div>

            <div className="form-group">
              <label>Ghi chú:</label>
              <textarea 
                value={note} 
                onChange={e => setNote(e.target.value)} 
                placeholder="Nhập ghi chú nếu cần"
                className="form-textarea"
              />
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" id="schedule" />
              <label htmlFor="schedule">
                Đặt lịch chạy Múi giờ: +07:00 ~ Kiểm tra quá trình ở mục tiến trình đơn hàng
              </label>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" id="auto-repeat" />
              <label htmlFor="auto-repeat">Đặt hàng lặp lại sau khi hoàn thành</label>
            </div>

            <div className="total-section">
              <div className="total-info">
                <p>Tổng thanh toán: <span className="total-amount">{total.toLocaleString()} đ</span></p>
                <p>Bạn sẽ tăng <strong>{quantity.toLocaleString()}</strong> số lượng với giá <strong>{total.toLocaleString()} đ</strong></p>
              </div>
              <button className="btn-create-order-main">Tạo đơn hàng</button>
            </div>
          </div>
        </div>

        {/* Right Column - Info Cards */}
        <div className="dvig-info-column">
          <div className="info-card blue-card">
            <h4>Hướng Dẫn & Ghi Chú:</h4>
            <ul>
              <li>Các máy chủ thuộc dịch vụ việt nam đều sử dụng nguồn tài khoản việt nam</li>
              <li>Nếu máy chủ không đặt được vui lòng nhấp chat hỗ trợ</li>
              <li>Thời gian bắt đầu: 0-30 phút</li>
              <li>Tốc độ: 1000-5000/ngày</li>
            </ul>
          </div>

          <div className="info-card red-card">
            <h4>LƯU Ý!</h4>
            <ul>
              <li>1 ID không mua 2 đơn cùng lúc, mua xong đơn này rồi mới mua đơn khác</li>
              <li>Nghiêm cấm buff nội dung phạm pháp, chính trị, đồi trụy...</li>
              <li>Nếu buff sai, bị phát hiện sẽ bị trừ tiền và bị khóa tài khoản</li>
              <li>Nếu ID sai hoặc thiếu số lượng sẽ không xử lý</li>
              <li>Vui lòng kiểm tra ID trước khi mua, chúng tôi không hoàn tiền</li>
              <li>Đảm bảo tài khoản không ở chế độ riêng tư</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dvig;
