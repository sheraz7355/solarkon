import { HiCurrencyDollar, HiArrowTrendingUp, HiGlobeAlt } from 'react-icons/hi2';
import { motion } from 'framer-motion';

function BenefitsSection() {
  const benefits = [
    {
      icon: <HiCurrencyDollar size={24} />,
      title: 'Significant Cost Savings',
      description: 'Reduce your electricity bills by up to 70% with solar power.',
    },
    {
      icon: <HiArrowTrendingUp size={24} />,
      title: 'Energy Independence',
      description: 'Generate your own power and reduce reliance on the grid.',
    },
    {
      icon: <HiGlobeAlt size={24} />,
      title: 'Sustainable Future',
      description: 'Reduce your carbon footprint and contribute to a greener planet.',
    },
    {
      icon: (
        <svg width='24' height='24' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
      title: 'Increase Home Value',
      description: "Boost your property's market value with a solar energy system.",
    },
  ];

  return (
    <section
      id='about'
      className='section-shell section-dark position-relative overflow-hidden'
      data-aos='fade-up'
    >
      <div className='container position-relative'>
        <span className='accent-blur' style={{ top: '-40px', right: '5%' }}></span>
        <div className='row align-items-center g-4 g-lg-5'>
          <div className='col-lg-6 order-2 order-lg-1'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='pe-lg-4'
            >
              <div className='eyebrow mb-3' style={{ background: 'rgba(34,197,94,0.2)' }}>
                // Benefits
              </div>
              <h2 className='fw-bold text-white mb-3' style={{ fontSize: '2.4rem' }}>
              The Benefits Of Going Solar With SOLARKON
              </h2>
              <p className='text-white-50 mb-4'>
                Unlock the power of solar energy and enjoy long-term advantages.
              </p>
              <div className='row g-4'>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className='col-sm-6 d-flex'
                  >
                    <div className='flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3 icon-badge-hover gradient-border' style={{ width: 52, height: 52 }}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className='text-white fw-bold mb-1' style={{ fontSize: '1rem' }}>
                        {benefit.title}
                      </h3>
                      <p className='text-white-50 small mb-0'>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className='col-lg-6 order-1 order-lg-2'>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='gradient-border rounded-4 overflow-hidden shadow-lg tilt-float'
              style={{
                minHeight: 320,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

