import { useState, useEffect } from 'react';
import { HiArrowRight, HiArrowTopRightOnSquare } from 'react-icons/hi2'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';

// Ensure this path matches where your image actually is. 
// Based on previous logs, it might be '../../assets/solarimg-1.webp'
import heroBackground from '../../assets/images/solarimg-1.webp'; 

const defaultSliderImages = [
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
];

function HeroSection({ data }) {
  
  // --- 1. SETUP DATA WITH FALLBACKS ---
  const title = data?.title || "Powering a Brighter, Greener Pakistan";
  const description = data?.description || "Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, known for delivering high-performance systems tailored to residential, commercial, industrial, and agricultural needs.";
  
  const backgroundImage = data?.image_url || heroBackground;

  // --- CRITICAL FIX START ---
  // We strictly check Array.isArray(). 
  // If data.slider_url is a String, this returns false, preventing the crash.
  const sliderImagesToUse = (Array.isArray(data?.slider_url) && data.slider_url.length > 0) 
    ? data.slider_url 
    : defaultSliderImages;
  // --- CRITICAL FIX END ---

  const [currentSlide, setCurrentSlide] = useState(0);

  // --- 2. SLIDER LOGIC ---
  useEffect(() => {
    // Only scroll if we have more than 1 image
    if (sliderImagesToUse.length > 1) {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % sliderImagesToUse.length);
        }, 4000); 
        return () => clearInterval(interval);
    }
  }, [sliderImagesToUse.length]);

  return (
    <section 
      id='home' 
      className='position-relative overflow-hidden' 
      data-aos='fade-up'
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem', 
        paddingBottom: '4rem',
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(90deg, #14532d 0%, rgba(20, 83, 45, 0.85) 60%, rgba(20, 83, 45, 0.4) 100%)',
          zIndex: 1,
        }}
      ></div>
      
      <div className='container position-relative' style={{ zIndex: 2 }}>
        <div className='row align-items-center g-5'>
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className='col-lg-6 text-center text-lg-start'>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='fw-bold lh-tight mb-4'
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-5 text-white-50 lead'
              style={{ maxWidth: '95%', marginInline: 'auto', marginLeft: '0', fontWeight: 300 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <Link href="/contact" 
                className='btn btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center justify-content-center gap-2 text-white border-0'
                style={{ 
                  background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', 
                  boxShadow: '0 8px 20px rgba(22, 163, 74, 0.4)',
                  fontWeight: 600
                }}
              >
                Get Free Consultation
                <HiArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: MODERN SLIDER CARD --- */}
          <div className='col-lg-6'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Link href="/financing" className="text-decoration-none d-block group-hover-trigger">
                <div 
                  className='position-relative rounded-5 overflow-hidden shadow-lg' 
                  style={{ 
                    aspectRatio: '16/10',
                    background: '#000',
                    border: '4px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      // KEY Change: Added key prop to force re-render on slide change
                      key={currentSlide}
                      src={sliderImagesToUse[currentSlide]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      alt="Solar Financing"
                    />
                  </AnimatePresence>

                  <div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex align-items-end justify-content-between"
                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
                    
                    <div>
                      <span className="badge bg-white text-success fw-bold mb-2 px-3 py-2 rounded-pill">
                        <HiArrowTopRightOnSquare className="me-1"/> Financing Available
                      </span>
                      <h4 className="text-white fw-bold mb-0">Explore Our Plans</h4>
                    </div>

                    {/* Pagination Dots */}
                    <div className="d-flex gap-1 mb-2">
                      {sliderImagesToUse.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`rounded-pill transition-all ${currentSlide === idx ? 'bg-success' : 'bg-white'}`}
                          style={{ width: currentSlide === idx ? '24px' : '8px', height: '6px', opacity: currentSlide === idx ? 1 : 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-0 hover-opacity-20 transition-all"></div>
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