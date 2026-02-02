import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import {
    FaArrowLeft, FaShieldAlt, FaBolt, FaSolarPanel,
    FaWhatsapp, FaPhone, FaLeaf, FaExpand
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProductDetails({ product }) {

    if (!product) return <div className="vh-100 d-flex align-items-center justify-content-center">Loading...</div>;

    // --- GALLERY LOGIC ---
    const allImages = [product.image, ...(product.gallery_images || [])].filter(Boolean);
    const [selectedImage, setSelectedImage] = useState(allImages[0]);

    return (
        <div className="d-flex flex-column min-vh-100 font-sans">
            <Head title={product.title} />
            <Navbar />
            <WhatsAppFloat />

            <div className="container-fluid p-0">
                <div className="row g-0">

                    {/* ================= LEFT: IMMERSIVE VISUAL (Sticky on Desktop) ================= */}
                    <div className="col-lg-7 bg-light position-relative d-none d-lg-block" style={{ height: 'calc(100vh - 80px)', position: 'sticky', top: '80px' }}>

                        {/* Back Button Floating */}
                        <div className="position-absolute top-0 start-0 m-4 z-2">
                            <Link href="/store" className="btn btn-white rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center hover-scale" style={{ width: 50, height: 50 }}>
                                <FaArrowLeft className="text-dark" />
                            </Link>
                        </div>

                        {/* Main Image Stage */}
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 overflow-hidden">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={selectedImage || 'https://placehold.co/1200x800'}
                                alt={product.title}
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>

                        {/* Floating Thumbnails (Bottom Center) */}
                        {allImages.length > 1 && (
                            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-2">
                                <div className="d-flex gap-2 p-2 bg-white bg-opacity-75 backdrop-blur rounded-pill shadow-sm">
                                    {allImages.map((img, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className={`rounded-circle overflow-hidden cursor-pointer position-relative ${selectedImage === img ? 'ring-active' : ''}`}
                                            style={{ width: '50px', height: '50px', border: '2px solid white' }}
                                        >
                                            <img src={img} className="w-100 h-100 object-fit-cover" alt="thumb" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ================= RIGHT: NARRATIVE & SPECS (Scrollable) ================= */}
                    <div className="col-lg-5 bg-white">

                        {/* Mobile Image (Visible only on Mobile) */}
                        <div className="d-block d-lg-none position-relative">
                            <div className="ratio ratio-4x3">
                                <img src={selectedImage} className="object-fit-cover" alt="Main" />
                            </div>
                            <div className="position-absolute top-0 start-0 m-3">
                                <Link href="/store" className="btn btn-light rounded-circle shadow-sm p-2"><FaArrowLeft /></Link>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-4 p-md-5 d-flex flex-column h-100 justify-content-center">

                            {/* Brand & Type */}
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="text-uppercase fw-bold text-success small ls-2">{product.brand}</span>
                                <span className="text-muted small">•</span>
                                <span className="text-uppercase text-muted small fw-bold">{product.type}</span>
                            </div>

                            {/* Title */}
                            <h1 className="display-5 fw-bold text-dark mb-4 lh-sm">{product.title}</h1>

                            {/* Price Block */}
                            <div className="d-flex align-items-baseline gap-3 mb-5 pb-4 border-bottom">
                                <h2 className="display-6 fw-bold text-success m-0">PKR {product.discount_price}</h2>
                                {product.original_price && (
                                    <span className="text-decoration-line-through text-muted fs-5">PKR {product.original_price}</span>
                                )}
                            </div>

                            {/* Description (Story Mode) */}
                            <div className="mb-5">
                                <h5 className="fw-bold mb-3">The Power of Efficiency</h5>
                                <p className="text-secondary lead" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {product.description}
                                </p>
                            </div>

                            {/* Engineering Specs Grid (Unique Card Layout) */}
                            <div className="mb-5">
                                <h6 className="text-uppercase text-muted fw-bold small mb-3 ls-1">Technical Specifications</h6>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-4 h-100 border border-light">
                                            <FaBolt className="text-warning mb-2 fs-4" />
                                            <div className="small text-muted fw-bold">Capacity</div>
                                            <div className="fs-5 fw-bold text-dark">{product.voltage} {product.unit}</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-4 h-100 border border-light">
                                            <FaSolarPanel className="text-primary mb-2 fs-4" />
                                            <div className="small text-muted fw-bold">Annual Output</div>
                                            <div className="fs-5 fw-bold text-dark">{product.annual_output || 'Variable'}</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-4 h-100 border border-light">
                                            <FaShieldAlt className="text-success mb-2 fs-4" />
                                            <div className="small text-muted fw-bold">Warranty</div>
                                            <div className="fs-5 fw-bold text-dark">{product.warranty || 'Standard'}</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-light rounded-4 h-100 border border-light">
                                            <FaLeaf className="text-success mb-2 fs-4" />
                                            <div className="small text-muted fw-bold">Eco-Friendly</div>
                                            <div className="fs-5 fw-bold text-dark">Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions (Stays at bottom of content) */}
                            <div className="d-grid gap-3">
                                <button
                                    onClick={() => window.open(`https://wa.me/923001234567?text=Hi, I want to order ${product.title}`, '_blank')}
                                    className="btn btn-success btn-lg rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-lg hover-lift"
                                >
                                    <FaWhatsapp size={22} /> Order via WhatsApp
                                </button>

                                <Link href="/contact" className="btn btn-outline-dark btn-lg rounded-pill py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                                    <FaPhone size={18} /> Request Formal Quote
                                </Link>
                            </div>

                            <p className="text-center text-muted small mt-4 mb-0">
                                Free installation consultation included with this package.
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />

            <style>{`
                .cursor-pointer { cursor: pointer; }
                .backdrop-blur { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
                .ls-2 { letter-spacing: 2px; }
                .ls-1 { letter-spacing: 1px; }
                .hover-scale:hover { transform: scale(1.1); transition: 0.2s; }
                .hover-lift:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(34,197,94,0.2) !important; transition: 0.2s; }
                .ring-active { border-color: #22c55e !important; box-shadow: 0 0 0 2px #22c55e; }
                
                /* Hide Scrollbar for Cleaner Look */
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #f1f1f1; }
                ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #aaa; }
            `}</style>
        </div>
    );
}