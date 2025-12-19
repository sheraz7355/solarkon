import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// --- 1. Hook (Unchanged) ---
function useCounter(targetValue, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!targetValue || isNaN(targetValue)) return;
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;
      const endValue = targetValue;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        setCount(current);
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(endValue);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, targetValue, duration]);
  return [count, ref];
}

// --- 2. StatCard (Clean Version - No Watermark) ---
const StatCard = ({ item, index }) => {
  const parseValue = (str) => {
    const match = String(str).match(/(\d+)(.*)/);
    return match 
      ? { number: parseInt(match[1], 10), suffix: match[2] || '' } 
      : { number: 0, suffix: str, isText: true };
  };

  const { number, suffix, isText } = parseValue(item.value);
  const [count, ref] = useCounter(number, 1500 + (index * 200));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className='h-100'
    >
      <div 
        className='h-100 p-4 d-flex flex-column align-items-center justify-content-center position-relative'
        style={{
          // SOFT NATURAL CARD
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 20px 40px -15px rgba(20, 83, 45, 0.1)', // Soft diffuse shadow
          borderBottom: '4px solid #dcfce7', // Subtle green foundation
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(20, 83, 45, 0.2)';
          e.currentTarget.style.borderBottomColor = '#22c55e'; // Highlight on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(20, 83, 45, 0.1)';
          e.currentTarget.style.borderBottomColor = '#dcfce7';
        }}
      >
        {/* NUMBER: Deep Green */}
        <div className='fw-bold mb-1 position-relative' style={{ lineHeight: 1, zIndex: 2 }}>
            <span style={{ 
                fontSize: '3.5rem', 
                color: '#15803d', // Green-700
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '-1.5px'
            }}>
                {isText ? suffix : <>{count}</>}
            </span>
            {!isText && <span style={{ fontSize: '1.5rem', color: '#86efac', marginLeft: '2px', fontWeight: 500 }}>{suffix}</span>}
        </div>

        {/* LABEL: Warm Grey */}
        <div className='text-uppercase fw-bold mt-2 position-relative' 
             style={{ 
                 color: '#64748b', // Slate-500
                 letterSpacing: '1.5px', 
                 fontSize: '0.85rem',
                 zIndex: 2
             }}>
          {item.label}
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. Main Section ---
function StatisticsSection({ stats }) {
  const safeStats = stats && stats.length > 0 ? stats : [
    { label: 'Solar Installations', value: '700+' },
    { label: 'Total Capacity', value: '150MW+' },
    { label: 'Pipeline Projects', value: '100MW+' }
  ];

  return (
    <section 
      className='section-shell position-relative' 
      style={{
        // NATURAL GRADIENT: Soft Mint to White
        background: 'linear-gradient(to bottom, #f0fdf4 0%, #ffffff 100%)', 
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div className='container position-relative'>
        <div className='row g-4 justify-content-center text-center'>
          {safeStats.map((stat, index) => (
            <div key={index} className="col-12 col-md-4">
               <StatCard item={stat} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;