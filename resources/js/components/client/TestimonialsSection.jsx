import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmed Khan',
      title: 'Industrial Owner',
      location: 'Lahore',
      quote:
        "SOLARKON transformed our energy consumption! Our bills are significantly lower, and the installation was smooth and professional. The team was incredibly knowledgeable and guided us through every step. Highly recommend!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Fatima Ali',
      title: 'Business Owner',
      location: 'Karachi',
      quote:
        "Switching to solar with SOLARKON was the best decision for our company. We've seen significant cost savings and our customers appreciate our commitment to sustainability. The ROI has been excellent!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Hassan Malik',
      title: 'Property Manager',
      location: 'Islamabad',
      quote:
        "The team at SOLARKON made the entire process seamless. From consultation to installation, everything was handled professionally. Our property value has increased significantly, and maintenance is hassle-free.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sara Ahmed',
      title: 'Homeowner',
      location: 'Faisalabad',
      quote:
        "Excellent service from start to finish! SOLARKON helped us choose the perfect system for our home. The installation was quick, and we're already seeing great savings on our electricity bills.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              color: '#166534',
              backgroundColor: '#D1FAE5',
              padding: '0.5rem 1.2rem',
              borderRadius: '25px',
              fontWeight: 600,
              fontSize: '0.85rem',
            }}
          >
            Success Stories
          </span>
          <h2 style={{ fontSize: '2.3rem', color: '#14532d', fontWeight: 700, marginTop: '1rem' }}>
            What Our Clients Say
          </h2>
          <p style={{ color: '#1e293b', maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Trusted by hundreds of satisfied customers across Pakistan
          </p>
        </motion.div>

        {/* Swiper */}
          <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active-custom' }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="d-flex flex-column rounded-4 p-4 p-md-5"
                  style={{
                    background: '#ffffff',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 10px 40px rgba(20, 83, 45, 0.1)',
                    minHeight: '420px', // consistent height
                    display: 'flex',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(20, 83, 45, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(20, 83, 45, 0.1)';
                  }}
                >
                  <div>
                    {/* Rating Stars */}
                    <div className="d-flex gap-1 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <HiStar key={i} size={20} style={{ color: '#FBBF24' }} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      style={{
                        fontStyle: 'italic',
                        color: '#1e293b',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                        maxHeight: '120px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="d-flex align-items-center gap-3 pt-3 border-top" style={{ borderColor: '#e2e8f0' }}>
                      <div
                        className="rounded-circle flex-shrink-0"
                        style={{
                          width: 60,
                          height: 60,
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          border: '3px solid #166534',
                        }}
                      />
                    <div className="flex-grow-1">
                      <div style={{ fontWeight: 700, color: '#14532d', fontSize: '1.1rem' }}>{item.name}</div>
                      <div className="text-muted">{item.title}</div>
                      <div style={{ fontSize: '0.85rem', color: '#166534' }}>{item.location}</div>
                      </div>
                    </div>
                  </div>
              </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      {/* Custom Styles */}
      <style>{`
        /* Pagination bullets */
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active-custom {
          background: #166534;
          width: 32px;
          border-radius: 6px;
        }

        /* Navigation buttons circular with icon */
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 8px 20px rgba(20, 83, 45, 0.3);
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 25px rgba(20, 83, 45, 0.5);
          background: linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%);
        }

        .testimonials-swiper .swiper-button-next::after,
        .testimonials-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        /* Adjust position slightly outside */
        .testimonials-swiper .swiper-button-prev { left: -25px; }
        .testimonials-swiper .swiper-button-next { right: -25px; }

        /* Swiper container padding */
        .testimonials-swiper { padding: 1rem 0; position: relative; }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
