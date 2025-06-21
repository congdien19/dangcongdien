import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import './Dvfb.css';

const Dvfb = () => {
  const [link, setLink] = useState('');
  const [selectedServer, setSelectedServer] = useState('MC-1');
  const [quantity, setQuantity] = useState(100);
  const [pricePerFollow, setPricePerFollow] = useState(23);
  const [note, setNote] = useState('');
  const [multiOrder, setMultiOrder] = useState(false);

  const serverOptions = [
    {
      id: 'MC-1',
      name: 'MC-1',
      price: 23,
      description: 'Tăng Người Theo Dõi Người Dùng ~ Lên Siêu Nhanh ~ Máy Chủ Xịn Nhất ~ Tài Nguyên Việt Nam 🔥🔥🔥 - 23đ/1 follow',
      badge: 'green'
    },
    {
      id: 'MC-2',
      name: 'MC-2',
      price: 16,
      description: 'Tăng Người Theo Dõi Via + Beta ~ Lên Nhanh ~ Bảo Hành 7 Ngày ~ Tài Nguyên Việt Nam 🔥🔥 - 16đ/1 follow',
      badge: 'blue'
    },
    {
      id: 'MC-3',
      name: 'MC-3',
      price: 35,
      description: 'Tăng Người Theo Dõi ~ Dạng Beta ~ Lên Nhanh ~ Tài Nguyên Việt Nam 🔥🔥 - 35đ/1 follow',
      badge: 'orange'
    }
  ];

  const total = quantity * pricePerFollow;

  const handleServerChange = (server) => {
    setSelectedServer(server.id);
    setPricePerFollow(server.price);
  };

  return (
    <div className="dvfb-container">
      {/* Header */}
      <div className="dvfb-header">
        <div className="breadcrumb">
          <span className="facebook-icon"><FaFacebook /></span>
          FACEBOOK &gt;&gt; TĂNG NGƯỜI THEO DÕI
        </div>
        <div className="header-actions">
          <button className="btn-create-order">KHỞI TẠO ĐƠN HÀNG</button>
          <button className="btn-history">🔍 LỊCH SỬ ĐƠN HÀNG</button>
        </div>
      </div>

      <div className="dvfb-main-content">
        {/* Left Column - Form */}
        <div className="dvfb-form-column">
          <div className="form-section">
            <div className="form-group">
              <label>Link hoặc UID trang cá nhân:</label>
              <input 
                type="text" 
                value={link} 
                onChange={e => setLink(e.target.value)} 
                placeholder="https://facebook.com/abc hoặc UID" 
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
              <label htmlFor="multi-order">Mua nhiều đơn cùng lúc</label>
            </div>

            <div className="server-section">
              <h4>Chọn máy chủ:</h4>
              {serverOptions.map((server) => (
                <div key={server.id} className="server-option">
                  <label className="server-label">
                    <input 
                      type="radio" 
                      name="server" 
                      checked={selectedServer === server.id} 
                      onChange={() => handleServerChange(server)}
                    />
                    <span className={`server-badge ${server.badge}`}>{server.name}</span>
                    <span className="server-description">{server.description}</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Số lượng: (50 ~ 10000)</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="form-input"
                  min="50"
                  max="10000"
                />
              </div>
              <div className="form-group">
                <label>Số tiền mỗi tương tác:</label>
                <input 
                  type="number" 
                  value={pricePerFollow} 
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
                placeholder="Ghi chú nếu cần"
                className="form-textarea"
              />
            </div>

            <div className="total-section">
              <div className="total-info">
                <p>Tổng thanh toán: <span className="total-amount">{total.toLocaleString()} đ</span></p>
                <p>Bạn sẽ tăng <strong>{quantity.toLocaleString()}</strong> số lượng với giá <strong>{total.toLocaleString()} đ</strong></p>
              </div>
              <button className="btn-create-order-main">Tạo đơn hàng</button>
              <p className="warning-text">*Vui lòng đọc kỹ lưu ý trước khi mua để tránh lỗi!</p>
            </div>
          </div>
        </div>

        {/* Right Column - Info Cards */}
        <div className="dvfb-info-column">
          <div className="info-card video-card">
            <h4>Video hướng dẫn</h4>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/YKtvHWlnVe8"
                title="Hướng dẫn sử dụng dịch vụ"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          <div className="info-card blue-card">
            <h4>Hướng Dẫn & Ghi Chú:</h4>
            <ul>
              <li>Dịch vụ sử dụng người thật – chất lượng cao</li>
              <li>Nếu gặp lỗi, liên hệ hỗ trợ để được xử lý nhanh</li>
              <li>Thời gian bắt đầu: 0-30 phút</li>
              <li>Tốc độ: 100-500/ngày</li>
              <li>Dịch vụ chạy 24/7 không nghỉ</li>
            </ul>
          </div>

          <div className="info-card red-card">
            <h4>LƯU Ý!</h4>
            <ul>
              <li>Không tạo 2 đơn cho cùng 1 ID trong thời gian ngắn</li>
              <li>Không sử dụng cho nội dung vi phạm pháp luật</li>
              <li>Không hoàn tiền nếu vi phạm điều khoản</li>
              <li>Kiểm tra kỹ UID trước khi đặt đơn</li>
              <li>Đảm bảo tài khoản không ở chế độ riêng tư</li>
              <li>Vui lòng kiểm tra link trước khi mua</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dvfb;
