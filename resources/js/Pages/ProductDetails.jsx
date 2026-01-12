import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import { FaCheck, FaArrowLeft } from 'react-icons/fa'; // Added FaArrowLeft

export default function ProductDetails({ product }) {
    
    if (!product) return <div className="text-center py-5">Loading...</div>;

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Head title={product.title} />
            <Navbar />
            <WhatsAppFloat />

            <main className="flex-grow-1 py-5">
                <div className="container">
                    
                    {/* --- BACK BUTTON (Added Here) --- */}
                    <div className="mb-4">
                        <Link href="/store" className="btn btn-outline-secondary rounded-pill px-4 fw-bold d-inline-flex align-items-center gap-2 hover-back">
                            <FaArrowLeft /> Back to Store
                        </Link>
                    </div>

                    <div className="row align-items-center g-5">
                        
                        {/* LEFT: IMAGE */}
                        <div className="col-lg-6">
                            <div className="rounded-4 overflow-hidden shadow-lg position-relative bg-white" style={{ minHeight: '400px' }}>
                                <img 
                                    src={product.image || 'https://placehold.co/600x400'} 
                                    alt={product.title}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </div>

                        {/* RIGHT: DETAILS */}
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                <span className="badge bg-dark text-white mb-3 px-3 py-2 rounded-pill text-uppercase ls-1">
                                    {product.type}
                                </span>

                                <h1 className="fw-bold text-dark mb-3 display-5" style={{ color: '#022c22' }}>
                                    {product.title}
                                </h1>

                                <p className="text-muted lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    {product.description}
                                </p>

                                {/* Features List */}
                                <ul className="list-unstyled mb-5">
                                    <li className="d-flex align-items-center mb-3">
                                        <FaCheck className="text-dark me-3 fs-5" />
                                        <span className="fs-5">Power Capacity: <strong>{product.voltage}</strong></span>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <FaCheck className="text-dark me-3 fs-5" />
                                        <span className="fs-5">
                                            Estimated Annual Output: <strong>{product.annual_output || 'N/A'}</strong>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <FaCheck className="text-dark me-3 fs-5" />
                                        <span className="fs-5">
                                            Warranty: <strong>{product.warranty || '25 Years Performance'}</strong>
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <FaCheck className="text-dark me-3 fs-5" />
                                        <span className="fs-5">Battery Backup Support</span>
                                    </li>
                                </ul>

                                <div className="mb-4">
                                    {product.original_price && (
                                        <span className="text-decoration-line-through text-muted fs-5 d-block mb-1">
                                            PKR {product.original_price}
                                        </span>
                                    )}
                                    <span className="display-6 fw-bold" style={{ color: '#022c22' }}>
                                        PKR {product.discount_price}
                                    </span>
                                </div>

                                <Link href="/contact" className="btn btn-dark rounded-3 px-5 py-3 fw-bold fs-5 shadow-lg"
                                    style={{ backgroundColor: '#022c22', border: 'none' }}
                                >
                                    Get free Consultation
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />

            <style>{`
                .hover-back:hover {
                    background-color: #e5e7eb;
                    color: #000;
                    transform: translateX(-5px);
                    transition: transform 0.2s ease;
                }
            `}</style>
        </div>
    );
}