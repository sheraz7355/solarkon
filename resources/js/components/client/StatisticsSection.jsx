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

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, targetValue, duration]);

  return [count, ref];
}

// --- 2. StatCard (Refactored) ---
// removed 'col' classes from here to keep it pure
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
      transition={{ duration: 0.6, delay: 0.08 + (index * 0.1) }}
      className='h-100' // Ensure it fills the parent column
    >
      <div 
        className='h-100 rounded-4 p-4'
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div className='fw-bold' style={{ color: index === 0 ? '#166534' : '#22C55E', fontSize: '2.2rem' }}>
          {isText ? suffix : <>{count}{suffix}</>}
        </div>
        <div className='small text-uppercase' style={{ color: '#14532d', fontWeight: 600 }}>
          {item.label}
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. Main Component ---
function StatisticsSection({ stats }) {
  // Fallback data
  const safeStats = stats && stats.length > 0 ? stats : [
    { label: 'Solar Installations', value: '700+' },
    { label: 'Total Capacity', value: '150MW+' },
    { label: 'Pipeline Projects', value: '100MW+' }
  ];

  return (
    <section 
      className='section-shell position-relative' 
      data-aos='fade-up'
      style={{
        background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
      }}
    >
      <div className='container position-relative'>
        {/* The ROW handles the grid layout */}
        <div className='row g-3 g-lg-4 text-center'>
          {safeStats.map((stat, index) => (
            // WRAPPER DIV: This fixes the "Exploding" layout
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