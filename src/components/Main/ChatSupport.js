import React, { useState } from 'react';
import './ChatSupport.css';

const ChatSupport = () => {
    // State cho form tìm kiếm
    const [searchForm, setSearchForm] = useState({
        orderId: '',
        startDate: '',
        endDate: '',
        status: ''
    });

    // State cho dữ liệu và phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    // Dữ liệu mẫu lịch sử đơn hàng
    const [historyData] = useState([
        {
            id: 1,
            orderId: 'DH001',
            service: 'Facebook Followers',
            link: 'https://facebook.com/example',
            quantity: 1000,
            price: '50,000 VND',
            status: 'Hoàn thành',
            createdDate: '2025-01-15 10:30:00',
            completedDate: '2025-01-15 12:45:00'
        },
        {
            id: 2,
            orderId: 'DH002',
            service: 'Instagram Likes',
            link: 'https://instagram.com/p/example',
            quantity: 500,
            price: '25,000 VND',
            status: 'Đang xử lý',
            createdDate: '2025-01-14 15:20:00',
            completedDate: '-'
        },
        {
            id: 3,
            orderId: 'DH003',
            service: 'YouTube Views',
            link: 'https://youtube.com/watch?v=example',
            quantity: 2000,
            price: '100,000 VND',
            status: 'Hoàn thành',
            createdDate: '2025-01-13 09:15:00',
            completedDate: '2025-01-13 14:30:00'
        },
        {
            id: 4,
            orderId: 'DH004',
            service: 'TikTok Followers',
            link: 'https://tiktok.com/@example',
            quantity: 1500,
            price: '75,000 VND',
            status: 'Đã hủy',
            createdDate: '2025-01-12 16:45:00',
            completedDate: '-'
        },
        {
            id: 5,
            orderId: 'DH005',
            service: 'Facebook Page Likes',
            link: 'https://facebook.com/page/example',
            quantity: 800,
            price: '40,000 VND',
            status: 'Hoàn thành',
            createdDate: '2025-01-11 11:20:00',
            completedDate: '2025-01-11 18:15:00'
        }
    ]);

    // Xử lý thay đổi form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Xử lý tìm kiếm
    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Tìm kiếm với:', searchForm);
            setCurrentPage(1);
        } catch (error) {
            console.error('Lỗi tìm kiếm:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Reset form
    const handleReset = () => {
        setSearchForm({
            orderId: '',
            startDate: '',
            endDate: '',
            status: ''
        });
        setCurrentPage(1);
    };

    // Lọc dữ liệu theo form tìm kiếm
    const filteredData = historyData.filter(item => {
        return (
            (!searchForm.orderId || item.orderId.toLowerCase().includes(searchForm.orderId.toLowerCase())) &&
            (!searchForm.status || item.status === searchForm.status)
        );
    });

    // Phân trang
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Xử lý thay đổi trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Render status badge
    const renderStatusBadge = (status) => {
        const statusClasses = {
            'Hoàn thành': 'status-completed',
            'Đang xử lý': 'status-processing',
            'Đã hủy': 'status-cancelled',
            'Chờ xử lý': 'status-pending'
        };

        return (
            <span className={`status-badge ${statusClasses[status] || 'status-default'}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="history-container">
            <div className="history-wrapper">
                {/* Header */}
                <div className="history-header">
                    <h2 className="history-title">Lịch Sử Đơn Hàng</h2>
                    <p className="history-subtitle">Theo dõi và quản lý lịch sử các đơn hàng của bạn</p>
                </div>

                {/* Search Form */}
                <div className="search-section">
                    <form onSubmit={handleSearch} className="search-form">
                        <div className="search-row">
                            <div className="form-group">
                                <label htmlFor="orderId" className="form-label">Mã đơn hàng</label>
                                <input
                                    type="text"
                                    id="orderId"
                                    name="orderId"
                                    value={searchForm.orderId}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="Nhập mã đơn hàng"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="startDate" className="form-label">Từ ngày</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={searchForm.startDate}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="endDate" className="form-label">Đến ngày</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={searchForm.endDate}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="status" className="form-label">Trạng thái</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={searchForm.status}
                                    onChange={handleInputChange}
                                    className="form-select"
                                >
                                    <option value="">Tất cả</option>
                                    <option value="Hoàn thành">Hoàn thành</option>
                                    <option value="Đang xử lý">Đang xử lý</option>
                                    <option value="Đã hủy">Đã hủy</option>
                                    <option value="Chờ xử lý">Chờ xử lý</option>
                                </select>
                            </div>
                        </div>

                        <div className="search-actions">
                            <button
                                type="submit"
                                className={`search-button ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Đang tìm...
                                    </>
                                ) : (
                                    <>
                                        🔍 Tìm kiếm
                                    </>
                                )}
                            </button>
                            <button
                                type="button"
                                className="reset-button"
                                onClick={handleReset}
                                disabled={isLoading}
                            >
                                🔄 Làm mới
                            </button>
                        </div>
                    </form>
                </div>

                {/* Results Table */}
                <div className="table-section">
                    <div className="table-header">
                        <h3 className="table-title">Kết quả tìm kiếm</h3>
                        <span className="result-count">
                            Tìm thấy {filteredData.length} kết quả
                        </span>
                    </div>

                    <div className="table-wrapper">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã đơn</th>
                                    <th>Dịch vụ</th>
                                    <th>Link</th>
                                    <th>Số lượng</th>
                                    <th>Giá tiền</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tạo</th>
                                    <th>Hoàn thành</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.length > 0 ? (
                                    currentData.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{startIndex + index + 1}</td>
                                            <td className="order-id">{item.orderId}</td>
                                            <td>{item.service}</td>
                                            <td className="link-cell">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    {item.link.length > 30 ? `${item.link.substring(0, 30)}...` : item.link}
                                                </a>
                                            </td>
                                            <td className="quantity">{item.quantity.toLocaleString()}</td>
                                            <td className="price">{item.price}</td>
                                            <td>{renderStatusBadge(item.status)}</td>
                                            <td>{item.createdDate}</td>
                                            <td>{item.completedDate}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn view-btn" title="Xem chi tiết">
                                                        👁️
                                                    </button>
                                                    {item.status === 'Đang xử lý' && (
                                                        <button className="action-btn cancel-btn" title="Hủy đơn">
                                                            ❌
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="no-data">
                                            Không tìm thấy dữ liệu phù hợp
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination">
                            <button
                                className="pagination-btn"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                ‹ Trước
                            </button>
                            
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            
                            <button
                                className="pagination-btn"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Sau ›
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatSupport;
