// Import your default local logos
import canadianLogo from '../../assets/logos/canadiansolar-seeklogo.png';
import froniusLogo from '../../assets/logos/fronius-seeklogo.png';
import goodweLogo from '../../assets/logos/goodwe-seeklogo.png';
import huaweiLogo from '../../assets/logos/huawei-seeklogo.png';

const ClientLogosSection = ({ partnerLogos = [] }) => {
    // 1. Define Defaults
    const defaults = [
        { url: canadianLogo, name: 'Canadian Solar' },
        { url: froniusLogo, name: 'Fronius' },
        { url: goodweLogo, name: 'GoodWe' },
        { url: huaweiLogo, name: 'Huawei' },
    ];

    // 2. Decide what to show
    const displayLogos = partnerLogos.length > 0 ? partnerLogos.map((url) => ({ url, name: 'Partner' })) : defaults;

    // Duplicate 4 times for smooth infinite loop
    const duplicatedLogos = [...displayLogos, ...displayLogos, ...displayLogos, ...displayLogos];

    return (
        <section className="section-shell py-5 bg-white" data-aos="fade-up">
            <div className="container-fluid px-0">
                <div className="mb-4 text-center">
                    <span className="eyebrow" style={{ color: '#166534', backgroundColor: '#D1FAE5' }}>
                        Our Partners
                    </span>
                    <h3 className="fw-bold section-title mt-2" style={{ fontSize: '1.8rem', color: '#14532d' }}>
                        Trusted Brands & Partners
                    </h3>
                </div>

                <div className="partners-slider-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                    {/* FIX 1: Removed 'gap-5' class. We use margin on children instead for perfect math. */}
                    <div
                        className="d-flex align-items-center partners-slider"
                        style={{
                            animation: 'scroll 15s linear infinite',
                            width: 'max-content',
                            display: 'flex',
                            flexWrap: 'nowrap',
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="d-flex align-items-center justify-content-center"
                                // FIX 2: Added 'marginRight: 4rem' to replace gap-5.
                                // Now every item is mathematically identical (width + space).
                                style={{
                                    minWidth: '150px',
                                    height: '80px',
                                    padding: '1rem',
                                    flexShrink: 0,
                                    marginRight: '4rem',
                                }}
                            >
                                <img src={logo.url} alt={logo.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FIX 3: Simplified the keyframes. -25% works perfectly now. */}
            <style>{`
        @keyframes scroll { 
            0% { transform: translateX(0); } 
            100% { transform: translateX(-25%); } 
        }
      `}</style>
        </section>
    );
};

export default ClientLogosSection;
