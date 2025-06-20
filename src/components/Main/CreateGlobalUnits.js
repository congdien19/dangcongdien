import React, { useState } from 'react';
import './CreateGlobalUnits.css';

const CreateGlobalUnits = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Dữ liệu các gói dịch vụ theo mẫu chính xác
    const pricingPlans = [
        {
            id: 1,
            avatar: '/images/icons/mem1.svg', // Replace with actual image path
            price: '500,000',
            currency: 'VND',
            description: 'Giảm giá tùy dịch vụ, tạo website riêng. Không tạo thêm được site cháu, chắt.',
            buttonText: 'Cộng Tac Viên',
            buttonColor: 'cyan'
        },
        {
            id: 2,
            avatar: '/images/icons/mem2.svg', // Replace with actual image path
            price: '10,000,000',
            currency: 'VND',
            description: 'Dành cho doanh nghiệp vừa với nhu cầu mở rộng và tính năng nâng cao. Có thể tạo site cháu.',
            buttonText: 'Đại Lý',
            buttonColor: 'blue'
        },
        {
            id: 3,
            avatar: '/images/icons/mem3.svg', // Replace with actual image path
            price: '200,000,000',
            currency: 'VND',
            description: 'Giải pháp toàn diện cho doanh nghiệp lớn với khối lượng công việc cao. Có thể tạo site cháu, chắt.',
            buttonText: 'Nhà Phân Phối',
            buttonColor: 'green'
        },
        {
            id: 4,
            avatar: '/images/icons/mem4.svg', // Replace with actual image path
            price: '500,000,000',
            currency: 'VND',
            description: 'Giải pháp được thiết kế riêng theo yêu cầu cụ thể của doanh nghiệp. Có thể tạo site cháu, chắt, chút.',
            buttonText: 'Đối Tác VIP',
            buttonColor: 'gray'
        }
    ];

    // Xử lý chọn gói
    const handleSelectPlan = async (plan) => {
        setSelectedPlan(plan.id);
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert(`Đã chọn gói ${plan.price} ${plan.currency}`);
        } catch (error) {
            alert('Có lỗi xảy ra. Vui lòng thử lại!');
        } finally {
            setIsLoading(false);
            setSelectedPlan(null);
        }
    };

    return (
        <div className="create-global-units-container">
            <div className="pricing-wrapper">
                <div className="pricing-grid">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`pricing-card ${selectedPlan === plan.id ? 'loading' : ''}`}
                        >
                            {/* Avatar */}
                            <div className="card-avatar">
                                <div className="avatar-circle">
                                    <img src={plan.avatar} alt="Avatar" className="avatar-image" />
                                </div>
                            </div>

                            {/* Price */}
                            <div className="card-price">
                                <div className="price-amount">{plan.price}</div>
                                <div className="price-currency">{plan.currency}</div>
                            </div>

                            {/* Description */}
                            <div className="card-description">
                                <p className="description-text">{plan.description}</p>
                            </div>

                            {/* Button */}
                            <div className="card-button">
                                <button
                                    className={`select-button ${plan.buttonColor} ${selectedPlan === plan.id && isLoading ? 'loading' : ''}`}
                                    onClick={() => handleSelectPlan(plan)}
                                    disabled={isLoading}
                                >
                                    {selectedPlan === plan.id && isLoading ? (
                                        <>
                                            <span className="loading-spinner"></span>
                                            Đang xử lý...
                                        </>
                                    ) : (
                                        plan.buttonText
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateGlobalUnits;
