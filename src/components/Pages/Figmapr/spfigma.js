
import React from 'react';
import './spfigma.css';

const SpFigma = () => {
  return (
    <div className="spfigma-container">
      <h1 className="spfigma-title">Figma là gì?</h1>

      <section className="spfigma-section">
        <p>
          <strong>Figma</strong> là trình chỉnh sửa đồ họa trực tuyến (UI/UX) đa nền tảng cho công việc cộng tác. Chương trình cho phép bạn tạo wireframe, giao diện người dùng, nguyên mẫu của trang web và ứng dụng.
        </p>
        <p>
          Trình chỉnh sửa cho phép bạn thiết lập công việc cộng tác, giám sát quy trình làm việc, thực hiện và thảo luận các chỉnh sửa, cả trong trình duyệt và thông qua ứng dụng trên máy tính của bạn.
        </p>
      </section>

      <section className="spfigma-section">
        <h2 className="spfigma-subtitle">Một số tính năng nổi bật của Figma</h2>

        <h3>Chế độ đa người dùng</h3>
        <p>
          Có cơ hội thành lập nhóm của bạn để hợp tác hơn nữa trong dịch vụ.
        </p>

        <h3>Nhiều thành phần tích hợp</h3>
        <p>
          Tại đây bạn có thể tạo nhiều phần tử theo cùng một phong cách cùng một lúc. Bạn cũng có thể thay đổi tất cả chúng cùng một lúc trong toàn bộ bố cục — điều mà các trình chỉnh sửa đồ họa khác thường không hỗ trợ.
        </p>

        <h3>Tích hợp với các dịch vụ khác nhau</h3>
        <p>
          Bạn có thể chuyển tất cả các dự án của mình từ các trình chỉnh sửa khác mà không làm mất phông chữ, hình ảnh hoặc bố cục. Có thể tích hợp với Slack, Confluence, và nhiều dịch vụ khác.
        </p>

        <h3>Sử dụng thông qua trình duyệt hoặc ứng dụng</h3>
        <p>
          Figma hoạt động trực tiếp trong trình duyệt hoặc thông qua ứng dụng chính thức. Chỉ cần đăng nhập và có kết nối Internet ổn định là bạn có thể bắt đầu làm việc.
        </p>

        <h3>Khả năng thích ứng</h3>
        <p>
          Figma có thể được sử dụng trên nhiều thiết bị như điện thoại, máy tính bảng, máy tính cá nhân và thậm chí là đồng hồ thông minh.
        </p>

        <h3>Xem lịch sử phiên bản</h3>
        <p>
          Mọi phiên bản chỉnh sửa đều được lưu lại trong 30 ngày. Bạn có thể quay lại các phiên bản trước đó, thêm tên và mô tả cho từng phiên bản.
        </p>

        <h3>Lưu trữ tập tin trên đám mây</h3>
        <p>
          Không cần phải tải xuống sau mỗi lần thay đổi. Tất cả dữ liệu sẽ được lưu trữ tự động trên đám mây.
        </p>
      </section>
    </div>
  );
};

export default SpFigma;
