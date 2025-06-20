import React, { useState } from 'react';
import './Youtube.css';
import { FaCheckCircle, FaYoutube } from 'react-icons/fa';

const YoutubeService = () => {
  const [selectedServer, setSelectedServer] = useState(2);
  const [quantity, setQuantity] = useState(500);
  const [pricePerInteraction, setPricePerInteraction] = useState(132);

  const servers = [
    {
      id: 2,
      label: 'Server 2: Bảo hành 30 ngày, [500-1k / 1 ngày]',
      price: 132,
      note: 'Cần 1 video tối thiểu 3 phút. Thời gian bắt đầu: 12h-24h...',
    },
    {
      id: 3,
      label: 'Server 3: Bảo hành 30 ngày, [500 / 1 ngày]',
      price: 182.4,
    },
    {
      id: 4,
      label: 'Server 4: Bảo hành 30 ngày, [10k / 1 ngày]',
      price: 372,
    },
  ];

  const handleServerChange = (server) => {
    setSelectedServer(server.id);
    setPricePerInteraction(server.price);
  };

  const totalPrice = quantity * pricePerInteraction;

  return (
    <div className="yt-wrapper">
      <div className="yt-left">
        <h2 className="yt-title">
          <FaYoutube style={{ marginRight: 8 }} />
          Dịch vụ Youtube
        </h2>
        <div className="yt-box">
          <label>
            <input type="checkbox" /> Mua nhiều đơn cùng lúc
          </label>

          <label className="yt-label">Link Kênh Youtube</label>
          <input
            type="text"
            className="yt-input"
            placeholder="https://www.youtube.com/channel/abc"
          />

          <div className="yt-warning">
            Để có được link Kênh chính xác nhất, bạn hãy vào một video của kênh đó, sau đó nhấn vào tên kênh.
          </div>

          <div className="yt-section">
            <label className="yt-label">Chọn Server</label>

            {servers.map((server) => (
              <label className="yt-server-option" key={server.id}>
                <input
                  type="radio"
                  name="server"
                  checked={selectedServer === server.id}
                  onChange={() => handleServerChange(server)}
                />
                <span className="yt-server-text">
                  {server.label} <b>{server.price}đ</b>{' '}
                  <span className="yt-status">
                    <FaCheckCircle /> Hoạt động
                  </span>
                </span>
                {server.note && <div className="yt-note">{server.note}</div>}
              </label>
            ))}
          </div>

          <div className="yt-section">
            <label>Số lượng</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="yt-input"
            />
          </div>

          <div className="yt-section">
            <label>Giá trên mỗi tương tác</label>
            <input value={pricePerInteraction} readOnly className="yt-input" />
          </div>

          <div className="yt-section">
            <label>Tổng giá</label>
            <input
              value={totalPrice.toLocaleString('vi-VN') + ' VND'}
              readOnly
              className="yt-input"
            />
          </div>

          <div className="yt-section">
            <label>Ghi chú</label>
            <textarea className="yt-input" placeholder="Ghi chú nếu có..." />
          </div>

          <button className="yt-button">Mua</button>
          <p className="yt-warning-text">*Đọc kỹ lưu ý nếu bạn mua lỗi</p>
        </div>
      </div>

      <div className="yt-right">
        <div className="yt-video-box">
          <h3>📺 Video hướng dẫn</h3>
          <div className="yt-video">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Hướng dẫn"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="yt-note-box">
          <h3>📌 Lưu ý:</h3>
          <ul>
            <li>
              <b>Tuyệt đối không mua 1 uid nhiều lần cùng lúc</b> (không đơn đơn mua liên tiếp nếu không có mô tả cho phép)
            </li>
            <li>
              Order bằng link kênh dạng: <br />
              https://www.youtube.com/channel/abc hoặc https://www.youtube.com/@abc
            </li>
            <li>
              Cần bật những video hoặc video bật kênh. Chọn "chỉnh sửa video" → kéo xuống xem thêm tới mục{' '}
              <b>"bật những kênh tương tự"</b> rồi bật.
            </li>
            <li>
              <b>Bật hiện sub khi order:</b> Tuyệt đối không mua cùng lúc nhiều server
            </li>
            <li>Người theo dõi tối thiểu quốc gia.</li>
            <li>
              Đọc cẩn thận hướng dẫn và mô tả trên hệ thống <b>nhấn cho admin để được báo đơn.</b>
            </li>
            <li>
              <b>Mẹo:</b> Sau khi đăng nội dung, vui lòng đợi 5 ngày để Youtube cập nhật đầy đủ dữ liệu → tăng tương tác.
            </li>
            <li>
              <b>Bảo hành:</b> Từ lúc nào bảo hành lúc đó. Bảo hành xong mới được mua đơn mới. Hệ thống tự dựa theo số lượng gốc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YoutubeService;
