import { useState, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

import defaultHeroBg from '../../assets/images/solarimg-1.webp'; 
const defaultSliderImages = [
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
];

function HeroSection({ data }) {
  
  const title = data?.title || "Solar-Kon Best Company"; // Default for testing
  const description = data?.description || "Solarkon Private Limited is a premier solar energy solutions provider.";
  const backgroundImage = data?.image_url || defaultHeroBg;
  const sliderImagesToUse = (Array.isArray(data?.slider_url) && data.slider_url.length > 0) 
    ? data.slider_url 
    : defaultSliderImages;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderImagesToUse.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImagesToUse.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [sliderImagesToUse.length]);

  // --- CUSTOM TITLE STYLING LOGIC ---
  const renderStyledTitle = (text) => {
      if (!text) return null;
      // 1. Get First Letter
      const firstChar = text.charAt(0);
      // 2. Get Last Letter
      const lastChar = text.slice(-1);
      // 3. Get Everything in between
      const middleText = text.slice(1, -1);

      return (
          <span style={{ fontWeight: 800 }}>
              {/* Beautiful Bright Green */}
              <span style={{ color: '#4ade80' }}>{firstChar}</span>
              
              {/* Pure White */}
              <span style={{ color: '#ffffff' }}>{middleText}</span>
              
              {/* Dark Blackish Green */}
              <span style={{ color: '#4ade80' }}>{lastChar}</span>
          </span>
      );
  };

  return (
    <section 
      id='home' 
      className='position-relative' 
      data-aos='fade-up'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Dark Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20, 83, 45, 0.5) 100%)',
          zIndex: 1,
        }}
      ></div>
      
      <div className='container-fluid position-relative px-3 px-lg-5' style={{ zIndex: 2 }}>
        <div className='row align-items-center g-4 g-lg-5'>
          
          {/* --- LEFT CONTENT --- */}
          <div className='col-lg-5 text-center text-lg-start'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-3'
            >
               <span className='fw-bold text-uppercase' 
                    style={{ color: '#86efac', letterSpacing: '2px', fontSize: '0.85rem' }}>
                Nature Produces & We Deliver
              </span>
            </motion.div>

            {/* ARTISTIC TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className='lh-sm mb-3 section-title'
              style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
            >
              {renderStyledTitle(title)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='mb-5'
              style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 300 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <Link 
                href="/contact"
                className='btn btn-lg btn-pill d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover'
                style={{ background: 'linear-gradient(135deg, #166534 0%, #166534 50%, #4ade80 100%)', color: '#ffffff', fontWeight: 600, border: 'none' }}
              >
                Get Free Consultation
                <HiArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* --- RIGHT SLIDER (LINKED TO FINANCING) --- */}
          <div className='col-lg-7'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* WRAPPED IN LINK TO MAKE IT CLICKABLE */}
              <Link href="/financing" className="d-block text-decoration-none">
                  <div 
                    className='surface-card rounded-5 overflow-hidden position-relative' 
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      cursor: 'pointer' // Shows it is clickable
                    }}
                  >
                    <div className='position-relative' style={{ height: '420px' }}>
                      {sliderImagesToUse.map((img, index) => (
                        <div
                          key={index}
                          className='position-absolute top-0 start-0 w-100 h-100'
                          style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            zIndex: currentSlide === index ? 1 : 0,
                          }}
                        />
                      ))}
                      
                      {/* Subtle "Click to view" hint */}
                      <div className="position-absolute top-0 end-0 m-3 badge bg-dark text-white opacity-75 rounded-pill px-3 py-2">
                          View Financing Plans ↗
                      </div>

                      {/* Slider Dots */}
                      <div className='position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-4' style={{ zIndex: 3 }}>
                        {sliderImagesToUse.map((_, index) => (
                          <div
                            key={index}
                            className='rounded-pill transition-all'
                            style={{
                              width: currentSlide === index ? '30px' : '8px',
                              height: '4px',
                              backgroundColor: currentSlide === index ? '#4ade80' : 'rgba(255,255,255,0.5)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;