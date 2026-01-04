import { useEffect, useState } from 'react';
import whatsappImg from '../../assets/images/whatsappimg.jpg';

function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Show button after page loads
        setIsVisible(true);
    }, []);

    const handleWhatsAppClick = () => {
        // Replace with your WhatsApp number (format: country code + number without +)
        const phoneNumber = '923062935768'; // From PDF: +92 306 2935768
        const message = encodeURIComponent('Hello! I am interested in solar solutions.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <div
                className="position-fixed"
                style={{
                    bottom: '30px',
                    right: '30px',
                    zIndex: 9998,
                    cursor: 'pointer',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
                onClick={handleWhatsAppClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    const button = e.currentTarget.querySelector('div[style*="boxShadow"]');
                    if (button) {
                        button.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.6)';
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    const button = e.currentTarget.querySelector('div[style*="boxShadow"]');
                    if (button) {
                        button.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
                    }
                }}
            >
                {/* Blinking Animation Rings - Multiple rings for better effect */}
                <div
                    className="position-absolute top-50 start-50 rounded-circle"
                    style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
                        opacity: 0.7,
                        animation: 'whatsappPulse 2s infinite',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: -1,
                    }}
                />
                <div
                    className="position-absolute top-50 start-50 rounded-circle"
                    style={{
                        width: '90px',
                        height: '90px',
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
                        opacity: 0.4,
                        animation: 'whatsappPulse 2s infinite 0.5s',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: -2,
                    }}
                />

                {/* WhatsApp Button */}
                <div
                    className="position-relative rounded-circle overflow-hidden"
                    style={{
                        width: '60px',
                        height: '60px',
                        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
                        padding: '8px',
                        animation: 'whatsappButtonBlink 2s infinite',
                    }}
                >
                    <div
                        className="w-100 h-100 rounded-circle overflow-hidden"
                        style={{
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={whatsappImg}
                            alt="WhatsApp"
                            className="w-100 h-100"
                            style={{
                                objectFit: 'contain',
                                padding: '4px',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes whatsappPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
        }
        
        @keyframes whatsappButtonBlink {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 25px rgba(37, 211, 102, 0.8);
          }
        }
        
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `}</style>
        </>
    );
}

export default WhatsAppFloat;
