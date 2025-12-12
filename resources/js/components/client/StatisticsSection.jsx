import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Counter Hook for animated numbers
function useCounter(targetValue, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;
      const endValue = targetValue;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
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

function StatisticsSection() {
  const stats = [
    { number: '700+', label: 'Solar Installations', target: 700, type: 'number' },
    { number: '150MW+', label: 'Total Capacity', target: 150, type: 'mw' },
    { number: '100MW+', label: 'Pipeline Projects', target: 100, type: 'mw' },
  ];

  const [installationsCount, installationsRef] = useCounter(700, 1500);
  const [capacityCount, capacityRef] = useCounter(150, 1800);
  const [pipelineCount, pipelineRef] = useCounter(100, 1200);

  // Format numbers for display
  const formatNumber = (num, type) => {
    if (type === 'number') {
      return num + '+';
    } else if (type === 'mw') {
      return num + 'MW+';
    }
    return num.toLocaleString();
  };

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
        <div className='row g-3 g-lg-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className='col-12 col-md-4'
            ref={installationsRef}
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
              <div className='fw-bold' style={{ color: '#166534', fontSize: '2.2rem' }}>
                {formatNumber(installationsCount, stats[0].type)}
              </div>
              <div className='small text-uppercase' style={{ color: '#14532d', fontWeight: 600 }}>{stats[0].label}</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className='col-12 col-md-4'
            ref={capacityRef}
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
              <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                {formatNumber(capacityCount, stats[1].type)}
              </div>
              <div className='small text-uppercase' style={{ color: '#14532d', fontWeight: 600 }}>{stats[1].label}</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className='col-12 col-md-4'
            ref={pipelineRef}
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
              <div className='fw-bold' style={{ color: '#22C55E', fontSize: '2.2rem' }}>
                {formatNumber(pipelineCount, stats[2].type)}
              </div>
              <div className='small text-uppercase' style={{ color: '#14532d', fontWeight: 600 }}>{stats[2].label}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;

