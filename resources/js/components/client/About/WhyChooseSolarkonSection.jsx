import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiCog, HiCurrencyDollar, HiGlobeAlt } from 'react-icons/hi2';
import { motion } from 'framer-motion';

function WhyChooseSolarkonSection() {
  const features = [
    {
      icon: <HiCheckCircle size={28} />,
      title: 'Industry Leader',
      description: 'Industry leader with a proven national footprint.',
    },
    {
      icon: <HiShieldCheck size={28} />,
      title: 'Certified Team',
      description: 'Certified, experienced engineering team.',
    },
    {
      icon: <HiCog size={28} />,
      title: 'Best Technology',
      description: 'Best-in-class technology and global product partnerships.',
    },
    {
      icon: <HiUserGroup size={28} />,
      title: 'Strong Support',
      description: 'Strong post-sales support and maintenance structure.',
    },
    {
      icon: <HiCurrencyDollar size={28} />,
      title: 'Flexible Financing',
      description: 'Flexible financing tailored to customer needs.',
    },
    {
      icon: <HiGlobeAlt size={28} />,
      title: 'Environmental Compliance',
      description: 'Environmental compliance and net metering assistance.',
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5 section-heading">
          <span className="eyebrow">Why Choose Solarkon</span>
          <h2 className="fw-bold section-title mt-3" style={{ fontSize: '2.3rem' }}>
            Why Choose Solarkon?
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '700px' }}>
            With a customer-centric approach and a passion for sustainability, we strive to lead Pakistan's transition toward a clean energy future.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="surface-card h-100 p-4 d-flex align-items-start">
                <div
                  className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: '#E1F6E8',
                    color: '#22C55E',
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.1rem' }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSolarkonSection;
