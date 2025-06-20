import React, { useState } from 'react';

const LoginButton = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setIsRegister(false); // Mặc định về đăng nhập
  };

  const switchToRegister = () => {
    setIsRegister(true);
  };

  const switchToLogin = () => {
    setIsRegister(false);
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/v20.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URL';
  };

  return (
    <>
      <button className="login-modal-button" onClick={toggleLoginForm}>
        Đăng nhập
      </button>

      {showLoginForm && (
        <div className="login-modal-overlay" onClick={toggleLoginForm}>
          <div className="login-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* NÚT ĐÓNG (X) */}
            <button className="login-modal-close" onClick={toggleLoginForm}>
              &times;
            </button>

            <h2 className="login-modal-title">
              {isRegister ? 'ĐĂNG KÝ TÀI KHOẢN' : 'ĐĂNG NHẬP'}
            </h2>

            {!isRegister ? (
              <>
                <form className="login-modal-form">
                  <label className="login-modal-label">Email</label>
                  <input type="email" placeholder="abc@gmail.com" className="login-modal-input" required />

                  <label className="login-modal-label">Mật khẩu</label>
                  <input type="password" placeholder="****" className="login-modal-input" required />

                  <div className="login-modal-options">
                    <label className="remember-me">
                      <input type="checkbox" /> Lưu tài khoản
                    </label>
                    <a href="#" className="login-modal-forgot">Quên mật khẩu?</a>
                  </div>

                  <button type="submit" className="login-modal-submit">ĐĂNG NHẬP</button>
                </form>

                <div className="login-modal-divider">
                  <span>Hoặc đăng nhập bằng</span>
                </div>

                <div className="login-modal-social">
                  <button className="login-facebook" onClick={handleFacebookLogin}>
                    Facebook
                  </button>
                  <button className="login-google">Google</button>
                </div>

                <div className="login-modal-register">
                  <p>Bạn chưa có tài khoản?</p>
                  <button className="login-register-button" onClick={switchToRegister}>
                    Đăng ký tài khoản
                  </button>
                </div>
              </>
            ) : (
              <>
                <form className="login-modal-form">
                  <label className="login-modal-label">Họ và tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="login-modal-input" required />

                  <label className="login-modal-label">Email</label>
                  <input type="email" placeholder="abc@gmail.com" className="login-modal-input" required />

                  <label className="login-modal-label">Mật khẩu</label>
                  <input type="password" placeholder="Tạo mật khẩu" className="login-modal-input" required />

                  <label className="login-modal-label">Xác nhận mật khẩu</label>
                  <input type="password" placeholder="Nhập lại mật khẩu" className="login-modal-input" required />

                  <button type="submit" className="login-modal-submit">ĐĂNG KÝ</button>
                </form>

                <div className="login-modal-divider">
                  <span>Đã có tài khoản?</span>
                </div>

                <div className="login-modal-register">
                  <p>Quay lại trang đăng nhập</p>
                  <button className="login-register-button" onClick={switchToLogin}>
                    Đăng nhập
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
