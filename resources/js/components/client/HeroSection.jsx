import { Link } from '@inertiajs/react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiArrowRight, HiOutlineBolt, HiOutlineGlobeAlt, HiOutlineShieldCheck } from 'react-icons/hi2';

// Default Fallback Image

// --- 1. COUNTER HOOK ---
function useCounter(targetValue, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10px' });
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

// --- 2. STAT ITEM ---
const HeroStatItem = ({ item, index }) => {
    const parseValue = (str) => {
        const match = String(str).match(/(\d+)(.*)/);
        return match ? { number: parseInt(match[1], 10), suffix: match[2] || '' } : { number: 0, suffix: str, isText: true };
    };

    const { number, suffix, isText } = parseValue(item.value);
    const [count, ref] = useCounter(number, 1500);

    const getIcon = (i) => {
        if (i === 0) return <HiOutlineShieldCheck size={28} />;
        if (i === 1) return <HiOutlineBolt size={28} />;
        return <HiOutlineGlobeAlt size={28} />;
    };

    return (
        <div className="col-md-4 px-1 px-md-3 stat-item col-12 text-center">
            <div ref={ref} className="py-1 py-md-0">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-1">
                    <span style={{ color: '#14532d' }}>{getIcon(index)}</span> {/* dark green icon */}
                    <div className="fw-bold text-white lh-1" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontFamily: 'sans-serif' }}>
                        {isText ? suffix : count}
                        <span style={{ color: '#14532d', fontSize: '0.6em', verticalAlign: 'top', marginLeft: '2px' }}>{suffix}</span>
                    </div>
                </div>

                <div className="text-uppercase text-white opacity-75" style={{ fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 500 }}>
                    {item.label}
                </div>
            </div>
        </div>
    );
};

// --- 3. HERO SECTION ---
function HeroSection({ content, stats }) {
    const title = content?.title || 'Solar-Kon Best Company';
    const description = content?.description || 'Solarkon Private Limited is a premier solar energy solutions provider.';
    // if using public folder:
    const backgroundImage = content?.image_url || '/images/solarimg-1.webp';

    const displayStats =
        stats && stats.length > 0
            ? stats
            : [
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Installations', value: '5000+' },
                  { label: 'Clean Energy', value: '50MW+' },
              ];

    const renderStyledTitle = (text) => {
        if (!text) return null;
        const firstChar = text.charAt(0);
        const lastChar = text.slice(-1);
        const middleText = text.slice(1, -1);

        return (
            <span style={{ fontWeight: 800 }}>
                <span style={{ color: '#14532d' }}>{firstChar}</span> {/* dark green first char */}
                <span style={{ color: '#ffffff' }}>{middleText}</span>
                <span style={{ color: '#14532d' }}>{lastChar}</span> {/* dark green last char */}
            </span>
        );
    };

    return (
        <section
            id="home"
            className="position-relative"
            data-aos="fade-up"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '110vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '12rem',
                paddingBottom: '4rem',
            }}
        >
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            <div className="position-relative h-100 d-flex flex-column justify-content-center container" style={{ zIndex: 2 }}>
                <div className="row justify-content-center align-items-center flex-grow-1">
                    <div className="col-lg-10 col-xl-9 text-center">
                        {/* BADGE */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4">
                            <span
                                className="fw-bold text-uppercase px-3 py-2 rounded-pill d-inline-block"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '0.75rem',
                                    letterSpacing: '2px',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    background: 'rgba(20, 83, 45, 0.8)' /* dark green badge background */,
                                    maxWidth: '100%',
                                    whiteSpace: 'normal',
                                    lineHeight: '1.4',
                                }}
                            >
                                Nature Produces & We Deliver
                            </span>
                        </motion.div>

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.1 }}
                            className="lh-sm mb-4 section-title"
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 5.5rem)',
                                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            }}
                        >
                            {renderStyledTitle(title)}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="mb-5 mx-auto"
                            style={{
                                color: '#f8fafc',
                                fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
                                lineHeight: 1.8,
                                fontWeight: 300,
                                maxWidth: '800px',
                            }}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center"
                        >
                            <Link
                                href="/contact"
                                className="btn btn-lg btn-pill d-inline-flex align-items-center justify-content-center gap-2 btn-soft-hover px-5 py-3"
                                style={{
                                    background: '#14532d' /* dark green button */,
                                    color: '#ffffffff',
                                    fontWeight: 700,
                                    border: 'none',
                                    boxShadow: '0 4px 15px rgba(20, 83, 45, 0.3)',
                                    width: 'auto',
                                }}
                            >
                                Get Free Consultation
                                <HiArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* STATS SECTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="row justify-content-center stats-container"
                >
                    <div className="col-lg-10">
                        <div className="row g-0">
                            {displayStats.map((stat, index) => (
                                <HeroStatItem key={index} item={stat} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (min-width: 768px) {
            .stat-item {
                border-right: 1px solid rgba(255, 255, 255, 0.2);
            }
            .stat-item:last-child {
                border-right: none;
            }
            .stats-container {
                border-top: 1px solid rgba(255, 255, 255, 0.15);
                margin-top: 3rem !important;
                padding-top: 2rem !important;
            }
        }

        @media (max-width: 767px) {
            .stat-item {
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                padding-bottom: 0.75rem; 
                margin-bottom: 0.75rem;
            }
            .stat-item:last-child {
                border-bottom: none;
                padding-bottom: 0;
                margin-bottom: 0;
            }
            .stats-container {
                border-top: none;
                margin-top: 4rem !important; 
                padding-top: 0 !important;
            }
        }
      `}</style>
        </section>
    );
}

export default HeroSection;
