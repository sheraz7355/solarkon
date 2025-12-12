function ClientLogosSection() {
  // Partner brands from PDF - organized by category
  const panels = [
    { name: 'Trina Solar', category: 'Panels' },
    { name: 'Jinko Solar', category: 'Panels' },
    { name: 'Canadian Solar', category: 'Panels' },
    { name: 'Longi', category: 'Panels' },
    { name: 'Astronergy', category: 'Panels' },
  ];

  const inverters = [
    { name: 'ABB', category: 'Inverters' },
    { name: 'Fronius', category: 'Inverters' },
    { name: 'Voltronic Power', category: 'Inverters' },
    { name: 'Tesvolt', category: 'Inverters' },
    { name: 'GoodWe', category: 'Inverters' },
    { name: 'Schneider Electric', category: 'Inverters' },
    { name: 'SMA', category: 'Inverters' },
    { name: 'Solis', category: 'Inverters' },
    { name: 'Huawei', category: 'Inverters' },
  ];

  const batteries = [
    { name: 'Atlas Battery (AGS)', category: 'Batteries' },
    { name: 'Ritar', category: 'Batteries' },
  ];

  const cables = [
    { name: 'Pakistan Cables', category: 'Cables' },
  ];

  const logos = [...panels, ...inverters, ...batteries, ...cables];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className='section-shell py-5 bg-white' data-aos='fade-up'>
      <div className='container'>
        <div className='text-center mb-4'>
          <span className='eyebrow' style={{ color: '#166534', backgroundColor: '#D1FAE5' }}>Our Partners</span>
          <h3 className='fw-bold section-title mt-2' style={{ fontSize: '1.8rem', color: '#14532d' }}>
            Trusted Brands & Partners
          </h3>
          <p className='text-muted mt-2 mx-auto' style={{ maxWidth: '600px' }}>
            We partner with world-leading manufacturers to deliver the best solar solutions
          </p>
        </div>
        <div className='partners-slider-wrapper' style={{ overflow: 'hidden', position: 'relative' }}>
          <div
            className='d-flex align-items-center gap-5 partners-slider'
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'fit-content',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
              key={index}
                className='d-flex align-items-center justify-content-center'
                style={{
                  minWidth: '150px',
                  height: '80px',
                  padding: '1rem',
                  filter: 'grayscale(100%)',
                  opacity: 0.6,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.opacity = '0.6';
                }}
              >
                <span className='fw-semibold text-muted' style={{ fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
                  {logo.name}
                </span>
              </div>
          ))}
        </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default ClientLogosSection;

