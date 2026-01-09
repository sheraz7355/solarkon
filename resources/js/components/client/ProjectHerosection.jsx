import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const slides = [
  {
    title: 'Solar–Powered Healthcare Facility',
    description:
      'Installed high-efficiency solar panels across a large-scale eco-friendly healthcare facility, enabling significant energy savings while promoting sustainable and reliable power solutions for critical infrastructure. The project supports uninterrupted operations and long-term cost efficiency.',
    tag: 'Commercial Solar System',
    location: 'Los Angeles, CA - March 2024',
    image:
      'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Green Warehouse Initiative',
    description:
      'A high-capacity rooftop solar installation designed to reduce operational costs and environmental impact. The system helps cut annual electricity expenses while contributing to carbon emission reduction targets.',
    tag: 'Off-Grid Solutions',
    location: 'Dallas, Texas - March 2024',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ProjectsHeroSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slide = slides[index];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const next = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <section style={styles.wrapper}>
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* CONTENT */}
        <div
          style={{
            ...styles.content,
            width: isMobile ? '100%' : '40%',
          }}
        >
          <h1 style={styles.title}>{slide.title}</h1>

          <p style={styles.description}>{slide.description}</p>

          <div style={styles.divider} />

          <span style={styles.tag}>{slide.tag}</span>

          <div style={styles.bottom}>
            <span style={styles.location}>{slide.location}</span>

            <div style={styles.arrows}>
              <button style={styles.arrowBtn} onClick={prev}>
                <FiArrowLeft />
              </button>
              <button style={styles.arrowBtn} onClick={next}>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          style={{
            ...styles.imageWrap,
            width: isMobile ? '100%' : '60%',
            height: isMobile ? '320px' : 'auto',
          }}
        >
          <img src={slide.image} alt={slide.title} style={styles.image} />
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
    marginBottom: '80px', // ✅ gap for next section
  },

  container: {
    display: 'flex',
    minHeight: '620px',
  },

  content: {
    backgroundColor: '#022c22',
    color: '#ffffff',
    padding: '64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '38px',
    fontWeight: 600,
    lineHeight: 1.5,
  },

  description: {
    color: '#d1d5db',
    fontSize: '16px',
    maxWidth: '560px',
    marginTop: '18px',
    lineHeight: 1.7,
  },

  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.25)',
    margin: '36px 0',
  },

  tag: {
    color: '#bef264',
    fontWeight: 600,
    fontSize: '15px',
  },

  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '40px',
    gap: '16px',
    flexWrap: 'wrap',
  },

  location: {
    fontSize: '14px',
    color: '#e5e7eb',
  },

  arrows: {
    display: 'flex',
    gap: '12px',
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

  imageWrap: {
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
