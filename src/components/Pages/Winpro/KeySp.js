import React from 'react';
import './KeySp.css';

const KeySp = () => {
  return (
    <div className="keysp-container">
      <h1 className="keysp-title">Hướng Dẫn Kích Hoạt Key Windows Pro</h1>

      <div className="keysp-step">
        <h2>Bước 1:</h2>
        <p>
          Nhấp vào biểu tượng Windows ở góc dưới bên trái thanh Taskbar để mở menu Bắt đầu. Gõ <strong>"Activation settings"</strong> sau đó ấn <strong>Open</strong>.
        </p>
        <img src="/images/key-buoc1.png" alt="Bước 1 - Mở Activation Settings" className="keysp-image" />
      </div>

      <div className="keysp-step">
        <h2>Bước 2:</h2>
        <p>
          Cửa sổ <strong>Activation</strong> hiện lên. Bạn nhấp vào <strong>"Change product key"</strong> để nhập KEY.
        </p>
        <img src="/images/key-buoc2.png" alt="Bước 2 - Chọn Change Product Key" className="keysp-image" />
      </div>

      <div className="keysp-step">
        <h2>Bước 3:</h2>
        <p>
          Cửa sổ nhập KEY hiện lên. Tại đây bạn nhập <strong>KEY</strong> nhận được sau khi mua hàng tại Shop. Bấm <strong>NEXT</strong> để hoàn thành.
        </p>
        <img src="/images/key-buoc3.png" alt="Bước 3 - Nhập Product Key" className="keysp-image" />
      </div>
    </div>
  );
};

export default KeySp;
