import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiStar, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
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
        "SOLARKON transformed our energy consumption! Our bills are significantly lower, and the installation was smooth. The team was incredibly knowledgeable and guided us through every step.",
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

        {/* Wrapper for Swiper + Arrows */}
        <div className="position-relative" style={{ padding: '0 60px' }}>
            
            {/* Custom Arrows */}
            <div className="swiper-button-custom-prev">
                <HiArrowLeft />
            </div>
            <div className="swiper-button-custom-next">
                <HiArrowRight />
            </div>

            <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active-custom' }}
            navigation={{
                nextEl: '.swiper-button-custom-next',
                prevEl: '.swiper-button-custom-prev',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper rounded-4"
            style={{ overflow: 'hidden' }}
            >
                {testimonials.map((item, index) => (
                // FIX 1: Added 'h-auto' and 'd-flex' to SwiperSlide
                // This forces all slides in a row to stretch to the height of the tallest one.
                <SwiperSlide key={index} className="pb-5 pt-3 px-2 h-auto d-flex">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-100" // Ensure motion div takes full width
                    >
                    <div
                        className="d-flex flex-column rounded-4 p-4 p-md-5 w-100"
                        // FIX 2: Set height to 100% so it fills the stretched slide
                        style={{
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px -10px rgba(20, 83, 45, 0.15)',
                            height: '100%', // Fills the slide height
                            justifyContent: 'space-between',
                            transition: 'transform 0.3s ease',
                            cursor: 'grab',
                        }}
                        onMouseEnter={(e) => {
                             e.currentTarget.style.transform = 'translateY(-5px)';
                             e.currentTarget.style.borderColor = '#22c55e';
                        }}
                        onMouseLeave={(e) => {
                             e.currentTarget.style.transform = 'translateY(0)';
                             e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                    >
                        <div>
                        {/* Rating */}
                        <div className="d-flex gap-1 mb-3">
                            {[...Array(item.rating)].map((_, i) => (
                            <HiStar key={i} size={20} style={{ color: '#FBBF24' }} />
                            ))}
                        </div>

                        {/* Quote */}
                        <p
                            style={{
                            fontStyle: 'italic',
                            color: '#334155',
                            lineHeight: 1.6,
                            fontSize: '1.05rem',
                            }}
                        >
                            "{item.quote}"
                        </p>
                        </div>

                        {/* Author */}
                        <div className="d-flex align-items-center gap-3 pt-4 border-top" style={{ borderColor: '#f1f5f9' }}>
                        <div
                            className="rounded-circle flex-shrink-0"
                            style={{
                            width: 55,
                            height: 55,
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '2px solid #22c55e',
                            }}
                        />
                        <div className="flex-grow-1">
                            <div style={{ fontWeight: 700, color: '#14532d', fontSize: '1rem' }}>{item.name}</div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{item.title}</div>
                            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>{item.location}</div>
                        </div>
                        </div>
                    </div>
                    </motion.div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>

      <style>{`
        /* CUSTOM ARROWS */
        .swiper-button-custom-prev,
        .swiper-button-custom-next {
            position: absolute;
            top: 45%; /* Moved slightly up to center with Card body, ignoring pagination dots */
            transform: translateY(-50%);
            width: 50px; /* Slightly bigger */
            height: 50px;
            background: #ffffff;
            color: #166534;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Subtle shadow */
            cursor: pointer;
            z-index: 20;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
        }

        .swiper-button-custom-prev:hover,
        .swiper-button-custom-next:hover {
            background: #166534;
            color: #ffffff;
            box-shadow: 0 8px 25px rgba(22, 101, 52, 0.3);
            border-color: #166534;
            transform: translateY(-50%) scale(1.1); /* Pop effect */
        }

        .swiper-button-custom-prev { left: 0px; }
        .swiper-button-custom-next { right: 0px; }

        /* PAGINATION DOTS */
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          margin: 0 5px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active-custom {
          background: #166534;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
            .position-relative { padding: 0 !important; }
            .swiper-button-custom-prev, .swiper-button-custom-next { display: none; }
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;