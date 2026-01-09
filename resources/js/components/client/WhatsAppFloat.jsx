import { useEffect, useState } from 'react';
import whatsappImg from '../../assets/images/whatsappimg.jpg';

function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Show button after page loads
        setIsVisible(true);

        // Check if mobile on initial load
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    const handleWhatsAppClick = () => {
        // Replace with your WhatsApp number (format: country code + number without +)
        const phoneNumber = '923062935768'; // From PDF: +92 306 2935768
        const message = encodeURIComponent('Hello! I am interested in solar solutions.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // Define sizes based on device
    const buttonSize = isMobile ? '50px' : '60px';
    const innerRingSize = isMobile ? '50px' : '60px';
    const outerRingSize = isMobile ? '75px' : '90px';
    const iconPadding = isMobile ? '6px' : '8px';
    const iconImagePadding = isMobile ? '3px' : '4px';

    return (
        <>
            <div
                className="whatsapp-float position-fixed"
                style={{
                    bottom: isMobile ? '15px' : '30px',
                    right: isMobile ? '15px' : '30px',
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
                {/* Blinking Animation Rings */}
                <div
                    className="position-absolute top-50 start-50 rounded-circle"
                    style={{
                        width: innerRingSize,
                        height: innerRingSize,
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
                        width: outerRingSize,
                        height: outerRingSize,
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
                        width: buttonSize,
                        height: buttonSize,
                        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
                        padding: iconPadding,
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
                                padding: iconImagePadding,
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
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `}</style>
        </>
    );
}

export default WhatsAppFloat;
