import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Homeowner',
      quote:
        "SOLARKON transformed my energy consumption! My bills are lower, and I feel great knowing I'm contributing to a sustainable future. The installation was smooth, and their team was incredibly professional and knowledgeable. Highly recommend!",
      image: 'testimonial-1',
    },
    {
      name: 'Jane Smith',
      title: 'Business Owner',
      quote:
        'Switching to solar with SOLARKON was the best decision for our company. We\'ve seen significant cost savings and our customers appreciate our commitment to sustainability.',
      image: 'testimonial-2',
    },
    {
      name: 'Mike Johnson',
      title: 'Property Manager',
      quote:
        'The team at SOLARKON made the entire process seamless. From consultation to installation, everything was handled professionally. Our property value has increased significantly.',
      image: 'testimonial-3',
    },
  ];

  return (
    <section className='section-shell bg-white position-relative overflow-hidden' data-aos='fade-up'>
      <span className='accent-blur' style={{ bottom: '-120px', left: '15%' }}></span>
      <div className='container position-relative'>
        <motion.div
          className='text-center mb-5 section-heading'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className='eyebrow'>Testimonials</span>
          <h2 className='fw-bold section-title mt-3' style={{ fontSize: '2.3rem' }}>
            Success Stories
          </h2>
        </motion.div>

        <div className='mx-auto' style={{ maxWidth: 780 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            spaceBetween={32}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='surface-card border-0 p-4 p-md-5 h-100'>
                  <div className='d-flex flex-column flex-md-row align-items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <div
                        className='rounded-circle border border-light-subtle tilt-float'
                        style={{
                          width: 96,
                          height: 96,
                          backgroundImage:
                            'url(https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </div>
                    <div className='flex-grow-1 text-center text-md-start'>
                      <p className='fst-italic text-muted mb-3'>"{item.quote}"</p>
                      <div>
                        <div className='fw-bold' style={{ color: '#2D5016' }}>
                          {item.name}
                        </div>
                        <div className='text-muted small'>{item.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

