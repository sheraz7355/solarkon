function CTASection() {
  return (
    <section className='section-shell position-relative overflow-hidden' data-aos='fade-up'>
      <div
        className='position-absolute top-0 start-50 translate-middle-x'
        style={{
          width: '120%',
          height: '100%',
          background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
          opacity: 0.95,
          zIndex: 0,
        }}
      ></div>
      <div className='container position-relative' style={{ zIndex: 1 }}>
        <div className='text-center mx-auto p-4 p-md-5' style={{ maxWidth: 720 }}>
          <div className='text-uppercase small fw-semibold mb-2' style={{ color: '#D1FAE5' }}>
            Get Started
          </div>
          <h2 className='fw-bold mb-3' style={{ color: '#ffffff', fontSize: '2.2rem' }}>
            Get A Free Quote Today!
          </h2>
          <p className='mb-4' style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem' }}>
            Ready to switch to solar? Contact us today for a free, no-obligation quote. Our team will
            help you find the perfect solar solution for your home or business.
          </p>

          <form className='d-flex flex-column flex-sm-row justify-content-center gap-3 mx-auto' style={{ maxWidth: 480 }}>
            <input 
              type='email' 
              className='form-control' 
              placeholder='Enter your email'
              style={{
                borderRadius: '50px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
              }}
            />
            <button 
              type='submit' 
              className='btn btn-pill px-4'
              style={{ 
                background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)', 
                color: '#ffffff',
                fontWeight: 600,
                border: 'none',
                padding: '0.75rem 2rem',
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

