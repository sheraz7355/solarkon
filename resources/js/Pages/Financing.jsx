import React from 'react';
import Footer from '../components/client/Footer';
import Navbar from '../components/client/Navbar';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import solarImg from '../assets/images/solarimg.webp';

// Reusable SVG Icons for cleaner code
const Icons = {
    Check: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    ),
    Wallet: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
        </svg>
    ),
    Clock: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),
    Building: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <path d="M3 21h18"></path>
            <path d="M5 21V7l8-4 8 4v14"></path>
        </svg>
    )
};

function Financing() {
    return (
        <div className="financing-page">
            <Navbar />
            <WhatsAppFloat />

            {/* ================= HERO SECTION ================= */}
            <header className="hero-section">
                <div className="container position-relative z-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <span className="badge-pill">Financing Options</span>
                            <h1 className="hero-title">
                                Power Your Future, <br />
                                <span className="highlight-text">On Your Terms</span>
                            </h1>
                            <p className="hero-desc">
                                We believe sustainable energy should be accessible to everyone. 
                                Whether you prefer upfront investment or flexible monthly plans, 
                                we have a financial solution tailored for you.
                            </p>
                            <a href="/contact" className="btn-primary-glow">
                                Calculate Your Savings
                            </a>
                        </div>
                    </div>
                </div>
                {/* Abstract Background Shapes */}
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
            </header>

            <main className="container py-5 mt-5">
                
                {/* ================= PLAN ALPHA (SELF FINANCE) ================= */}
                <section className="plan-card mb-5" id="plan-alpha">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="image-wrapper">
                                <img src={solarImg} alt="Self Finance Solar" className="img-cover" />
                                <div className="overlay-badge">
                                    <div className="badge-icon"><Icons.Wallet /></div>
                                    <div>
                                        <strong>Highest ROI</strong>
                                        <span className="d-block small">Max Lifetime Savings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 p-4 p-lg-5">
                            <div className="plan-content">
                                <h6 className="plan-subtitle text-emerald">Plan Alpha</h6>
                                <h2 className="plan-title">Client Self Finance</h2>
                                <p className="plan-desc">
                                    The gold standard for energy independence. By paying upfront, you eliminate utility bills immediately 
                                    and secure the shortest payback period (typically 3-4 years).
                                </p>
                                
                                <div className="features-grid">
                                    {[
                                        { title: '100% Ownership', desc: 'Complete system control from Day 1' },
                                        { title: 'Zero Interest', desc: 'No hidden bank charges or fees' },
                                        { title: 'Priority Support', desc: 'Fast-track installation queue' },
                                        { title: 'Max Asset Value', desc: 'Increases property value instantly' },
                                    ].map((item, i) => (
                                        <div key={i} className="feature-item">
                                            <div className="check-icon"><Icons.Check /></div>
                                            <div>
                                                <strong className="d-block text-dark">{item.title}</strong>
                                                <small className="text-muted">{item.desc}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= PLAN BETA (INSTALLMENT) ================= */}
                <section className="plan-card mb-5" id="plan-beta">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img src={solarImg} alt="Installment Solar" className="img-cover" />
                                <div className="overlay-badge left">
                                    <div className="badge-icon"><Icons.Clock /></div>
                                    <div>
                                        <strong>Easy Start</strong>
                                        <span className="d-block small">Pay as you save</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-4 p-lg-5">
                            <div className="plan-content">
                                <h6 className="plan-subtitle text-emerald">Plan Beta</h6>
                                <h2 className="plan-title">Easy Installments</h2>
                                <p className="plan-desc">
                                    Don't want to drain your savings? Pay a small down payment and let the electricity savings 
                                    cover your monthly installments.
                                </p>

                                <ul className="list-unstyled mt-4">
                                    {[
                                        'Low 20% Down Payment to start',
                                        'Flexible 12 to 24 month tenures',
                                        'Direct in-house financing (No Bank Hassle)',
                                        'Ownership transfers upon completion'
                                    ].map((text, i) => (
                                        <li key={i} className="d-flex align-items-center mb-3">
                                            <div className="check-circle me-3"><Icons.Check /></div>
                                            <span className="fw-medium text-dark">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= PLAN GAMMA (BANK) ================= */}
                <section className="plan-card mb-5" id="plan-gamma">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="image-wrapper">
                                <img src={solarImg} alt="Bank Finance" className="img-cover" />
                                <div className="overlay-badge">
                                    <div className="badge-icon"><Icons.Building /></div>
                                    <div>
                                        <strong>SBP Scheme</strong>
                                        <span className="d-block small">Subsidized Rates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 p-4 p-lg-5">
                            <div className="plan-content">
                                <h6 className="plan-subtitle text-emerald">Plan Gamma</h6>
                                <h2 className="plan-title">Bank Financing</h2>
                                <p className="plan-desc">
                                    Leverage State Bank of Pakistan's renewable energy schemes. We partner with leading banks to 
                                    handle the paperwork and get you approved for low-markup solar loans.
                                </p>
                                <div className="bank-partners mt-4">
                                    <span className="text-uppercase text-muted small fw-bold tracking-wider">Our Banking Partners</span>
                                    <div className="d-flex gap-3 mt-2 opacity-50">
                                        {/* Placeholders for logos */}
                                        <div className="bank-logo-placeholder">Bank Al Habib</div>
                                        <div className="bank-logo-placeholder">Meezan</div>
                                        <div className="bank-logo-placeholder">HBL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= PPA SECTION (DARK MODE) ================= */}
                <section className="ppa-banner rounded-5 overflow-hidden position-relative text-white mt-5">
                    <div className="overlay-gradient"></div>
                    <img src={solarImg} alt="PPA Background" className="ppa-bg-img" />
                    
                    <div className="position-relative z-2 p-5 text-center text-lg-start">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="badge bg-white text-emerald mb-3 px-3 py-2 fw-bold">Zero Investment Model</span>
                                <h2 className="display-5 fw-bold mb-3">Power Purchase Agreement (PPA)</h2>
                                <p className="lead opacity-90 mb-4">
                                    Ideal for large industries. We install, operate, and maintain the solar plant on your roof. 
                                    You simply pay for the cheaper energy it produces.
                                </p>
                                <div className="d-flex flex-wrap gap-4 text-white-50">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="dot bg-success"></div> No CapEx
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="dot bg-success"></div> No Maintenance
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="dot bg-success"></div> Guaranteed Generation
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                                <a href="/contact" className="btn-white-glow">
                                    Inquire for PPA
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* ================= STYLES ================= */}
            <style jsx>{`
                :root {
                    --c-emerald: #10b981;
                    --c-dark: #022c22;
                    --c-light: #ecfdf5;
                    --c-gray: #64748b;
                }

                .financing-page {
                    background-color: #f8fafc;
                    overflow-x: hidden;
                    font-family: 'Inter', sans-serif;
                }

                /* --- Typography --- */
                .text-emerald { color: var(--c-emerald); }
                .text-dark { color: var(--c-dark); }
                
                .highlight-text {
                    background: linear-gradient(120deg, #059669, #34d399);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* --- Hero Section --- */
                .hero-section {
                    padding: 8rem 0 4rem;
                    background: #fff;
                    position: relative;
                }
                
                .badge-pill {
                    background: var(--c-light);
                    color: var(--c-dark);
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    border: 1px solid #d1fae5;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: var(--c-dark);
                    margin-bottom: 1.5rem;
                }

                .hero-desc {
                    font-size: 1.25rem;
                    color: var(--c-gray);
                    max-width: 700px;
                    margin: 0 auto 2.5rem;
                    line-height: 1.6;
                }

                .bg-shape {
                    position: absolute;
                    filter: blur(80px);
                    opacity: 0.4;
                    z-index: 1;
                }
                .shape-1 {
                    width: 400px; height: 400px;
                    background: #34d399;
                    top: -100px; right: -100px;
                    border-radius: 50%;
                }
                .shape-2 {
                    width: 300px; height: 300px;
                    background: #60a5fa;
                    bottom: 0; left: -50px;
                    border-radius: 50%;
                }

                /* --- Buttons --- */
                .btn-primary-glow {
                    background: var(--c-dark);
                    color: white;
                    padding: 18px 36px;
                    border-radius: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 25px -5px rgba(2, 44, 34, 0.4);
                    display: inline-block;
                }
                .btn-primary-glow:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 30px -5px rgba(2, 44, 34, 0.5);
                    background: #064e3b;
                }

                .btn-white-glow {
                    background: white;
                    color: var(--c-dark);
                    padding: 16px 32px;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .btn-white-glow:hover {
                    background: #f0fdf4;
                    transform: scale(1.05);
                }

                /* --- Plan Cards --- */
                .plan-card {
                    background: white;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.03);
                    transition: transform 0.3s ease;
                }
                .plan-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.1);
                }

                .image-wrapper {
                    height: 400px;
                    position: relative;
                    overflow: hidden;
                }
                .img-cover {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .plan-card:hover .img-cover {
                    transform: scale(1.05);
                }

                .overlay-badge {
                    position: absolute;
                    bottom: 25px;
                    right: 25px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    padding: 12px 20px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    color: var(--c-dark);
                }
                .overlay-badge.left {
                    right: auto;
                    left: 25px;
                }
                .badge-icon {
                    color: var(--c-emerald);
                    background: var(--c-light);
                    width: 40px; height: 40px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 10px;
                }

                .plan-subtitle {
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }
                .plan-title {
                    font-weight: 800;
                    color: var(--c-dark);
                    margin-bottom: 1rem;
                }
                .plan-desc {
                    color: var(--c-gray);
                    line-height: 1.6;
                    font-size: 1.05rem;
                }

                /* --- Features Grid --- */
                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .feature-item {
                    display: flex;
                    gap: 10px;
                }
                .check-icon {
                    margin-top: 2px;
                }
                
                .check-circle {
                    width: 24px; height: 24px;
                    background: var(--c-light);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    color: var(--c-emerald);
                }

                /* --- Bank Logos Placeholder --- */
                .bank-logo-placeholder {
                    border: 1px dashed #cbd5e1;
                    padding: 5px 15px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                /* --- PPA Section --- */
                .ppa-banner {
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                }
                .ppa-bg-img {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                }
                .overlay-gradient {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(90deg, #022c22 0%, rgba(2, 44, 34, 0.85) 60%, rgba(2, 44, 34, 0.4) 100%);
                    z-index: 1;
                }
                .dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                }

                @media (max-width: 991px) {
                    .hero-title { font-size: 2.5rem; }
                    .image-wrapper { height: 250px; }
                    .features-grid { grid-template-columns: 1fr; }
                    .overlay-badge { padding: 10px 15px; font-size: 0.9rem; }
                }
            `}</style>
        </div>
    );
}

export default Financing;