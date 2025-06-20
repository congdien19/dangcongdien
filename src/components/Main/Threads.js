import React, { useState } from 'react';
import { FaClipboardList, FaHistory, FaShoppingCart } from 'react-icons/fa';
import './Threads.css';

const Threads = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [quantity, setQuantity] = useState(100);
  const [pricePerFollow, setPricePerFollow] = useState(0);
  const totalPrice = quantity * pricePerFollow;

  const servers = [
    { id: 'MC-1', name: 'Tốc độ nhanh ~ Việt Nam', price: 43.3 },
    { id: 'MC-2', name: 'Tốc độ nhanh - Ổn định ~ Việt Nam', price: 80.23 },
    { id: 'MC-3', name: 'Tốc độ: 500/ngày ~ Việt Nam', price: 67.24 },
  ];

  return (
    <div className="threads-wrapper">
      {/* Header */}
      <div className="threads-header">
        <h2><FaClipboardList /> THREADS &raquo; TĂNG NGƯỜI THEO DÕI</h2>
        <div className="threads-header-buttons">
          <button className="btn primary"><FaShoppingCart /> KHỞI TẠO ĐƠN</button>
          <button className="btn secondary"><FaHistory /> LỊCH SỬ</button>
        </div>
      </div>

      {/* Form */}
      <div className="threads-form">
        <label>Link Trang Cá Nhân:</label>
        <input type="text" placeholder="Dán link Threads cần tăng người theo dõi" />

        <div className="checkbox">
          <input type="checkbox" id="multi-order" />
          <label htmlFor="multi-order">Mua nhiều đơn cùng lúc</label>
        </div>

        <div className="server-selection">
          <h4>Chọn máy chủ:</h4>
          {servers.map(server => (
            <label key={server.id} className={`server-item ${selectedServer === server.id ? 'selected' : ''}`}>
              <input
                type="radio"
                name="server"
                value={server.id}
                onChange={() => {
                  setSelectedServer(server.id);
                  setPricePerFollow(server.price);
                }}
              />
              <strong>{server.id}</strong> - {server.name}
              <span className="price">({server.price}đ/1 follow)</span>
            </label>
          ))}
        </div>

        <div className="form-grid">
          <div>
            <label>Số lượng:</label>
            <input
              type="number"
              value={quantity}
              min={0}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Giá mỗi follow:</label>
            <input
              type="number"
              value={pricePerFollow}
              min={0}
              onChange={(e) => setPricePerFollow(Number(e.target.value))}
            />
          </div>
        </div>

        <label>Ghi chú:</label>
        <textarea placeholder="Ghi chú nếu có..." />

        <div className="checkbox">
          <input type="checkbox" id="schedule" />
          <label htmlFor="schedule">Đặt lịch chạy ~ Múi giờ +07:00</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="repeat" />
          <label htmlFor="repeat">Tự động lặp lại đơn sau khi hoàn thành</label>
        </div>

        <div className="summary">
          <h4>Tổng thanh toán: <span>{totalPrice.toLocaleString()}đ</span></h4>
          <p>Tăng <strong>{quantity}</strong> người theo dõi với giá <strong>{totalPrice.toLocaleString()}đ</strong></p>
        </div>

        <button className="btn submit"><FaShoppingCart /> TẠO ĐƠN HÀNG</button>
      </div>

      {/* Notes */}
      <div className="note info">
        <p>• Các máy chủ thuộc dịch vụ Việt Nam đều sử dụng nguồn tài khoản Việt Nam, một số máy chủ sử dụng người thật.</p>
        <p>• Nếu máy chủ bị lỗi, vui lòng nhấn vào hỗ trợ để được xử lý nhanh.</p>
      </div>

      <div className="note warning">
        <p>• 1 ID không được tạo 2 đơn cùng lúc.</p>
        <p>• Nghiêm cấm nội dung vi phạm pháp luật, chính trị.</p>
        <p>• Nếu cố tình vi phạm, bạn sẽ bị khóa vĩnh viễn và chịu trách nhiệm pháp lý.</p>
        <p>• Đừng mua song song đơn từ hệ thống khác. Không giải quyết nếu hụt số lượng.</p>
        <p>• Kiểm tra kỹ link/ID trước khi đặt đơn. Một số máy chủ không hoàn tiền nếu sai.</p>
      </div>
    </div>
  );
};

export default Threads;
