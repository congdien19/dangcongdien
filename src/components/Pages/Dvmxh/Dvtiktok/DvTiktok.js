import React, { useState } from 'react';
import {
  Input,
  Radio,
  Alert,
  Button,
  Checkbox,
  Typography,
  Badge,
  Card,
  Row,
  Col,
  Divider
} from 'antd';
import { FaTiktok } from 'react-icons/fa';
import './DvTiktok.css';

const { TextArea } = Input;
const { Title, Text } = Typography;

const DvTiktok = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [amount, setAmount] = useState(100);
  const [moneyPerView, setMoneyPerView] = useState(0);
  const [note, setNote] = useState('');
  const [schedule, setSchedule] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const options = [
    {
      label: 'Tăng Lượt Xem Video Tiktok ~ Lên Nhanh ~ Giá Siêu Rẻ ~ Tài Nguyên Việt Nam 🔥🔥 - 0.004đ/1 view',
      value: 'MC-1',
      price: 0.004,
    },
    {
      label: 'Tăng Lượt Xem Video Tiktok ~ Lên Nhanh ~ Tài Nguyên Việt Nam 🔥 - 0.01đ/1 view',
      value: 'MC-2',
      price: 0.01,
    },
    {
      label: 'Tăng Lượt Xem Video Tiktok ~ Tỉ Lệ Tụt Thấp ~ Tài Nguyên Việt Nam 🔥 - 0.017đ/1 view',
      value: 'MC-3',
      price: 0.017,
    },
    {
      label: 'Tăng Lượt Xem Video Tiktok ~ Xu Hướng ~ Xem Video Trong 30 Giây ~ Tài Nguyên Việt Nam 🔥🔥🔥 - 4.089đ/1 view',
      value: 'MC-4',
      price: 4.089,
    },
    {
      label: 'Tăng Lượt Xem Video Bắt Đầu Nhanh ~ Tài Nguyên Việt Nam - 2.5đ/1 view',
      value: 'MC-5',
      price: 2.5,
    },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    const selected = options.find(opt => opt.value === value);
    if (selected) {
      setMoneyPerView(selected.price);
    }
  };

  return (
    <div className="tiktok-full-container">
      <Card bordered={false} style={{ padding: '20px' }}>
        <Title level={4} style={{ textAlign: 'center', marginBottom: 30 }}>
          <FaTiktok style={{ marginRight: 8, color: '#000' }} />
          TIKTOK TĂNG LƯỢT XEM VIDEO
        </Title>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input placeholder="Nhập Link Video cần mua" size="large" />
          </Col>

          <Col span={24}>
            <Checkbox>Mua Nhiều Đơn Cùng Lúc ~ Chọn Trước Khi Nhập Danh Sách Link</Checkbox>
          </Col>

          <Col span={24}>
            <Radio.Group
              onChange={(e) => handleOptionChange(e.target.value)}
              value={selectedOption}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              {options.map((opt) => (
                <Radio value={opt.value} key={opt.value}>
                  <Badge color="green" text={opt.label} />
                </Radio>
              ))}
            </Radio.Group>
          </Col>

          <Col xs={24} sm={12}>
            <Input
              type="number"
              placeholder="Số lượng"
              size="large"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </Col>

          <Col xs={24} sm={12}>
            <Input
              type="number"
              placeholder="Số tiền mỗi tương tác"
              size="large"
              value={moneyPerView}
              onChange={(e) => setMoneyPerView(Number(e.target.value))}
            />
          </Col>

          <Col span={24}>
            <TextArea
              rows={4}
              placeholder="Ghi chú nếu cần"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Col>

          <Col span={24}>
            <Checkbox checked={schedule} onChange={() => setSchedule(!schedule)}>
              Đặt lịch chạy Múi giờ: +07:00
            </Checkbox>
            <br />
            <Checkbox checked={repeat} onChange={() => setRepeat(!repeat)}>
              Đặt hàng lặp lại. Tự động đặt lại đơn hàng sau khi đơn hàng này HOÀN THÀNH
            </Checkbox>
          </Col>

          <Col span={24}>
            <Alert
              message={
                <Text strong style={{ fontSize: 16 }}>
                  Tổng thanh toán: {(amount * moneyPerView).toLocaleString()}đ
                </Text>
              }
              description={`Bạn sẽ tăng ${amount} số lượng với giá ${(amount * moneyPerView).toLocaleString()}đ`}
              type="info"
              showIcon
            />
          </Col>

          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary" size="large">Tạo Đơn Hàng</Button>
          </Col>

          <Col span={24}>
            <Divider />
            <Alert
              className="warning-box"
              message="LƯU Ý!"
              description={
                <ul style={{ paddingLeft: 20 }}>
                  <li>1 ID không mua 2 đơn cùng lúc trong hệ thống !</li>
                  <li>Nghiêm cấm buff các nội dung vi phạm pháp luật, chính trị...</li>
                  <li>Nếu có tình trạng hệ thống bên không chạy, nếu có tình trạng hụt, thì số lượng giữa 2 bên sẽ không được xử lí.</li>
                  <li>Chúng tôi sẽ không thể hoàn tiền nếu sai link hoặc sai ID.</li>
                </ul>
              }
              type="error"
              showIcon
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DvTiktok;
