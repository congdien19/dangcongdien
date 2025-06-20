import React from 'react';
import './thongtingg.css';

const ThongTinGG = () => {
  return (
    <div className="thongtingg-container">
      <h2 className="title">Sự khác biệt của Google AI Ultra</h2>
      <p className="description">
        So với các gói AI khác như <strong>Gemini Advance</strong>, <strong>ChatGPT</strong> hay <strong>Grok</strong>, 
        <span className="highlight"> Google AI Ultra </span> nổi bật nhờ khả năng xử lý dữ liệu đa phương tiện, lập trình phức tạp và tích hợp sâu với Gmail, Google Drive.
        Nếu bạn muốn mua tài khoản Google AI Ultra giá rẻ, <strong>WinGiaRe</strong> là địa chỉ uy tín với tài khoản chính hãng và chi phí tiết kiệm hơn đăng ký trực tiếp.
      </p>

      <div className="product-card">
        <img src="/images/ggai.jpg" alt="Google AI Ultra" className="product-image" />
        <p className="product-title">Google AI Ultra - Tài khoản (1 Tháng)</p>
      </div>

      <h3 className="section-heading">Tính năng vượt trội của Google AI Ultra</h3>
      <ul className="feature-list">
        <li><strong>Flow</strong> – Tạo video bằng AI chất lượng cao từ văn bản hoặc hình ảnh.</li>
        <li><strong>Deep Think</strong> – Hỗ trợ phân tích dữ liệu phức tạp và đưa ra giải pháp tối ưu.</li>
        <li><strong>Veo 3</strong> & <strong>Project Mariner</strong> – Xử lý ảnh, video, và lập trình nâng cao.</li>
      </ul>

      <h3 className="section-heading">Vì sao nên mua tài khoản Google AI Ultra?</h3>

      <div className="reasons">
        <h4>1. Tiết kiệm chi phí</h4>
        <p>
          Giá gốc lên tới <strong>$249.99/tháng</strong>, nhưng bạn có thể sở hữu tài khoản với chi phí thấp hơn qua nền tảng phân phối uy tín, có hỗ trợ kỹ thuật và đảm bảo bản quyền.
        </p>

        <h4>2. Hỗ trợ đa dạng nhu cầu</h4>
        <ul>
          <li>Viết mã lập trình phức tạp với độ chính xác cao.</li>
          <li>Tạo nội dung sáng tạo như bài viết, video, quảng cáo.</li>
          <li>Phân tích dữ liệu lớn để đưa ra chiến lược kinh doanh.</li>
        </ul>

        <h4>3. Tại sao chọn Google AI Ultra?</h4>
        <ul>
          <li>Truy cập <strong>Gemini Ultra</strong> – Mô hình ngôn ngữ AI mạnh mẽ của Google.</li>
          <li>Tạo video với <strong>Veo 3</strong> – Công nghệ text-to-video chất lượng điện ảnh.</li>
          <li>Công cụ nâng cao: <strong>Flow, Whisk, NotebookLM</strong>.</li>
          <li>30TB Google Drive – Lưu trữ dữ liệu khổng lồ.</li>
          <li>Tặng kèm <strong>YouTube Premium</strong>.</li>
        </ul>
      </div>
    </div>
  );
};

export default ThongTinGG;
