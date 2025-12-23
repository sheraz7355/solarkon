import React from 'react';
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

  // 2. Decide what to show (Data handling remains unchanged)
  const displayLogos = partnerLogos.length > 0 
    ? partnerLogos.map(url => ({ url, name: 'Partner' })) 
    : defaults;

  // FIX 1: Duplicate the list 4 times instead of 2. 
  // This ensures the track is long enough to never show empty space on wide screens.
  const duplicatedLogos = [
    ...displayLogos, 
    ...displayLogos, 
    ...displayLogos, 
    ...displayLogos
  ];

  return (
    <section className='section-shell py-5 bg-white' data-aos='fade-up'>
      <div className='container'>
        <div className='text-center mb-4'>
           <span className='eyebrow' style={{ color: '#166534', backgroundColor: '#D1FAE5' }}>Our Partners</span>
           <h3 className='fw-bold section-title mt-2' style={{ fontSize: '1.8rem', color: '#14532d' }}>Trusted Brands & Partners</h3>
        </div>

        <div className='partners-slider-wrapper' style={{ overflow: 'hidden', position: 'relative' }}>
          {/* FIX 2: Changed time to 15s (faster) and width to max-content (prevents wrapping) */}
          <div 
            className='d-flex align-items-center gap-5 partners-slider' 
            style={{ 
              animation: 'scroll 15s linear infinite', 
              width: 'max-content',
              display: 'flex',
              flexWrap: 'nowrap'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className='d-flex align-items-center justify-content-center' 
                // FIX 3: Added flex-shrink: 0 to ensure logos stay proper size
                style={{ minWidth: '150px', height: '80px', padding: '1rem', flexShrink: 0 }}
              >
                <img 
                    src={logo.url} 
                    alt={logo.name} 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FIX 4: Changed transform to -25% (because we have 4 sets of data, we loop after 1 set passes) */}
      <style>{`
        @keyframes scroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(calc(-25% - 1.25rem)); } 
        }
        /* Note: The calc(-25% - 1.25rem) accounts for the gap visual alignment if strictly necessary, 
           but -25% usually works perfectly with flex-gap. */
        @keyframes scroll { 
            0% { transform: translateX(0); } 
            100% { transform: translateX(-25%); } 
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;