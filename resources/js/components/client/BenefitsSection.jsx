import { HiShieldCheck, HiWrenchScrewdriver, HiAcademicCap } from 'react-icons/hi2';
import { motion } from 'framer-motion';

function BenefitsSection() {
  const benefits = [
    {
      icon: <HiShieldCheck size={24} />,
      title: 'Long-Term Warranties',
      description: 'All systems come with long-term warranties. Quick diagnosis and repair under warranty terms.',
    },
    {
      icon: <HiWrenchScrewdriver size={24} />,
      title: 'Dedicated After-Sales Service',
      description: 'We don\'t just install — we stay with you! Dedicated after-sales service to ensure smooth operation for years.',
    },
    {
      icon: <HiAcademicCap size={24} />,
      title: 'Certified Engineering Team',
      description: 'Certified, experienced engineering team with best-in-class technology and global product partnerships.',
    },
    {
      icon: (
        <svg width='24' height='24' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
      title: 'Environmental Compliance',
      description: 'Environmental compliance and net metering assistance for seamless integration.',
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
                Why Choose Us
              </div>
              <h2 className='fw-bold text-white mb-3' style={{ fontSize: '2.4rem' }}>
              Why Choose Solarkon
              </h2>
              <p className='text-white-50 mb-4'>
                With a customer-centric approach and a passion for sustainability, we strive to lead Pakistan's transition toward a clean energy future.
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

