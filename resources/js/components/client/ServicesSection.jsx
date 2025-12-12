import Card from './Card';
import { HiHomeModern, HiBuildingOffice2, HiBolt, HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

function ServicesSection() {
  const services = [
    {
      icon: <HiHomeModern size={24} />,
      title: 'Residential Solutions',
      description:
        'Supported by a skilled team of engineers and technical specialists across Pakistan, committed to lowering electricity costs and delivering top-tier, cutting-edge solutions for Pakistani communities.',
      image:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBuildingOffice2 size={24} />,
      title: 'Commercial Solutions',
      description:
        'Empower your workplace with efficient solar power systems, effectively replacing high-cost conventional energy.',
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBolt size={24} />,
      title: 'Industrial Solutions',
      description:
        'From factories to warehouses, high-capacity solar systems designed for heavy-load usage. Delivering stable energy and operational savings without compromising performance.',
      image:
        'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Agricultural Solutions',
      description:
        'Transition your farm to dependable, off-grid solar energy ensuring steady power for irrigation, pumping, and operations while slashing expenses. Boost yield and income with clean, cost-effective solutions.',
      image:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section id='services' className='section-shell bg-white' data-aos='fade-up'>
      <div className='container'>
        <div className='text-center mb-5 section-heading'>
          <span className='eyebrow'>Our Services</span>
          <h2 className='fw-bold section-title mt-3' style={{ fontSize: '2.3rem' }}>
            Our Solar Solutions
          </h2>
        </div>

        <div className='row g-4'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className='col-md-6 col-lg-3'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className='h-100 border-0 surface-card'>
                <div
                  className='position-relative rounded-top overflow-hidden'
                  style={{
                    height: 190,
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '1.5rem',
                    borderTopRightRadius: '1.5rem',
                  }}
                >
                  <span className='position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle icon-badge-hover gradient-border' style={{ width: 52, height: 52, background: '#ffffff' }}>
                    {service.icon}
                  </span>
                </div>

                <div className='p-4'>
                  <h3 className='fw-bold mb-2' style={{ color: '#2D5016', fontSize: '1.1rem' }}>
                    {service.title}
                  </h3>
                  <p className='text-muted small mb-3'>{service.description}</p>
                  <a
                    href='#'
                    className='d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold link-underline-hover'
                    style={{ color: '#22C55E' }}
                  >
                    Learn More
                    <HiArrowRight size={16} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

