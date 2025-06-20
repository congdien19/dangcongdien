// src/components/Doimatkhau/Doimatkhau.js
import React from "react";
import "./doimatkhau.css";

function Doimatkhau() {
  return (
    <div className="container py-4" style={{ maxWidth: "12100px" }}>
      <div className="row g-4">
        {/* HỒ SƠ */}
        <div className="col-lg-8">
          <div className="card profile-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Hồ sơ</h5>
                <button className="btn btn-sm btn-primary">🔒 Đổi mật khẩu</button>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label>Họ và tên:</label>
                  <input className="form-control" value="DANG CONG DIEN" disabled />
                </div>
                <div className="col-md-6">
                  <label>Số điện thoại:</label>
                  <input className="form-control" value="0879090221" disabled />
                </div>
                <div className="col-md-6">
                  <label>Tài khoản:</label>
                  <input className="form-control" value="0879090221" disabled />
                </div>
                <div className="col-md-6">
                  <label>Thời gian đăng kí:</label>
                  <input className="form-control" value="2025-06-07 09:55:43" disabled />
                </div>
                <div className="col-md-6">
                  <label>Số dư:</label>
                  <input className="form-control" value="0" disabled />
                </div>
                <div className="col-md-6">
                  <label>Đăng nhập gần đây:</label>
                  <input className="form-control" value="23 giờ trước" disabled />
                </div>
                <div className="col-12">
                  <label>API Token:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      value="DnHAakMQqW7WHiFMDJPpDhCP5oFyY7X"
                      disabled
                    />
                    <button className="btn btn-outline-primary" title="Làm mới">
                      🔄
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BẢO MẬT */}
        <div className="col-lg-4">
          <div className="card profile-card">
            <div className="card-body">
              <h5 className="fw-bold">Bảo mật</h5>
              <hr />
              <div className="mb-3">
                <p className="fw-semibold text-primary mb-1">Xác thực 2 yếu tố</p>
                <button className="btn btn-sm btn-info">Bảo mật 2 bước</button>
              </div>
              <hr />
              <div>
                <p className="fw-semibold text-primary mb-1">Liên kết Telegram</p>
                <p>
                  Trạng thái:{" "}
                  <span className="badge bg-danger">Chưa liên kết</span>
                </p>
                <button className="btn btn-sm btn-info">Liên kết Telegram</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doimatkhau;
