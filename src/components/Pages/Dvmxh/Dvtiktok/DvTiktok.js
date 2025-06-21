import React, { useState } from 'react';
import { FaTiktok } from 'react-icons/fa';
import './DvTiktok.css';

const DvTiktok = () => {
  const [link, setLink] = useState('');
  const [selectedServer, setSelectedServer] = useState('MC-1');
  const [quantity, setQuantity] = useState(100);
  const [pricePerView, setPricePerView] = useState(0.004);
  const [note, setNote] = useState('');
  const [multiOrder, setMultiOrder] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [autoRepeat, setAutoRepeat] = useState(false);

  const serverOptions = [
    {
      id: 'MC-1',
      name: 'MC-1',
      price: 0.004,
      description: 'Tăng Lượt Theo Dõi TikTok ~ Lên Nhanh ~ Giá Siêu Rẻ ~ Tài Nguyên Việt Nam 🔥🔥 - 0.004đ/1 view',
      badge: 'green'
    },
    {
      id: 'MC-2',
      name: 'MC-2',
      price: 0.01,
      description: 'Tăng Lượt Tym Tiktok ~ Lên Nhanh ~ Tài Nguyên Việt Nam 🔥 - 0.01đ/1 view',
      badge: 'green'
    },
    {
      id: 'MC-3',
      name: 'MC-3',
      price: 0.017,
      description: 'Tăng Lượt Mắt Live Tiktok ~ Tỉ Lệ Tụt Thấp ~ Tài Nguyên Việt Nam 🔥 - 0.017đ/1 view',
      badge: 'green'
    },
    {
      id: 'MC-4',
      name: 'MC-4',
      price: 4.089,
      description: 'Tăng Lượt Bình Luận Tiktok ~ Xu Hướng ~ Lượt Tăng Nhanh ~ Tài Nguyên Việt Nam 🔥🔥🔥 - 4.089đ/1 view',
      badge: 'red'
    },
    {
      id: 'MC-5',
      name: 'MC-5',
      price: 2.5,
      description: 'Tăng Lượt Xem Video Bắt Đầu Nhanh ~ Tài Nguyên Việt Nam - 2.5đ/1 view',
      badge: 'blue'
    }
  ];

  const total = quantity * pricePerView;

  const handleServerChange = (server) => {
    setSelectedServer(server.id);
    setPricePerView(server.price);
  };

  return (
    <div className="dvtiktok-container">
      {/* Header */}
      <div className="dvtiktok-header">
        <div className="breadcrumb">
          <span className="tiktok-icon"><FaTiktok /></span>
          TIKTOK &gt;&gt; TĂNG LƯỢT XEM VIDEO
        </div>
        <div className="header-actions">
          <button className="btn-create-order">KHỞI TẠO ĐƠN HÀNG</button>
          <button className="btn-history">🔍 LỊCH SỬ ĐƠN HÀNG</button>
        </div>
      </div>

      <div className="dvtiktok-main-content">
        {/* Left Column - Form */}
        <div className="dvtiktok-form-column">
          <div className="form-section">
            <div className="form-group">
              <label>Nhập Link Video:</label>
              <input 
                type="text" 
                value={link} 
                onChange={e => setLink(e.target.value)} 
                placeholder="Nhập Link Video cần mua" 
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
              <label htmlFor="multi-order">Mua Nhiều Đơn Cùng Lúc ~ Chọn Trước Khi Nhập Danh Sách Link</label>
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
                <label>Số lượng: (100 ~ 1000000)</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="form-input"
                  min="100"
                  max="1000000"
                />
              </div>
              <div className="form-group">
                <label>Số tiền mỗi tương tác:</label>
                <input 
                  type="number" 
                  value={pricePerView} 
                  className="form-input"
                  readOnly
                  step="0.001"
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

            <div className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="schedule"
                checked={schedule}
                onChange={e => setSchedule(e.target.checked)}
              />
              <label htmlFor="schedule">
                Đặt lịch chạy Múi giờ: +07:00 ~ Kiểm tra quá trình ở mục tiến trình đơn hàng
              </label>
            </div>

            <div className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="auto-repeat"
                checked={autoRepeat}
                onChange={e => setAutoRepeat(e.target.checked)}
              />
              <label htmlFor="auto-repeat">
                Đặt hàng lặp lại. Tự động đặt lại đơn hàng sau khi đơn hàng này HOÀN THÀNH
              </label>
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
        <div className="dvtiktok-info-column">
          <div className="info-card blue-card">
            <h4>Hướng Dẫn & Ghi Chú:</h4>
            <ul>
              <li>Các máy chủ thuộc dịch vụ việt nam đều sử dụng nguồn tài khoản việt nam</li>
              <li>Nếu máy chủ không đặt được vui lòng nhấp chat hỗ trợ</li>
              <li>Thời gian bắt đầu: 0-30 phút</li>
              <li>Tốc độ: 1000-5000/ngày</li>
              <li>Dịch vụ chạy 24/7 không nghỉ</li>
            </ul>
          </div>

          <div className="info-card red-card">
            <h4>LƯU Ý!</h4>
            <ul>
              <li>1 ID không mua 2 đơn cùng lúc trong hệ thống !</li>
              <li>Nghiêm cấm buff các nội dung vi phạm pháp luật, chính trị, đồi trụy...</li>
              <li>Nếu có tình trạng hệ thống bên không chạy, nếu có tình trạng hụt, thì số lượng giữa 2 bên sẽ không được xử lí.</li>
              <li>Chúng tôi sẽ không thể hoàn tiền nếu sai link hoặc sai ID.</li>
              <li>Vui lòng kiểm tra kỹ link trước khi đặt đơn</li>
              <li>Đảm bảo video không ở chế độ riêng tư</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DvTiktok;
