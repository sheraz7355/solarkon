import { useForm } from '@inertiajs/react';
import { HiArrowRight } from 'react-icons/hi2';

function CTASection() {
  const { data, setData, post, processing } = useForm({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    post('/userDetails', {
      onSuccess: () => alert('Request Sent Successfully! We will contact you shortly.'),
    });
  };

  return (
    <section className='section-shell py-5' data-aos='fade-up'>
      <div className='container d-flex justify-content-center'>
        <div
          className='cta-card position-relative w-100'
          style={{
            maxWidth: '650px',
            background: 'linear-gradient(135deg, #d9f99d 0%, #bbf7d0 100%)',
            boxShadow: '0 15px 30px -5px rgba(187, 247, 208, 0.6)',
            border: '1px solid #bbf7d0',
            borderRadius: '24px',
            padding: '2.5rem 1.5rem',
          }}
        >
          <div className="text-center position-relative" style={{ zIndex: 2 }}>
            <h2 className="fw-bold mb-3"
                style={{
                  color: '#14532d',
                  fontSize: '1.75rem',
                  lineHeight: 1.2,
                  marginTop: '0.5rem'
                }}>
              Ready To Go Solar? Let's Talk!
            </h2>
            <p className="mb-4 mx-auto"
               style={{
                 color: '#166534',
                 fontSize: '0.95rem',
                 fontWeight: 500,
                 maxWidth: '480px'
               }}>
              Fill out the form below and we will get back to you with a free quote.
            </p>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mx-auto w-100">
              <div className="d-flex flex-column flex-md-row gap-3">
                <input 
                  type="text" placeholder="Your Name" className="form-control border-0"
                  value={data.name} onChange={e => setData('name', e.target.value)}
                  style={{
                    borderRadius: '12px', padding: '0.8rem 1.2rem',
                    fontSize: '0.95rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', flex: 1
                  }}
                  required
                />
                <input 
                  type="tel" placeholder="Phone Number" className="form-control border-0"
                  value={data.phone} onChange={e => setData('phone', e.target.value)}
                  style={{
                    borderRadius: '12px', padding: '0.8rem 1.2rem',
                    fontSize: '0.95rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', flex: 1
                  }}
                  required
                />
              </div>

              <input 
                type="email" placeholder="Email Address" className="form-control border-0"
                value={data.email} onChange={e => setData('email', e.target.value)}
                style={{
                  borderRadius: '12px', padding: '0.8rem 1.2rem',
                  fontSize: '0.95rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}
                required
              />

              <button
                type="submit" disabled={processing}
                className="btn d-flex align-items-center justify-content-center gap-2 w-100 mt-2"
                style={{
                  backgroundColor: '#14532d',
                  color: '#ffffff',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.8rem',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(20, 83, 45, 0.2)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {processing ? 'Sending...' : 'Schedule Free Call'}
                {!processing && <HiArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-card {
            padding: 2rem 1rem !important;
          }

          form .d-flex.flex-md-row {
            flex-direction: column !important;
          }

          form input {
            width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .cta-card {
            padding: 1.5rem 1rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }

          p {
            font-size: 0.9rem !important;
          }

          button {
            font-size: 0.95rem !important;
            padding: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default CTASection;
