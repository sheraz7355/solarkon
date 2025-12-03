function CTASection() {
  return (
    <section className='section-shell position-relative overflow-hidden' data-aos='fade-up'>
      <div
        className='position-absolute top-0 start-50 translate-middle-x'
        style={{
          width: '120%',
          height: '100%',
          background: 'linear-gradient(135deg, #d1fae5, #f0fdf4)',
          opacity: 0.8,
          zIndex: 0,
        }}
      ></div>
      <div className='container position-relative' style={{ zIndex: 1 }}>
        <div className='text-center mx-auto surface-card p-4 p-md-5' style={{ maxWidth: 720 }}>
          <div className='text-uppercase small fw-semibold mb-2' style={{ color: '#2D5016' }}>
            Get Started
          </div>
          <h2 className='fw-bold mb-3' style={{ color: '#2D5016', fontSize: '2.2rem' }}>
            Get A Free Quote Today!
          </h2>
          <p className='text-muted mb-4'>
            Ready to switch to solar? Contact us today for a free, no-obligation quote. Our team will
            help you find the perfect solar solution for your home or business.
          </p>

          <form className='d-flex flex-column flex-sm-row justify-content-center gap-3 mx-auto' style={{ maxWidth: 480 }}>
            <input type='email' className='form-control cta-field' placeholder='Enter your email' />
            <button type='submit' className='btn btn-pill btn-primary btn-soft-hover px-4'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

