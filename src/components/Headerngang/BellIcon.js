import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';

const notifications = [
    {
        id: 1,
        title: "Website Đang Trong Thời Gian Nâng Cấp, Kính Mong Quý Khách Hàng Thông Cảm Về Một Vài Bất Tiện Gặp Phải",
        time: "1 tháng",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
];

const BellIcon = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Đóng popup khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Thêm hiệu ứng rung liên tục cho chuông
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes bell-shake {
                0% { transform: rotate(0deg);}
                10% { transform: rotate(-15deg);}
                20% { transform: rotate(10deg);}
                30% { transform: rotate(-10deg);}
                40% { transform: rotate(6deg);}
                50% { transform: rotate(-4deg);}
                60% { transform: rotate(2deg);}
                70% { transform: rotate(-1deg);}
                80% { transform: rotate(1deg);}
                90% { transform: rotate(0deg);}
                100% { transform: rotate(0deg);}
            }
            .bell-shake {
                animation: bell-shake 1s infinite;
                transform-origin: 50% 0%;
                display: inline-block;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }} ref={ref}>
            <button
                className="icon-button"
                title="Thông báo"
                onClick={() => setOpen((o) => !o)}
                style={{ position: 'relative' }}
            >
                <span className="bell-shake">
                    <Bell size={20} />
                </span>
                {/* Nút đỏ nhỏ */}
                <span
                    style={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        width: 10,
                        height: 10,
                        background: 'red',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        display: 'block'
                    }}
                />
            </button>

{open && (
    <div
        className="bell-notification-popup"
        style={{
            position: 'absolute',
            right: 0,
            top: 36,
            minWidth: 320,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            zIndex: 999,
            padding: 0,
        }}
    >
        <div className="notification-title" style={{ padding: '12px 16px', borderBottom: '1px solid #eee', fontWeight: 600 }}>
            Notifications
        </div>
        {notifications.map((noti) => (
            <div key={noti.id} className="notification-item" style={{ display: 'flex', alignItems: 'center', padding: 16 }}>
                <img
                    src={noti.avatar}
                    alt="avatar"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: 16,
                    }}
                />
                <div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{noti.title}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{noti.time}</div>
                </div>
                <span style={{
                    marginLeft: 'auto',
                    width: 12,
                    height: 12,
                    background: '#2196f3',
                    borderRadius: '50%',
                    display: 'inline-block'
                }} />
            </div>
        ))}
    </div>
)}
        </div>
    );

}
export default BellIcon;