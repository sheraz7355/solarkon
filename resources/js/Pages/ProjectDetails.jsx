import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import { 
    FaMapMarkerAlt, FaCalendarAlt, FaTag, FaSolarPanel, 
    FaArrowLeft, FaSpinner, FaTimes, FaExpand 
} from 'react-icons/fa';

export default function ProjectDetails({ project }) {
  
  // State for Lightbox (Full screen image)
  const [lightboxImage, setLightboxImage] = useState(null);

  // 1. Handle Null/Loading State
  if (!project) {
    return (
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <FaSpinner className="animate-spin text-success mb-3" size={30} />
        <h3 className="text-muted">Loading Project Details...</h3>
        <Link href="/projects" className="btn btn-outline-success mt-3">Back to Projects</Link>
      </div>
    );
  }

  // Parse JSON fields safely
  const executionPoints = Array.isArray(project.execution_points) ? project.execution_points : [];
  const impactData = Array.isArray(project.impact_data) ? project.impact_data : [];
  const galleryImages = Array.isArray(project.gallery_images) ? project.gallery_images : [];

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Head title={project.title} />
      <Navbar />
      <WhatsAppFloat />

      <main className="flex-grow-1">

        {/* --- DYNAMIC HERO SECTION (Clear Image) --- */}
        <section className="position-relative d-flex align-items-end justify-content-center text-center text-white pb-5" style={{ minHeight: '65vh' }}>
            
            {/* Background Image (No Green Filter) */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100 object-fit-cover" 
                />
                {/* Subtle dark gradient ONLY at the bottom for text readability */}
                <div className="position-absolute top-0 start-0 w-100 h-100" 
                     style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }}>
                </div>
            </div>

            <div className="container position-relative z-2">
                <Link href="/projects" className="btn btn-sm btn-light rounded-pill mb-4 px-3 fw-bold border-0 shadow-sm" style={{ opacity: 0.9 }}>
                    <FaArrowLeft className="me-2" /> Back to Projects
                </Link>
                
                <span className="d-block text-uppercase fw-bold text-warning mb-2 letter-spacing-2" style={{ letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {project.tag}
                </span>
                
                <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{project.title}</h1>
                
                <div className="d-flex justify-content-center gap-4 text-white fw-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                    <span><FaMapMarkerAlt className="me-2 text-warning"/>{project.location}</span>
                    <span><FaCalendarAlt className="me-2 text-warning"/>{project.date}</span>
                </div>
            </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="py-5 section-shell">
          <div className="container">
            <div className="row g-5 align-items-start">

              {/* LEFT CONTENT */}
              <div className="col-lg-8 d-flex flex-column gap-5">

                {/* OVERVIEW */}
                {project.overview && (
                    <section data-aos="fade-up">
                        <h2 className="h4 fw-bold mb-3" style={{ color: '#022c22' }}>Overview</h2>
                        <p style={{ fontSize: 18, lineHeight: 1.8, color: '#4B5563', whiteSpace: 'pre-line' }}>
                            {project.overview}
                        </p>
                    </section>
                )}

                {/* EXECUTION */}
                {executionPoints.length > 0 && executionPoints[0] !== "" && (
                    <section data-aos="fade-up">
                        <h2 className="h4 fw-bold mb-3" style={{ color: '#022c22' }}>Execution</h2>
                        <ul className="list-group list-group-flush" style={{ fontSize: 17, color: '#4B5563' }}>
                            {executionPoints.filter(p => p).map((point, index) => (
                                <li key={index} className="list-group-item border-0 ps-0 d-flex align-items-start bg-transparent py-2">
                                    <span className="me-3 text-success fs-5">✔</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* PROJECT IMPACT (Dynamic Cards) */}
                {impactData.length > 0 && (
                    <section data-aos="fade-up">
                        <h2 className="h4 fw-bold mb-4" style={{ color: '#022c22' }}>Project Impact</h2>
                        <div className="row g-4">
                            {impactData.map((item, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="p-4 rounded-4 bg-light h-100 border border-light shadow-sm">
                                        <div className="d-flex align-items-baseline gap-2 mb-1">
                                            <h3 className="fw-bold text-success mb-0">{item.value}</h3>
                                        </div>
                                        <p className="fw-bold text-dark text-uppercase small mb-2" style={{ letterSpacing: '1px' }}>{item.title}</p>
                                        <p className="text-muted small mb-0 lh-base">{item.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
              </div>

              {/* RIGHT META CARD (Sidebar) */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px', backgroundColor: '#f8faf9' }}>
                    <h5 className="fw-bold mb-4 pb-2 border-bottom" style={{ color: '#022c22' }}>Project Info</h5>
                    
                    <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-start gap-3">
                            <div className="bg-white p-2 rounded-circle shadow-sm text-success" style={{width: 40, height: 40, display:'grid', placeItems:'center'}}><FaSolarPanel /></div>
                            <div>
                                <small className="text-uppercase text-muted fw-bold" style={{fontSize: '11px'}}>Service Type</small>
                                <p className="mb-0 fw-semibold text-dark">{project.tag}</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="bg-white p-2 rounded-circle shadow-sm text-success" style={{width: 40, height: 40, display:'grid', placeItems:'center'}}><FaMapMarkerAlt /></div>
                            <div>
                                <small className="text-uppercase text-muted fw-bold" style={{fontSize: '11px'}}>Location</small>
                                <p className="mb-0 fw-semibold text-dark">{project.location}</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="bg-white p-2 rounded-circle shadow-sm text-success" style={{width: 40, height: 40, display:'grid', placeItems:'center'}}><FaCalendarAlt /></div>
                            <div>
                                <small className="text-uppercase text-muted fw-bold" style={{fontSize: '11px'}}>Completion Date</small>
                                <p className="mb-0 fw-semibold text-dark">{project.date}</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start gap-3">
                            <div className="bg-white p-2 rounded-circle shadow-sm text-success" style={{width: 40, height: 40, display:'grid', placeItems:'center'}}><FaTag /></div>
                            <div className="d-flex flex-column">
                                <small className="text-uppercase text-muted fw-bold" style={{fontSize: '11px'}}>Current Status</small>
                                <div className="mt-1">
                                    <span className={`badge rounded-pill px-3 py-2 ${project.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- BIG GALLERY (3 COLUMNS + LIGHTBOX) --- */}
        {galleryImages.length > 0 && (
            <section className="py-5 bg-white border-top">
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="h2 fw-bold" style={{ color: '#022c22' }}>Project Gallery</h3>
                        <div className="bg-success mx-auto mt-3" style={{width: '60px', height: '4px'}}></div>
                    </div>
                    
                    <div className="row g-4">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div 
                                    className="ratio ratio-4x3 overflow-hidden rounded-4 shadow-sm position-relative cursor-pointer gallery-card"
                                    onClick={() => setLightboxImage(img)}
                                >
                                    <img 
                                        src={img} 
                                        alt={`Gallery ${index}`} 
                                        className="w-100 h-100 object-fit-cover transition-transform" 
                                        style={{ transition: 'transform 0.4s ease' }}
                                    />
                                    {/* Hover Overlay */}
                                    <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0" 
                                         style={{ background: 'rgba(0,0,0,0.4)', transition: 'opacity 0.3s' }}>
                                        <FaExpand className="text-white fs-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}


      </main>

      <Footer />

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxImage && (
        <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
            style={{ zIndex: 9999, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(5px)' }}
            onClick={() => setLightboxImage(null)}
        >
            <button 
                className="position-absolute top-0 end-0 m-4 btn btn-link text-white p-0"
                onClick={() => setLightboxImage(null)}
            >
                <FaTimes size={40} />
            </button>
            <img 
                src={lightboxImage} 
                alt="Full Screen" 
                className="img-fluid" 
                style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '8px' }} 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
        </div>
      )}

      {/* CSS for Hover effects */}
      <style>{`
        .gallery-card:hover img { transform: scale(1.08); }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
}