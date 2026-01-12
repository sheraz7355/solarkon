import { useState } from 'react';
import Footer from '../components/client/Footer';
import Navbar from '../components/client/Navbar';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import solarImg from '../assets/images/solarimg.webp';

function Financing() {
    // 1. Functional State: Toggle between Individual and Business
    const [view, setView] = useState('individual');

    // 2. Functional Scroll Logic
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="finance-premium-page">
            <Navbar />
            <WhatsAppFloat />

            {/* --- HERO SECTION: ADMIRABLE & CLEAN --- */}
            <section className="hero-v3">
                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-6 py-5">
                            <div className="reveal-text">
                                <span className="category-pill">Smart Energy Solutions</span>
                                <h1 className="main-heading mt-3">
                                    Financing the <br />
                                    <span className="text-lime">Next Generation</span>
                                </h1>
                                <p className="hero-para mt-4">
                                    Why wait for tomorrow's energy? Choose a plan that fits your budget today. 
                                    We provide the capital, you enjoy the sunlight.
                                </p>
                                <div className="d-flex gap-3 mt-5">
                                    <button onClick={() => scrollToSection('plans')} className="btn-primary-custom">
                                        View All Plans
                                    </button>
                                    <button onClick={() => window.location.href='/contact'} className="btn-outline-custom">
                                        Free Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative d-none d-lg-block">
                            <div className="hero-img-stack">
                                <img src={solarImg} alt="Solar" className="img-main shadow-2xl" />
                                <div className="floating-card-ui">
                                    <div className="icon-pulse">⚡</div>
                                    <div>
                                        <h5 className="mb-0 fw-bold">90%</h5>
                                        <small>Bill Reduction</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FUNCTIONAL SELECTOR --- */}
            <section id="plans" className="py-5 bg-faded text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4">Choose Your Path</h2>
                    <div className="toggle-container mx-auto mb-5">
                        <button 
                            className={`toggle-btn ${view === 'individual' ? 'active' : ''}`}
                            onClick={() => setView('individual')}
                        >
                            Residential
                        </button>
                        <button 
                            className={`toggle-btn ${view === 'business' ? 'active' : ''}`}
                            onClick={() => setView('business')}
                        >
                            Corporate
                        </button>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {view === 'individual' ? (
                            <>
                                {/* OPTION 1: SELF FINANCE */}
                                <div className="col-lg-5">
                                    <div className="finance-card shadow-lg">
                                        <div className="card-badge">Most Popular</div>
                                        <div className="card-icon-wrap">💰</div>
                                        <h3 className="fw-bold mt-3">Self Finance</h3>
                                        <p className="text-muted">Direct ownership with zero debt. Pay once, enjoy forever.</p>
                                        <div className="card-stats">
                                            <div className="stat"><span>Markup</span><strong>0%</strong></div>
                                            <div className="stat"><span>Ownership</span><strong>100%</strong></div>
                                        </div>
                                        <button onClick={() => window.location.href='/contact'} className="btn-card-action mt-4">Get Started</button>
                                    </div>
                                </div>
                                {/* OPTION 2: INSTALLMENT */}
                                <div className="col-lg-5">
                                    <div className="finance-card shadow-lg">
                                        <div className="card-icon-wrap">🗓️</div>
                                        <h3 className="fw-bold mt-3">Monthly Installments</h3>
                                        <p className="text-muted">Easy 12-24 month plans directly from Solakon.</p>
                                        <div className="card-stats">
                                            <div className="stat"><span>Downpayment</span><strong>20%</strong></div>
                                            <div className="stat"><span>Tenure</span><strong>2 Years</strong></div>
                                        </div>
                                        <button onClick={() => window.location.href='/contact'} className="btn-card-action mt-4">Apply Now</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* OPTION 3: BANK FINANCE */}
                                <div className="col-lg-5">
                                    <div className="finance-card shadow-lg bank-card">
                                        <div className="card-icon-wrap">🏦</div>
                                        <h3 className="fw-bold mt-3">Bank Financing</h3>
                                        <p className="text-muted">SBP subsidized schemes for industries and large sectors.</p>
                                        <div className="card-stats">
                                            <div className="stat"><span>Interest Rate</span><strong>From 6%</strong></div>
                                            <div className="stat"><span>Max Tenure</span><strong>5 Years</strong></div>
                                        </div>
                                        <button onClick={() => window.location.href='/contact'} className="btn-card-action mt-4">Check Eligibility</button>
                                    </div>
                                </div>
                                {/* OPTION 4: PPA */}
                                <div className="col-lg-5">
                                    <div className="finance-card shadow-lg ppa-card">
                                        <div className="card-icon-wrap">⚡</div>
                                        <h3 className="fw-bold mt-3 text-white">PPA Model</h3>
                                        <p className="text-white opacity-75">Zero Investment. Just pay for the units you use.</p>
                                        <div className="card-stats text-white">
                                            <div className="stat"><span>Capex</span><strong>None</strong></div>
                                            <div className="stat"><span>Maintenance</span><strong>Free</strong></div>
                                        </div>
                                        <button onClick={() => window.location.href='/contact'} className="btn-card-action light mt-4">Request Survey</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

                .finance-premium-page {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    background: #ffffff;
                    color: #022c22;
                }

                /* HERO */
                .hero-v3 {
                    background: radial-gradient(circle at top right, #f7fee7, #ffffff);
                    overflow: hidden;
                }
                .category-pill {
                    background: #dcfce7;
                    color: #166534;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .main-heading {
                    font-size: clamp(2.8rem, 6vw, 4.5rem);
                    font-weight: 800;
                    line-height: 1.1;
                    color: #022c22;
                }
                .text-lime { color: #84cc16; }
                .hero-para { font-size: 1.2rem; color: #4b5563; max-width: 550px; }

                /* BUTTONS */
                .btn-primary-custom {
                    background: #022c22;
                    color: white;
                    border: none;
                    padding: 16px 40px;
                    border-radius: 14px;
                    font-weight: 700;
                    transition: 0.3s;
                }
                .btn-primary-custom:hover { transform: translateY(-5px); background: #16a34a; }

                .btn-outline-custom {
                    background: transparent;
                    color: #022c22;
                    border: 2px solid #022c22;
                    padding: 16px 40px;
                    border-radius: 14px;
                    font-weight: 700;
                    transition: 0.3s;
                }

                /* TOGGLE */
                .toggle-container {
                    background: #f1f5f9;
                    padding: 6px;
                    border-radius: 20px;
                    display: flex;
                    width: fit-content;
                }
                .toggle-btn {
                    padding: 12px 30px;
                    border: none;
                    border-radius: 16px;
                    font-weight: 700;
                    background: transparent;
                    transition: 0.3s;
                }
                .toggle-btn.active {
                    background: white;
                    color: #16a34a;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }

                /* FINANCE CARDS */
                .finance-card {
                    background: white;
                    padding: 50px 40px;
                    border-radius: 40px;
                    border: 1px solid #f1f5f9;
                    transition: 0.4s;
                    position: relative;
                }
                .finance-card:hover { transform: translateY(-15px); }
                .card-icon-wrap {
                    font-size: 3rem;
                    background: #f8fafc;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 24px;
                    margin: 0 auto 20px;
                }
                .card-badge {
                    position: absolute;
                    top: 25px; right: 25px;
                    background: #ffedd5; color: #9a3412;
                    padding: 5px 15px; border-radius: 10px; font-weight: 800; font-size: 0.7rem;
                }
                .card-stats {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px dashed #e2e8f0;
                }
                .stat span { display: block; font-size: 0.8rem; color: #64748b; }
                .stat strong { font-size: 1.2rem; color: #022c22; }

                .btn-card-action {
                    width: 100%;
                    padding: 15px;
                    border: none;
                    border-radius: 15px;
                    background: #f1f5f9;
                    font-weight: 800;
                    color: #022c22;
                    transition: 0.3s;
                }
                .btn-card-action:hover { background: #16a34a; color: white; }
                .ppa-card { background: #022c22; }
                .btn-card-action.light { background: #ffffff; color: #022c22; }

                /* HERO IMAGE */
                .hero-img-stack { position: relative; padding: 40px; }
                .img-main { border-radius: 50px; width: 100%; height: 500px; object-fit: cover; }
                .floating-card-ui {
                    position: absolute;
                    bottom: 0; left: 0;
                    background: white; padding: 20px 30px;
                    border-radius: 25px; display: flex; align-items: center; gap: 15px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
                    animation: float 4s ease-in-out infinite;
                }
                .icon-pulse {
                    width: 50px; height: 50px; background: #dcfce7;
                    border-radius: 50%; display: flex; align-items: center; justify-content: center;
                    font-size: 1.5rem;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }

                @media (max-width: 991px) {
                    .main-heading { font-size: 2.5rem; }
                    .finance-card { padding: 30px 20px; }
                }
            `}</style>
        </div>
    );
}

export default Financing;