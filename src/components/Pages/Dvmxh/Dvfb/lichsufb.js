import React from 'react';
import './lichsufb.css';

const LichSuFb = () => {
  return (
    <div className="order-container">
      <div className="header-section">
        <h2 className="title">Đơn Đặt Hàng</h2>
      </div>
      <div className="filter-section">
        <div className="filter-group">
          <label>Số hàng</label>
          <select className="filter-select">
            <option value="5">5 hàng</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Mã đơn hàng</label>
          <select className="filter-select">
            <option value="">---</option>
          </select>
        </div>
        <div className="filter-group">
          <label>ID</label>
          <input type="text" placeholder="" className="filter-input" />
        </div>
        <div className="filter-group">
          <label>Nhập từ hóa đơn kiem</label>
          <input type="text" placeholder="" className="filter-input" />
        </div>
        <button className="search-button">Tìm kiếm</button>
      </div>
      <div className="table-section">
        <table className="order-table">
          <thead>
            <tr>
              <th>Thao Tác</th>
              <th>ID</th>
              <th>Thời Gian</th>
              <th>Object ID</th>
              <th>Máy Chủ</th>
              <th>Bình Luận</th>
              <th>Số Lượng</th>
              <th>Bắt Đầu</th>
              <th>Đã Chạy</th>
              <th>Giá</th>
              <th>Tổng Thanh Toán</th>
              <th>Trạng Thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="12">Không tìm thấy đơn hàng nào</td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <span>Đang xem 0 đơn trong tổng số 0 mục</span>
          <div className="pagination">
            <button className="pagination-button">Trước</button>
            <button className="pagination-button">Sau</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LichSuFb;