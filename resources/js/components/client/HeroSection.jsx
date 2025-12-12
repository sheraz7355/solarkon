import { useState, useEffect } from 'react';
import { HiArrowRight, HiCurrencyDollar, HiCreditCard, HiBuildingLibrary, HiDocumentText } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/solarimg-1.webp';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=1000&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const financingOptions = [
    { icon: <HiCurrencyDollar size={24} />, title: 'Self Finance', desc: 'Complete ownership' },
    { icon: <HiCreditCard size={24} />, title: 'Installment Plan', desc: 'Low upfront cost' },
    { icon: <HiBuildingLibrary size={24} />, title: 'Bank Financing', desc: 'Structured EMI plans' },
    { icon: <HiDocumentText size={24} />, title: 'PPA', desc: 'No initial investment' },
  ];

  return (
    <section 
      id='home' 
      className='position-relative' 
      data-aos='fade-up'
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Overlay for better text readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1,
        }}
      ></div>
      
      <div className='container position-relative' style={{ zIndex: 2 }}>
        <div className='row align-items-center g-4 g-lg-5'>
          <div className='col-lg-6 text-center text-lg-start'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-3'
            >
              <span className='eyebrow hero-badge' style={{ backgroundColor: 'rgba(20, 83, 45, 0.3)', color: '#D1FAE5' }}>
                Nature Produces & We Deliver Solar System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className='fw-bold lh-sm mb-3 section-title'
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.4rem)', color: '#ffffff' }}
            >
              Powering a Brighter, Greener Pakistan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='mb-4'
              style={{ color: '#E5F2E0', fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, known for delivering high-performance systems tailored to residential, commercial, industrial, and agricultural needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-4'
            >
              <div className='d-inline-flex align-items-center gap-2 p-3 rounded-3' style={{ backgroundColor: 'rgba(20, 83, 45, 0.3)', border: '1px solid rgba(22, 101, 52, 0.4)' }}>
                <span className='fw-bold' style={{ color: '#D1FAE5', fontSize: '1.2rem' }}>150MW</span>
                <span style={{ color: '#E5F2E0' }}>Pakistan's Largest Solar Project</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <button 
                className='btn btn-lg btn-pill d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover'
                style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', color: '#ffffff', fontWeight: 600, border: 'none' }}
              >
                Get Free Consultation
                <HiArrowRight size={20} />
              </button>
            </motion.div>
          </div>

          <div className='col-lg-6'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className='surface-card rounded-4 p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
                <h3 className='fw-bold mb-3' style={{ color: '#14532d', fontSize: '1.3rem' }}>
                  Flexible Financing Options
                </h3>
                <div className='row g-3 mb-4'>
                  {financingOptions.map((option, index) => (
                    <div key={index} className='col-6'>
                      <div className='d-flex align-items-center gap-2 p-2 rounded-3' style={{ backgroundColor: 'rgba(20, 83, 45, 0.1)', border: '1px solid rgba(20, 83, 45, 0.2)' }}>
                        <div style={{ color: '#166534' }}>{option.icon}</div>
                        <div>
                          <div className='fw-semibold small' style={{ color: '#14532d' }}>{option.title}</div>
                          <div className='text-muted' style={{ fontSize: '0.75rem', color: '#64748b' }}>{option.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image Slider */}
                <div className='position-relative rounded-3 overflow-hidden' style={{ height: '200px' }}>
                  {sliderImages.map((img, index) => (
                    <div
                      key={index}
                      className='position-absolute top-0 start-0 w-100 h-100'
                    style={{
                        backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.8s ease-in-out',
                        zIndex: currentSlide === index ? 1 : 0,
                      }}
                    />
                  ))}
                  {/* Slider Indicators */}
                  <div className='position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-2' style={{ zIndex: 2 }}>
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className='border-0 rounded-circle'
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: currentSlide === index ? '#166534' : 'rgba(255,255,255,0.5)',
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                      </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
