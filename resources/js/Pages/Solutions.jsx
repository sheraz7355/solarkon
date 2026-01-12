import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import { 
  HiHomeModern, HiBuildingOffice2, HiBolt, HiWrenchScrewdriver, 
  HiShieldCheck, HiDocumentText, HiArrowDownTray, HiServer 
} from 'react-icons/hi2';
import { FaLeaf, FaTools, FaCheck, FaFilePdf } from 'react-icons/fa';

export default function Solutions({ solutionData }) { // Accept Prop from Laravel

  const [activeSystem, setActiveSystem] = useState('off-grid');
  
  // -- DYNAMIC DATA LOGIC --
  // 1. Helper to get capacities for current system from DB or use Default
  const getCapacities = (sysKey) => {
      if (solutionData && solutionData[sysKey] && solutionData[sysKey].length > 0) {
          return solutionData[sysKey];
      }
      // Defaults if nothing in DB
      return [
          { label: '5MW', pdf: null }, 
          { label: '10MW', pdf: null }, 
          { label: '50MW', pdf: null }
      ];
  };

  const [activeCapacity, setActiveCapacity] = useState('');

  // 2. Update active capacity when system changes
  useEffect(() => {
      const caps = getCapacities(activeSystem);
      if(caps.length > 0) setActiveCapacity(caps[0].label);
  }, [activeSystem, solutionData]);

  // 3. Find PDF for current selection
  const getCurrentPdf = () => {
      const caps = getCapacities(activeSystem);
      const found = caps.find(c => c.label === activeCapacity);
      return found ? found.pdf : null;
  };

  const currentPdfUrl = getCurrentPdf();


  // --- STATIC DATA (Design remains unchanged) ---
  const sectors = [
    {
      title: 'Residential',
      icon: <HiHomeModern size={32} />,
      description: 'Skilled engineering delivering cutting-edge solutions to lower electricity costs for Pakistani communities.',
      tags: ['Cost Saving', 'Smart Home'],
      color: '#22c55e'
    },
    {
      title: 'Commercial',
      icon: <HiBuildingOffice2 size={32} />,
      description: 'Empower your workplace with efficient solar power systems, effectively replacing high-cost conventional energy.',
      tags: ['High Efficiency', 'Scalable'],
      color: '#eab308'
    },
    {
      title: 'Industrial',
      icon: <HiBolt size={32} />,
      description: 'High-capacity systems designed for heavy-load usage. Stable energy and operational savings without compromise.',
      tags: ['Heavy Load', '24/7 Power'],
      color: '#f59e0b'
    },
    {
      title: 'Agricultural',
      icon: <FaLeaf size={32} />,
      description: 'Transition your farm to dependable off-grid solar. Solar Tube Wells ensuring steady power for irrigation.',
      tags: ['Solar Pumps', 'Off-Grid'],
      color: '#10b981'
    },
  ];

  const systems = [
    {
      id: 'off-grid',
      title: 'Off-Grid Systems',
      subtitle: 'Total Independence',
      desc: 'Operates independently from the utility grid. Ideal for remote areas with unreliable access. Generates, stores, and supplies electricity autonomously.',
      image: 'https://images.unsplash.com/photo-1548611716-3650d7e4125b?q=80&w=1000&auto=format&fit=crop',
      features: ['No Grid Required', 'Battery Storage', 'Fuel Freedom'],
      gradient: 'linear-gradient(135deg, #14532d 0%, #1bcc5c 100%)',
      accent: '#14532d'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Systems',
      subtitle: 'The Best of Both Worlds',
      desc: 'Combines on-grid and off-grid capabilities. Powers your home during the day and stores excess energy. Automatically switches to battery during outages.',
      image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop',
      features: ['Backup Power', 'Bill Reduction', 'Smart Management'],
      gradient: 'linear-gradient(135deg, #ca8a04 0%, #facc15 100%)',
      accent: '#ca8a04'
    },
    {
      id: 'on-grid',
      title: 'On-Grid Systems',
      subtitle: 'Maximum Cost Savings',
      desc: 'Directly connected to the utility grid. Excess energy is exported through Net Metering, significantly reducing or eliminating electricity bills.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
      features: ['Net Metering', 'Low Upfront Cost', 'High ROI'],
      gradient: 'linear-gradient(135deg, #15803d 0%, #4ade80 100%)',
      accent: '#15803d'
    },
  ];

  const careServices = [
    { title: 'Maintenance', icon: <FaTools />, desc: 'Regular inspections, panel cleaning, and performance updates.' },
    { title: 'Expert Repairs', icon: <HiWrenchScrewdriver />, desc: 'Certified engineers, rapid diagnosis, and original parts.' },
    { title: 'Warranty Support', icon: <HiShieldCheck />, desc: 'Streamlined claims and 24/7 urgent support helpline.' },
  ];

  const handleDownload = () => {
    if (currentPdfUrl) {
        // Open in new tab (browser viewer)
        window.open(currentPdfUrl, '_blank');
    } else {
        alert('No specification document available for this capacity yet.');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white font-sans">
      <Head title="Our Solutions" />
      <Navbar />
      <WhatsAppFloat />

      <main className="flex-grow-1">
        
        {/* ================= HERO SECTION ================= */}
        <section className="position-relative pt-5 pb-5 bg-white">
            <div className="container pt-lg-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="d-inline-block px-3 py-1 mb-4 border border-warning rounded-pill">
                                <span className="text-uppercase fw-bold small" style={{color: '#14532d', letterSpacing: '1px'}}>Engineered for Pakistan</span>
                            </div>
                            <h1 className="display-3 fw-bold mb-4 lh-sm" style={{color: '#14532d'}}>
                                Energy Solutions <br />
                                <span className="text-warning fst-italic">Reimagined.</span>
                            </h1>
                            <p className="lead mb-5" style={{color: '#14532d'}}>
                                We don't just sell solar panels. We engineer comprehensive energy ecosystems tailored for homes, industries, and agriculture.
                            </p>
                            
                            <Link href="/contact" className="btn rounded-pill px-5 py-3 fw-bold text-uppercase btn-custom-journey">
                                Start Your Journey
                            </Link>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.8 }}
                            className="position-relative"
                        >
                            <div className="overflow-hidden" style={{ borderRadius: '200px 0 200px 0' }}>
                                <img 
                                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Solar Architecture" 
                                    className="w-100 object-fit-cover shadow-lg"
                                    style={{ height: '500px' }}
                                />
                            </div>
                            <div className="position-absolute bottom-0 start-0 bg-white p-4 shadow-lg d-none d-md-block" style={{ maxWidth: '200px' }}>
                                <h3 className="fw-bold text-success mb-0">100%</h3>
                                <p className="small text-muted mb-0">Energy Independence Capability</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= 1. MARKET SECTORS ================= */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-uppercase fw-bold d-block mb-2" style={{color: '#15803d', letterSpacing: '2px', fontSize: '0.875rem'}}>Industries We Serve</span>
                        <h2 className="display-4 fw-bold mb-3" style={{color: '#14532d'}}>Powering Every Sector</h2>
                    </motion.div>
                </div>
                <div className="row g-4">
                    {sectors.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="sector-card-new bg-white p-4 h-100 shadow-sm position-relative overflow-hidden"
                                style={{ borderRadius: '20px', border: '2px solid transparent', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                            >
                                <div className="sector-icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '70px', height: '70px', background: `${item.color}15`, color: item.color }}>{item.icon}</div>
                                <h4 className="fw-bold mb-3" style={{color: '#14532d'}}>{item.title}</h4>
                                <p className="text-muted mb-4" style={{fontSize: '0.95rem', lineHeight: '1.6'}}>{item.description}</p>
                                <div className="d-flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map((tag, i) => (<span key={i} className="badge px-3 py-2" style={{ backgroundColor: `${item.color}10`, color: item.color, border: `1px solid ${item.color}30`}}>{tag}</span>))}
                                </div>
                                <div className="sector-hover-accent" style={{background: item.color}}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ================= 2. SYSTEM ARCHITECTURES (DYNAMIC PDFS) ================= */}
        <section className="py-5 bg-white">
            <div className="container py-5">
                <div className="text-center mb-5 pb-3">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-uppercase fw-bold d-block mb-2" style={{color: '#15803d', letterSpacing: '2px', fontSize: '0.875rem'}}>Technical Specifications</span>
                        <h2 className="display-4 fw-bold mb-3" style={{color: '#14532d'}}>Choose Your Architecture</h2>
                    </motion.div>
                </div>

                {/* System Navigation Pills */}
                <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
                    {systems.map((sys) => (
                        <motion.button
                            key={sys.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveSystem(sys.id);
                                const caps = getCapacities(sys.id);
                                if(caps.length) setActiveCapacity(caps[0].label);
                            }}
                            className={`btn rounded-pill px-4 py-3 fw-bold system-pill ${activeSystem === sys.id ? 'active' : ''}`}
                            style={{
                                background: activeSystem === sys.id ? sys.gradient : '#f3f4f6',
                                color: activeSystem === sys.id ? 'white' : '#6b7280',
                                border: 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {sys.title}
                        </motion.button>
                    ))}
                </div>

                {/* Active System Display */}
                {systems.map((sys) => (
                    activeSystem === sys.id && (
                        <motion.div
                            key={sys.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* System Info */}
                            <div className="row align-items-center g-5 mb-5">
                                <div className="col-lg-6">
                                    <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                                        <img src={sys.image} alt={sys.title} className="w-100" style={{ height: '450px', objectFit: 'cover' }} />
                                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: `${sys.gradient}`, opacity: '0.1'}}></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <span className="text-uppercase fw-bold small d-block mb-3" style={{color: sys.accent, letterSpacing: '2px'}}>{sys.subtitle}</span>
                                    <h3 className="display-5 fw-bold mb-4" style={{color: '#14532d'}}>{sys.title}</h3>
                                    <p className="lead text-muted mb-4" style={{lineHeight: '1.7'}}>{sys.desc}</p>
                                    <div className="mb-4">
                                        {sys.features.map((feat, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="d-flex align-items-center mb-3 p-3 rounded-3" style={{backgroundColor: '#f9fafb'}}>
                                                <span className="d-flex align-items-center justify-content-center rounded-circle me-3" style={{width: 40, height: 40, background: sys.gradient}}><FaCheck size={14} color="white" /></span>
                                                <span className="fw-semibold" style={{color: '#374151'}}>{feat}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* DYNAMIC DOWNLOAD SECTION */}
                            <div className="p-5 rounded-4 shadow-sm" style={{background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)'}}>
                                <div className="text-center mb-4">
                                    <h4 className="fw-bold mb-2" style={{color: '#14532d'}}>Download Technical Specifications</h4>
                                    <p className="text-muted">Select capacity to view detailed documentation</p>
                                </div>

                                {/* Dynamic Capacity Buttons from DB */}
                                <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                                    {getCapacities(sys.id).map((capacity) => (
                                        <motion.button
                                            key={capacity.label}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveCapacity(capacity.label)}
                                            className={`btn rounded-pill px-4 py-2 fw-semibold capacity-pill ${activeCapacity === capacity.label ? 'active' : ''}`}
                                            style={{
                                                background: activeCapacity === capacity.label ? sys.gradient : 'white',
                                                color: activeCapacity === capacity.label ? 'white' : '#6b7280',
                                                border: activeCapacity === capacity.label ? 'none' : '2px solid #e5e7eb',
                                                transition: 'all 0.3s ease',
                                                boxShadow: activeCapacity === capacity.label ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'
                                            }}
                                        >
                                            {capacity.label}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* PDF Action Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    key={activeCapacity} 
                                    className="bg-white p-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                                    style={{border: '2px solid #e5e7eb'}}
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="p-3 rounded-3 me-3" style={{background: sys.gradient}}>
                                            <HiDocumentText size={32} color="white" />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1" style={{color: '#14532d', fontSize: '1.1rem'}}>
                                                {sys.title} - {activeCapacity}
                                            </h5>
                                            <p className="text-muted small mb-0">
                                                {currentPdfUrl ? 'Document Available' : 'No Document Linked'}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleDownload}
                                        className={`btn rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 ${!currentPdfUrl ? 'disabled opacity-50' : ''}`}
                                        style={{
                                            background: sys.gradient,
                                            color: 'white',
                                            border: 'none',
                                            minWidth: '160px',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <HiArrowDownTray size={20} />
                                        {currentPdfUrl ? 'Download' : 'Unavailable'}
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                ))}
            </div>
        </section>

        {/* ================= 3. LIFECYCLE SUPPORT (Unchanged) ================= */}
        <section className="py-5 position-relative overflow-hidden bg-black">
            <div className="position-absolute top-0 start-0 w-100 h-100">
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop" alt="Solar Engineering Team" className="w-100 h-100 object-fit-cover" style={{ filter: 'grayscale(100%) contrast(1.2) brightness(0.6)' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
            </div>
            <div className="container py-5 position-relative z-1">
                <div className="text-center mb-5">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-uppercase fw-bold d-block mb-3 text-warning" style={{letterSpacing: '3px', fontSize: '0.85rem'}}>Lifecycle Support</span>
                        <h2 className="display-3 fw-bold mb-3 text-white">We're With You <br /> Every Step</h2>
                    </motion.div>
                </div>
                <div className="row g-4 justify-content-center">
                    {careServices.map((srv, index) => (
                        <div key={index} className="col-md-4">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: index * 0.1 }} whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }} className="p-5 h-100 border border-secondary border-opacity-25 rounded-4" style={{ backdropFilter: 'blur(5px)', background: 'rgba(0,0,0,0.6)', transition: 'all 0.2s ease-out' }}>
                                <div className="mb-4 text-warning"><div style={{fontSize: '2.5rem'}}>{srv.icon}</div></div>
                                <h4 className="fw-bold mb-3 text-white">{srv.title}</h4>
                                <p className="mb-0 text-white-50 lead" style={{fontSize: '1rem'}}>{srv.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5 pt-4"><Link href="/contact" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase ls-1">Contact Support Team</Link></div>
            </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-5 bg-white">
            <div className="container text-center py-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="display-5 fw-bold mb-4" style={{color: '#14532d'}}>Power Your Future Today</h2>
                    <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>Join thousands of satisfied customers across Pakistan</p>
                    <Link href="/contact" className="btn px-5 py-3 fw-bold rounded-pill shadow-lg" style={{ background: 'linear-gradient(135deg, #14532d 0%, #15803d 100%)', color: 'white', border: 'none' }}>Get a Free Quote</Link>
                </motion.div>
            </div>
        </section>

      </main>
      <Footer />
      <style>{`.btn-custom-journey{background-color:#022c22;border-color:#022c22;color:white;letter-spacing:1px;transition:all 0.3s ease-in-out}.btn-custom-journey:hover{background-color:#bef264!important;border-color:#bef264!important;color:#022c22!important;transform:translateY(-2px)}.sector-card-new{cursor:pointer}.sector-card-new:hover{border-color:currentColor!important;box-shadow:0 20px 40px rgba(0,0,0,.1)!important}.sector-hover-accent{position:absolute;bottom:0;left:0;width:0;height:4px;transition:width 0.4s ease}.sector-card-new:hover .sector-hover-accent{width:100%}.ls-1{letter-spacing:1px}@media (max-width:768px){.display-3{font-size:2.5rem}.display-4{font-size:2rem}.display-5{font-size:1.75rem}}`}</style>
    </div>
  );
}