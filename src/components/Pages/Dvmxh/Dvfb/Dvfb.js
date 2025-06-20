import React, { useState } from 'react';
import './Dvfb.css';
import { FaFacebook } from 'react-icons/fa'; // Import the Facebook icon

const Dvfb = () => {
  const [quantity, setQuantity] = useState(100);
  const [pricePerFollow, setPricePerFollow] = useState(0);
  const [selectedServer, setSelectedServer] = useState('MC-1');

  const servers = [
    {
      id: 'MC-1',
      label: 'Tăng Người Theo Dõi Người Dùng ~ Lên Siêu Nhanh ~ Máy Chủ Xịn Nhất ~ Tài Nguyên Việt Nam',
      speed: '🔥🔥🔥',
      rate: '23đ/1 follow',
    },
    {
      id: 'MC-2',
      label: 'Tăng Người Theo Dõi Via + Beta ~ Lên Nhanh ~ Bảo Hành 7 Ngày ~ Tài Nguyên Việt Nam',
      speed: '🔥🔥',
      rate: '16đ/1 follow',
    },
    {
      id: 'MC-3',
      label: 'Tăng Người Theo Dõi ~ Dạng Beta ~ Lên Nhanh ~ Tài Nguyên Việt Nam',
      speed: '🔥🔥',
      rate: '35đ/1 follow',
    },
  ];

  const totalPrice = quantity * pricePerFollow;

  return (
    <div className="fb-container">
      <div className="fb-left">
        <h2 className="fb-title">
          <FaFacebook style={{ marginRight: 8 }} />
          Dịch vụ Facebook-Tăng Tương Tác
        </h2>

        <label className="fb-label">Link hoặc UID trang cá nhân</label>
        <input
          className="fb-input"
          type="text"
          placeholder="https://facebook.com/abc hoặc UID"
        />

        <label className="fb-checkbox">
          <input type="checkbox" /> Mua nhiều đơn cùng lúc
        </label>

        <div className="fb-server-section">
          <label className="fb-label">Chọn máy chủ:</label>
          {servers.map((sv) => (
            <label key={sv.id} className="fb-server-option">
              <input
                type="radio"
                name="server"
                checked={selectedServer === sv.id}
                onChange={() => {
                  setSelectedServer(sv.id);
                  const price = parseInt(sv.rate.split('đ')[0]);
                  setPricePerFollow(price);
                }}
              />
              <div className="fb-server-text">
                <strong>{sv.id}</strong> - {sv.label} <span className="fb-speed">{sv.speed}</span> - <span className="fb-rate">{sv.rate}</span>
              </div>
            </label>
          ))}
        </div>

        <div className="fb-grid">
          <div>
            <label className="fb-label">Số lượng:</label>
            <input
              className="fb-input"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="fb-label">Đơn giá:</label>
            <input className="fb-input" type="number" readOnly value={pricePerFollow} />
          </div>
        </div>

        <label className="fb-label">Ghi chú:</label>
        <textarea className="fb-input" placeholder="Ghi chú nếu cần..." />

        <div className="fb-total">
          Tổng thanh toán: <strong>{totalPrice.toLocaleString('vi-VN')}đ</strong>
        </div>

        <button className="fb-button">Tạo đơn hàng</button>
        <p className="fb-warning">*Vui lòng đọc kỹ lưu ý trước khi mua để tránh lỗi!</p>
      </div>

      <div className="fb-right">
        <div className="fb-video">
          <h3>Video hướng dẫn</h3>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/watch?v=YKtvHWlnVe8"
            title="Hướng dẫn"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="fb-note blue">
          <p>• Dịch vụ sử dụng người thật – chất lượng cao.</p>
          <p>• Nếu gặp lỗi, liên hệ hỗ trợ để được xử lý nhanh.</p>
        </div>

        <div className="fb-note red">
          <strong>Lưu ý:</strong>
          <ul>
            <li>Không tạo 2 đơn cho cùng 1 ID trong thời gian ngắn.</li>
            <li>Không sử dụng cho nội dung vi phạm pháp luật.</li>
            <li>Không hoàn tiền nếu vi phạm điều khoản.</li>
            <li>Kiểm tra kỹ UID trước khi đặt đơn.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dvfb;
