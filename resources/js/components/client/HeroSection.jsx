import { HiPlay, HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/solarimg-1.webp';

function HeroSection() {

  const stats = [
    { label: 'Solar Installations', value: '10k+' },
    { label: 'Tons of CO2 Reduced', value: '100k' },
    { label: 'Up to Savings', value: '70%' },
  ];

  return (
    <section id='home' className='section-shell position-relative' data-aos='fade-up'>
      <div className='container'>
        <div className='row align-items-center g-4 g-lg-5'>
          <div className='col-lg-6 text-center text-lg-start order-2 order-lg-1'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-3'
            >
              <span className='eyebrow'>New Energy For Our System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className='fw-bold lh-sm mb-3 section-title'
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.4rem)' }}
            >
              <span className='d-block text-dark'>Clean Renewable</span>
              <span style={{ color: '#22c55eff' }}>Limitless Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='text-muted mb-4'
            >
              Switch to solar with SOLARKON and experience cost savings, energy independence, and a
              greener future with a system tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start'
            >
              <button className='btn btn-lg btn-pill btn-primary d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover'>
                Get Free Consultation
                <HiArrowRight size={20} />
              </button>
            </motion.div>

            <div className='d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start'>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className='stat-card text-start'
                >
                  <div className='fw-bold' style={{ fontSize: '1.8rem', color: '#22C55E' }}>
                    {stat.value}
                  </div>
                  <div className='text-muted small text-uppercase'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className='col-lg-6 order-1 order-lg-2'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className='position-relative hero-visual tilt-float'
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className='position-absolute bottom-0 start-0 end-0 p-3 p-md-4'>
                <div className='bg-white rounded-4 shadow p-3 p-md-4'>
                  <div
                    className='rounded-3 position-relative mb-3 gradient-mask'
                    style={{
                      height: 140,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className='position-absolute top-50 start-50 translate-middle'>
                      <div
                        className='d-flex align-items-center justify-content-center rounded-circle shadow icon-badge-hover bg-white'
                        style={{ width: 64, height: 64 }}
                      >
                        <HiPlay size={32} color='#22C55E' style={{ marginLeft: 4 }} />
                      </div>
                    </div>
                  </div>
                  <p className='mb-0 text-muted small'>
                    Unlock the power of solar energy and enjoy long-term advantages.
                  </p>
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

