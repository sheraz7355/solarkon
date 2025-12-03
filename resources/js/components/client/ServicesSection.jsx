import Card from './Card';
import { HiHomeModern, HiBuildingOffice2, HiBolt, HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

function ServicesSection() {
  const services = [
    {
      icon: <HiHomeModern size={24} />,
      title: 'Residential Solar',
      description:
        "Power your home with clean, renewable energy. Our residential solar solutions are tailored to meet your household's specific needs, ensuring maximum efficiency and savings.",
      image:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBuildingOffice2 size={24} />,
      title: 'Commercial Solar',
      description:
        'Reduce operational costs and demonstrate your commitment to sustainability with our commercial solar solutions designed for businesses of all sizes.',
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
    },
    {
      icon: <HiBolt size={24} />,
      title: 'Industrial Solar',
      description:
        'Scale up your energy production with industrial-grade solar systems that deliver maximum output and reliability for large-scale operations.',
      image:
        'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=900&q=80',
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
              className='col-md-6 col-lg-4'
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

