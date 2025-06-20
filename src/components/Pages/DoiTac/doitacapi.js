import React, { useState } from 'react';
import './doitacapi.css';
import { FaSave, FaPlusCircle } from 'react-icons/fa';

const Doitacapi = () => {
  const [apiToken, setApiToken] = useState('');
  const [domain, setDomain] = useState('');
  const [websites, setWebsites] = useState([]);
  const [newSub, setNewSub] = useState('');
  const [newNote, setNewNote] = useState('');

  const handleSave = () => {
    alert(`API token: ${apiToken}, Domain: ${domain}`);
  };

  const handleAddWebsite = () => {
    if (!newSub.trim()) return;
    setWebsites([...websites, { sub: newSub, note: newNote }]);
    setNewSub('');
    setNewNote('');
  };

  return (
    <div className="dt-wrapper">
      {/* LEFT - FORM */}
      <div className="dt-left">
        <h2 className="dt-title">Cấu hình API & Tên miền</h2>

        <div className="dt-section">
          <label>API Token</label>
          <div className="dt-inline">
            <input
              type="text"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              placeholder="Nhập API Token..."
            />
            <button className="dt-btn primary" onClick={handleSave}>
              <FaSave /> Lưu
            </button>
          </div>
        </div>

        <div className="dt-section">
          <label>Tên miền chính</label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="ví dụ: thatim.vn"
          />
        </div>

        <div className="dt-section">
          <label>Thêm Subdomain</label>
          <div className="dt-inline">
            <input
              type="text"
              value={newSub}
              onChange={(e) => setNewSub(e.target.value)}
              placeholder="Tên subdomain (ví dụ: vip)"
            />
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Ghi chú"
            />
            <button className="dt-btn" onClick={handleAddWebsite}>
              <FaPlusCircle /> Thêm
            </button>
          </div>
        </div>

        {websites.length > 0 && (
          <div className="dt-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Subdomain</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {websites.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.sub}</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* RIGHT - GUIDE */}
      <div className="dt-right">
        <h3>Hướng dẫn cấu hình Subdomain</h3>
        <p>1. Vào trình quản lý DNS tên miền của bạn</p>
        <p>2. Tạo bản ghi <strong>CNAME</strong>:</p>
        <ul>
          <li><strong>Host:</strong> vip</li>
          <li><strong>Value:</strong> cname.vercel-dns.com</li>
        </ul>
        <p>Sau đó có thể truy cập: <code>https://use.congdien.pro</code></p>
        <p>Lưu ý: tên miền phải được trỏ về <strong>Vercel</strong>.</p>
      </div>
    </div>
  );
};

export default Doitacapi;
