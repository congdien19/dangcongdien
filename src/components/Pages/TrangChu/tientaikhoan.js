import React from "react";
import "./tientaikhoan.css";
import { FaMoneyBillWave, FaChartLine, FaPiggyBank, FaUserFriends } from "react-icons/fa";

const data = [
  {
    icon: <FaMoneyBillWave />,
    title: "0đ",
    description: "Số dư hiện tại",
    borderColor: "#49b3f7",
    bgColor: "#eaf6ff",
  },
  {
    icon: <FaPiggyBank />,
    title: "0đ",
    description: "Tổng nạp tháng",
    borderColor: "#f8864a",
    bgColor: "#fff2e9",
  },
  {
    icon: <FaChartLine />,
    title: "0đ",
    description: "Tổng nạp",
    borderColor: "#66c35c",
    bgColor: "#f1fbea",
  },
  {
    icon: <FaUserFriends />,
    title: "Thành viên",
    description: "Cấp độ",
    borderColor: "#49b3f7",
    bgColor: "#eaf6ff",
  },
];

const TienTaiKhoan = () => {
  return (
    <div className="tien-container">
      {data.map((item, index) => (
        <div className="tien-card" key={index}>
          <div
            className="tien-icon"
            style={{ borderColor: item.borderColor, backgroundColor: item.bgColor }}
          >
            <span className="tien-icon-inner">{item.icon}</span>
          </div>
          <div className="tien-info">
            <div className="tien-title">{item.title}</div>
            <div className="tien-desc">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TienTaiKhoan;
