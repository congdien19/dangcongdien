import React, { useState } from 'react';
import './lichsutiktok.css';

function LichSuTiktok() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const statuses = [
    { label: 'Tất cả', value: '' },
    { label: 'Đang xử lý', value: 'processing' },
    { label: 'Đang chạy', value: 'running' },
    { label: 'Hoàn thành', value: 'done' },
    { label: 'Đã huỷ', value: 'cancelled' },
    { label: 'Đã hoàn tiền', value: 'refunded' },
    { label: 'Thất bại', value: 'failed' },
    { label: 'Chờ xử lý', value: 'pending' },
    { label: 'Hoàn tiền một phần', value: 'partial-refund' },
    { label: 'Hoàn thành một phần', value: 'partial-done' }
  ];

  return (
    <div className="lichsu-container">
      <div className="lichsu-header">
        TIKTOK » TĂNG LƯỢT XEM VIDEO
      </div>

      <div className="lichsu-controls">
        <input
          type="text"
          className="input-ma"
          placeholder="🔍 Khởi tạo đơn hàng"
        />
        <button className="btn-lichsu">📋 LỊCH SỬ ĐƠN HÀNG</button>
      </div>

      <div className="lichsu-filter">
        <strong>Tìm kiếm & lọc</strong>
        <div className="filter-status">
          {statuses.map((s) => (
            <button
              key={s.value}
              className={status === s.value ? 'active' : ''}
              onClick={() => setStatus(s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="filter-inputs">
          <select>
            <option value="10">Hiển thị 10</option>
            <option value="20">Hiển thị 20</option>
          </select>
          <input type="date" />
          <input type="date" />
          <input
            type="text"
            placeholder="Nhập mã đơn hàng, link..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn-search">🔍</button>
          <button className="btn-filter">🔵 Áp dụng bộ lọc</button>
        </div>
      </div>

      <div className="lichsu-table">
        <div className="no-orders">
          🔍 Không tìm thấy đơn hàng nào<br />
          Vui lòng thử điều chỉnh bộ lọc của bạn hoặc tạo đơn hàng mới
        </div>
        <button className="btn-taodon">+ Tạo đơn hàng mới</button>
      </div>
    </div>
  );
}

export default LichSuTiktok;
