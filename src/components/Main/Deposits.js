import React, { useState } from 'react';
import './Deposits.css';

const qrImages = {
  vietcombank: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VCB-034107093450',
  mbbank: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MB-0812985678'
};

const Deposits = () => {
  const [showQR, setShowQR] = useState(false);
  const [qrType, setQrType] = useState('');

  const handleShowQR = (type) => {
    setQrType(type);
    setShowQR(true);
  };

  const handleCloseQR = () => {
    setShowQR(false);
    setQrType('');
  };

  return (
    <div className="deposits-container">
      <div className="bank-info">
        <div className="bank-card vietcombank">
          <span className="bank-logo">MB</span>
          <span className="bank-account">Số tài khoản: 8886662205</span>
          <span className="bank-name">Chủ tài khoản: Đặng Công Diện</span>
          <span className="deposit-amount">Nạp tối thiểu: 10,000 VND</span>
          <span className="note">Nốt nếu 10 phút chưa cộng tiền vui lòng liên hệ admin hỗ trợ</span>
          <button className="deposit-button" onClick={() => handleShowQR('vietcombank')}>NẠP HOẶC NẠP NHANH</button>
        </div>
        <div className="bank-card mb-bank">
          <span className="bank-logo">Momo</span>
          <span className="bank-account">Số tài khoản 0879090221</span>
          <span className="bank-name">Chủ tài khoản: Đặng Công Diện</span>
          <span className="deposit-amount">Nạp tối thiểu: 1,000 VND</span>
          <span className="note">Nốt nếu 10 phút chưa cộng tiền vui lòng liên hệ admin hỗ trợ</span>
          <button className="deposit-button" onClick={() => handleShowQR('mbbank')}>NẠP HOẶC NẠP NHANH</button>
        </div>
      </div>
      <div className="deposit-history">
        <h3 className="history-title">LỊCH SỬ NẠP TIỀN NGÂN HÀNG</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã giao dịch</th>
              <th>Logi giao dịch</th>
              <th>Cổng thanh toán</th>
              <th>Ngân hàng</th>
              <th>Số tiền</th>
              <th>Nội dung</th>
              <th>Thời gian</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TRAN123456</td>
              <td>Logi123</td>
              <td>Vietcombank</td>
              <td>Vietcombank</td>
              <td>50,000 VND</td>
              <td>Nạp tiền</td>
              <td>2025-06-09 22:49:00</td>
              <td><button className="action-button">Xem</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {showQR && (
        <div className="qr-modal">
          <div className="qr-modal-content">
            <span className="qr-modal-close" onClick={handleCloseQR}>&times;</span>
            <h3>Mã QR {qrType === 'vietcombank' ? 'Vietcombank' : 'MB Bank'}</h3>
            <img src={qrImages[qrType]} alt="QR code" className="qr-image" />
            <p>Quét mã QR để nạp nhanh vào tài khoản {qrType === 'vietcombank' ? 'Vietcombank' : 'MB Bank'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposits;