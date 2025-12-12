import { motion } from 'framer-motion';

function StorySection() {
  const storyImage =
    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80';

  const highlights = [
    {
      number: '2015',
      title: 'Trusted Solar Partner',
      description:
        'Helping families and businesses transition to clean, renewable energy with tailored solutions.',
    },
    {
      number: '700+',
      title: 'Successful Installations',
      description:
        'Our team understands local regulations, incentives, and conditions to maximize your savings.',
    },
  ];

  return (
    <section 
      id="story" 
      className="position-relative overflow-hidden"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)',
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Image column */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="rounded-4 overflow-hidden position-relative"
              style={{ 
                minHeight: 400,
                boxShadow: '0 20px 60px rgba(20, 83, 45, 0.2)',
              }}
            >
              <div
                className="w-100 h-100"
                style={{
                  minHeight: 400,
                  backgroundImage: `url(${storyImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.3) 0%, rgba(22, 101, 52, 0.2) 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3">
              <span 
                className="eyebrow d-inline-block"
                style={{ 
                  color: '#166534', 
                  backgroundColor: '#D1FAE5',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Our Story
              </span>
            </div>
            <h2 
              className="fw-bold mb-4" 
              style={{ 
                color: '#14532d', 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                lineHeight: 1.3,
              }}
            >
              Powering A Greener Future, One Roof At A Time
            </h2>
            <p 
              className="mb-4" 
              style={{ 
                color: '#1e293b', 
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              SOLARKON was founded with a simple mission: make clean, affordable solar energy accessible
              to everyone. From the first consultation to ongoing support, we handle every step so you
              can enjoy worry-free solar for years to come.
            </p>

            <div className="row g-4 mt-4">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="col-12 col-sm-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div 
                    className="h-100 rounded-4 p-4"
                    style={{
                      background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
                      border: 'none',
                      boxShadow: '0 10px 40px rgba(20, 83, 45, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 15px 50px rgba(20, 83, 45, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(20, 83, 45, 0.2)';
                    }}
                  >
                    <div 
                      className="fw-bold mb-2" 
                      style={{ 
                        color: '#22C55E', 
                        fontSize: '2rem',
                        lineHeight: 1,
                      }}
                    >
                      {item.number}
                    </div>
                    <h3 
                      className="fw-bold mb-2" 
                      style={{ 
                        fontSize: '1.2rem', 
                        color: '#ffffff',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="mb-0" 
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
