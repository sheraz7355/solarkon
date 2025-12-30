import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

function ServicesShowcase({ data }) {
  // Fallback data if DB is empty
  const headingGreen = data?.heading_green || "Our services";
  const headingDark = data?.heading_dark || "in the field of photovoltaics & renewable energies";
  const description = data?.description || "We plan and install photovoltaic systems for roofs, carports, and PV fences.";
  
  const services = (data?.services && data.services.length > 0) ? data.services : [
    { title: 'PV Roof Systems', image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=600&q=80' },
    { title: 'In-Roof Systems', image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=600&q=80' },
    { title: 'PV Fences', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Solar Carports', image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section className="section-shell py-5 bg-white">
      <div className="container py-4">
        <div className="row g-5 align-items-stretch">
          
          {/* LEFT SIDE: TEXT */}
          <div className="col-lg-4 d-flex flex-column justify-content-center text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-4 fw-bold mb-0" style={{ color: '#4ade80', lineHeight: 1 }}>
                {headingGreen}
              </h2>
              <h3 className="h4 fw-bold mb-4" style={{ color: '#166534' }}>
                {headingDark}
              </h3>
              
              <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                {description}
              </p>

              <Link 
                href="/solutions" 
                className="btn btn-pill px-5 py-3 fw-bold shadow-lg"
                style={{
                  backgroundColor: '#4ade80',
                  color: '#052e16',
                  border: 'none',
                  borderRadius: '50px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                MORE DETAILS
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE: EXPANDING CARDS */}
          <div className="col-lg-8">
            <div className="service-accordion d-flex flex-column flex-md-row gap-3 h-100" style={{ minHeight: '500px' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 h-50 d-flex align-items-end justify-content-center pb-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(22, 101, 52, 0.95) 0%, transparent 100%)'
                    }}
                  >
                    <h4 className="text-white fw-bold text-center px-2 mb-0 text-shadow">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* UTILITIES */
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }

        /* DESKTOP STYLES (Min-width: 768px) */
        @media (min-width: 768px) {
            .service-accordion .service-card {
                flex: 1; 
                transition: flex 0.5s ease-in-out;
                cursor: pointer;
            }
            
            /* The hover expansion only happens here */
            .service-accordion .service-card:hover {
                flex: 3; 
            }
        }

        /* MOBILE STYLES (Max-width: 767px) */
        @media (max-width: 767px) {
            .service-accordion {
                min-height: auto !important; /* Reset fixed height container */
            }
            .service-accordion .service-card {
                flex: none;
                width: 100%;
                height: 200px;
                transition: none; /* No animation needed on mobile */
            }
            /* Explicitly disable hover effects on mobile to prevent blinking */
            .service-accordion .service-card:hover {
                flex: none;
            }
        }
      `}</style>
    </section>
  );
}

export default ServicesShowcase;