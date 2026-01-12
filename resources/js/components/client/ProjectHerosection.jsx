import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { router } from '@inertiajs/react'; // Allows clicking "View Project"

const defaultSlides = [
  {
    id: 'demo1',
    title: 'Solar–Powered Healthcare Facility',
    description: 'Installed high-efficiency solar panels across a large-scale eco-friendly healthcare facility.',
    tag: 'Commercial Solar System',
    location: 'Los Angeles, CA - March 2024',
    image: 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'demo2',
    title: 'Green Warehouse Initiative',
    description: 'A high-capacity rooftop solar installation designed to reduce operational costs.',
    tag: 'Off-Grid Solutions',
    location: 'Dallas, Texas - March 2024',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ProjectsHeroSlider({ featuredProjects }) {
  const [index, setIndex] = useState(0);

  // If we have dynamic featured projects, use them. Otherwise, use fallback.
  const slides = (featuredProjects && featuredProjects.length > 0) 
    ? featuredProjects 
    : defaultSlides;

  const slide = slides[index];

  const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  // Helper to go to details page
  const handleViewDetails = () => {
      // Only navigate if it's a real project from DB (has numeric ID)
      if (slide.id && typeof slide.id === 'number') {
          router.visit('/project-details', { data: { id: slide.id } });
      }
  };

  return (
    <section style={styles.wrapper}>
      <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '620px' }}>
        
        {/* CONTENT */}
        <div 
          className="col-lg-5 p-5 d-flex flex-column justify-content-between"
          style={{ backgroundColor: '#022c22', color: '#ffffff' }}
        >
          <div>
            <h1 className="fw-bold mb-4" style={{ fontSize: '38px', lineHeight: 1.2 }}>{slide.title}</h1>
            <p className="text-light opacity-75 fs-6 lh-base mb-4" style={{ maxWidth: '560px' }}>
                {/* Truncate description for slider aesthetics */}
                {slide.description.length > 180 ? slide.description.substring(0, 180) + '...' : slide.description}
            </p>
            
            <div style={styles.divider} />
            
            <span style={{ color: '#bef264', fontWeight: 600, fontSize: '15px' }}>
                {slide.tag}
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap gap-3">
            <span style={{ fontSize: '14px', color: '#e5e7eb' }}>
                {slide.location} {slide.date ? ` - ${slide.date}` : ''}
            </span>

            <div className="d-flex gap-3">
                <button style={styles.arrowBtn} onClick={prev}><FiArrowLeft /></button>
                <button style={styles.arrowBtn} onClick={next}><FiArrowRight /></button>
            </div>
          </div>
          
          {/* View Details Button (Optional, but good UX) */}
          {slide.id && typeof slide.id === 'number' && (
              <button 
                onClick={handleViewDetails}
                className="btn btn-outline-light rounded-pill mt-4 align-self-start"
              >
                  View Case Study
              </button>
          )}
        </div>

        {/* IMAGE */}
        <div className="col-lg-7 p-0 overflow-hidden" style={{ minHeight: '320px' }}>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-100 h-100 object-fit-cover" 
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== STYLES ===================== */
const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: '80px',
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.25)',
    margin: '36px 0',
  },
  arrowBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: 'none',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#022c22',
  },
};