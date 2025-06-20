// File: Dvig.js
import React, { useState } from 'react';
import './Dvig.css';

const Dvig = () => {
  const [link, setLink] = useState('');
  const [server, setServer] = useState('MC-1');
  const [quantity, setQuantity] = useState(100);
  const [pricePerInteraction, setPricePerInteraction] = useState(0);
  const [note, setNote] = useState('');

  const total = quantity * pricePerInteraction;

  return (
    <div className="dvig-container">
      <div className="dvig-header">
        <span className="breadcrumb">INSTAGRAM &gt;&gt; TĂNG NGƯỜI THEO DÕI</span>
        <div className="btns">
          <button className="btn-create">KHỞtẠO ĐƠN HÀNG</button>
          <button className="btn-history">🔍 LỊch Sử Đơn Hàng</button>
        </div>
      </div>

      <div className="dvig-main">
        <div className="dvig-form">
          <label>Nhập Link Trang Cá Nhân:</label>
          <input type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="Nhập Link Trang Cá Nhân cần mua" />

          <div className="toggle-row">
            <input type="checkbox" id="multi-order" /> <label htmlFor="multi-order">Mua nhiều đơn cùng lúc ~ Chờ trước khi nhập danh sách link</label>
          </div>

          <div className="server-section">
            <p>Chọn máy chủ:</p>
            <label>
              <input type="radio" name="server" checked={server === 'MC-1'} onChange={() => setServer('MC-1')} />
              <span className="server-label green">MC-1</span> Tăng Người Theo Dõi Instagram ~ Tốc Độ Nhanh ~ Tài Nguyên Việt Nam vn - 18đ/1 follow
            </label>
            <label>
              <input type="radio" name="server" checked={server === 'MC-2'} onChange={() => setServer('MC-2')} />
              <span className="server-label red">MC-2</span> Tăng Người Theo Dõi Instagram ~ Ít Tụt ~ Siêu Nhanh ~ VN 🔥 - 19.5đ/1 follow
            </label>
          </div>

          <div className="form-row">
            <div>
              <label>Số lượng: (0 ~ 0)</label>
              <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            </div>
            <div>
              <label>Số tiền mỗi tương tác:</label>
              <input type="number" value={pricePerInteraction} onChange={e => setPricePerInteraction(Number(e.target.value))} />
            </div>
          </div>

          <label>Ghi chú:</label>
          <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Nhập ghi chú nếu cần"></textarea>

          <div className="toggle-row">
            <input type="checkbox" id="schedule" /> <label htmlFor="schedule">Đặt lịch chạy Múi giờ: +07:00 ~ Kiểm tra quá trình ở mục tiến trình đơn hàng</label>
          </div>

          <div className="toggle-row">
            <input type="checkbox" id="auto-repeat" /> <label htmlFor="auto-repeat">Đặt hàng lặp lại sau khi hoàn thành</label>
          </div>

          <div className="total-box">
            <p>Tổng thanh toán: <strong>{total} đ</strong></p>
            <p>Bạn sẽ tăng <strong>{quantity}</strong> số lượng với giá <strong>{total} đ</strong></p>
          </div>

          <button className="btn-submit">Tạo đơn hàng</button>
        </div>

        <div className="dvig-guide">
          <div className="note blue">
            <h4>Hướng Dẫn & Ghi Chú:</h4>
            <ul>
              <li>Các máy chủ thuộc dịch vụ việt nam đều sử dụng nguồn tài khoản việt nam</li>
              <li>Nếu máy chủ không đặt được vui lòng nhấp chat hỗ trợ</li>
            </ul>
          </div>
          <div className="note red">
            <h4>LƯU Ý!</h4>
            <ul>
              <li>1 ID không mua 2 đơn cùng lúc, mua xong đơn này rồi mới mua đơn khác</li>
              <li>Nghiêm cấm buff nội dung phạm pháp, chính trị, đò truy...</li>
              <li>Nếu buff sai, bị phát hiện sẽ bị trừ tiền và bị khoá tài khoản</li>
              <li>Nếu ID sai hoặc thiếu số lượng sẽ không xử lý</li>
              <li>Vui lòng kiểm tra ID trước khi mua, chúng tôi không hoàn tiền</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dvig;
