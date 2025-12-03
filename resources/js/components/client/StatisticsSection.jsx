import { motion } from 'framer-motion';

function StatisticsSection() {
  const stats = [
    { number: '10k+', label: 'Solar Installations' },
    { number: '100k', label: 'Tons of CO2 Reduced' },
    { number: '70%', label: 'Up to Savings' },
  ];

  return (
    <section className='section-shell' data-aos='fade-up'>
      <div className='container'>
        <div className='row g-3 g-lg-4 text-center'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className='col-12 col-md-4'
            >
              <div className='stat-card h-100'>
                <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                  {stat.number}
                </div>
                <div className='text-muted small text-uppercase'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;

