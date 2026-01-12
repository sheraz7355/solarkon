import Footer from '../components/client/Footer';
import Navbar from '../components/client/Navbar';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import solarImg from '../assets/images/solarimg.webp';

function Financing() {
    return (
        <div className="finance-master-wrapper">
            <Navbar />
            <WhatsAppFloat />

            {/* --- IMMERSIVE HERO --- */}
            <section className="immersive-hero">
                <div className="container">
                    <div className="row align-items-center min-vh-75">
                        <div className="col-lg-7 py-5">
                            <span className="info-tag pulse">Best Rates Guaranteed</span>
                            <h1 className="main-title">
                                Smart Money for <br /> 
                                <span className="highlight">Green Energy</span>
                            </h1>
                            <p className="description">
                                Breaking the cost barrier. Explore our 4 unique financing pathways 
                                designed to put solar panels on your roof without breaking the bank.
                            </p>
                            <div className="hero-stats d-flex gap-4 mt-4">
                                <div className="stat-item">
                                    <h4 className="fw-bold mb-0">0%</h4>
                                    <small>Markup Options</small>
                                </div>
                                <div className="stat-item border-start ps-4">
                                    <h4 className="fw-bold mb-0">5 Yrs</h4>
                                    <small>Flexible Tenure</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="hero-visual-card">
                                <img src={solarImg} alt="Solar" className="img-fluid rounded-5 shadow-2xl" />
                                <div className="floating-info-card">
                                    <span>⚡ Save up to 90% on Bills</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-wave"></div>
            </section>

            {/* --- THE INFORMATION JOURNEY --- */}
            <main className="container py-5">
                
                {/* 1. SELF FINANCE - THE INDEPENDENCE CARD */}
                <div className="journey-card self-finance shadow-hover">
                    <div className="row g-0">
                        <div className="col-lg-5">
                            <div className="card-image-wrapper">
                                <img src={solarImg} alt="Self" />
                                <div className="price-badge">Best ROI</div>
                            </div>
                        </div>
                        <div className="col-lg-7 p-4 p-md-5">
                            <div className="card-header-icon">💰</div>
                            <h2 className="fw-bold">Client Self Finance</h2>
                            <p className="info-text">
                                The most powerful way to own your energy. You pay 100% upfront, 
                                and every single unit produced is pure profit from day one.
                            </p>
                            <div className="benefit-grid">
                                <div className="benefit-box">
                                    <strong>No Interest</strong>
                                    <span>Save on markup costs</span>
                                </div>
                                <div className="benefit-box">
                                    <strong>Asset Equity</strong>
                                    <span>Immediate ownership</span>
                                </div>
                            </div>
                            <button className="btn-modern mt-4">Calculate Payback Period</button>
                        </div>
                    </div>
                </div>

                {/* 2 & 3. DUAL GRID (INSTALLMENT & BANK) */}
                <div className="row g-4 mb-5">
                    {/* INSTALLMENT */}
                    <div className="col-lg-6">
                        <div className="info-box glass-effect h-100">
                            <div className="box-icon">🗓️</div>
                            <h3>Solar on Installment</h3>
                            <p className="text-muted">No Bank? No Problem. Pay directly to Solakon in easy monthly bits.</p>
                            <ul className="custom-list mt-3">
                                <li>25% Downpayment only</li>
                                <li>12 - 18 Months Tenure</li>
                                <li>Hassle-free Documentation</li>
                            </ul>
                            <div className="mt-auto pt-4">
                                <a href="/contact" className="link-arrow">Check Eligibility →</a>
                            </div>
                        </div>
                    </div>
                    {/* BANK FINANCE */}
                    <div className="col-lg-6">
                        <div className="info-box bank-theme h-100">
                            <div className="box-icon">🏦</div>
                            <h3>Structured Bank Finance</h3>
                            <p className="text-muted">Leverage the power of Islamic & Conventional banking under SBP schemes.</p>
                            <div className="bank-meta mt-3">
                                <div className="d-flex justify-content-between mb-2 border-bottom pb-1">
                                    <span>Markup Rate</span>
                                    <span className="fw-bold text-success">Starting 6%</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 border-bottom pb-1">
                                    <span>Maximum Tenure</span>
                                    <span className="fw-bold text-success">Up to 5 Years</span>
                                </div>
                            </div>
                            <div className="mt-auto pt-4">
                                <button className="btn btn-outline-success w-100 rounded-pill">View Partner Banks</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. PPA - INDUSTRIAL MASTERCLASS */}
                <div className="ppa-industrial-card">
                    <div className="ppa-content text-center">
                        <div className="badge bg-success mb-3">Enterprise Exclusive</div>
                        <h2 className="display-4 fw-bold">Power Purchase Agreement (PPA)</h2>
                        <h4 className="text-success-light mb-4">Zero Capex. Zero Risk. Pure Savings.</h4>
                        <div className="row justify-content-center g-4 mt-2">
                            {[
                                {icon: '🛠️', t: 'Free Maintenance', d: 'We own & maintain the plant'},
                                {icon: '📉', t: 'Reduced Tariff', d: 'Pay less than grid price'},
                                {icon: '🔋', t: 'Unlimited Energy', d: 'Scale as your industry grows'}
                            ].map((item, i) => (
                                <div key={i} className="col-md-4">
                                    <div className="ppa-feature-item">
                                        <div className="fs-1 mb-2">{item.icon}</div>
                                        <h6>{item.t}</h6>
                                        <p className="small opacity-75">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn-ppa-cta mt-5">Request Industrial Survey</button>
                    </div>
                    <div className="ppa-bg-pattern"></div>
                </div>

            </main>

            <Footer />

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

                .finance-master-wrapper {
                    background: #fdfdfd;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    color: #1a2e2a;
                }

                /* HERO */
                .immersive-hero {
                    background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                }
                .main-title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; line-height: 1.1; margin-top: 15px; }
                .highlight { color: #16a34a; }
                .info-tag { background: #dcfce7; color: #166534; padding: 6px 18px; border-radius: 100px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
                .description { font-size: 1.15rem; color: #4b5563; max-width: 600px; margin-top: 20px; }
                
                .hero-visual-card { position: relative; padding: 20px; }
                .floating-info-card {
                    position: absolute;
                    bottom: 40px; left: -20px;
                    background: white; padding: 15px 25px;
                    border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    font-weight: 700; animation: float 3s infinite ease-in-out;
                }

                /* JOURNEY CARDS */
                .journey-card {
                    background: white; border-radius: 35px; overflow: hidden;
                    border: 1px solid #f1f5f9; margin-bottom: 50px;
                }
                .card-image-wrapper { position: relative; height: 100%; overflow: hidden; }
                .card-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
                .journey-card:hover .card-image-wrapper img { transform: scale(1.1); }
                .price-badge { position: absolute; top: 20px; right: 20px; background: #16a34a; color: white; padding: 5px 15px; border-radius: 10px; font-weight: 700; }
                
                .card-header-icon { font-size: 2.5rem; margin-bottom: 10px; }
                .benefit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
                .benefit-box { background: #f8fafc; padding: 15px; border-radius: 15px; border-left: 4px solid #16a34a; }
                .benefit-box strong { display: block; color: #1e293b; }

                /* BENTO STYLE BOXES */
                .info-box { padding: 40px; border-radius: 35px; transition: 0.4s; border: 1px solid #f1f5f9; display: flex; flex-direction: column; }
                .glass-effect { background: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
                .info-box:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.08); }
                .bank-theme { background: #f0fdf4; border-color: #dcfce7; }
                .box-icon { font-size: 2.5rem; margin-bottom: 15px; }
                .custom-list { list-style: none; padding: 0; }
                .custom-list li::before { content: "✓"; color: #16a34a; font-weight: 800; margin-right: 10px; }
                .link-arrow { color: #16a34a; text-decoration: none; font-weight: 700; }

                /* PPA CARD */
                .ppa-industrial-card {
                    background: #022c22; color: white; border-radius: 40px;
                    padding: 80px 40px; position: relative; overflow: hidden;
                }
                .text-success-light { color: #4ade80; }
                .ppa-feature-item { background: rgba(255,255,255,0.05); padding: 30px; border-radius: 25px; border: 1px solid rgba(255,255,255,0.1); height: 100%; }
                .btn-ppa-cta {
                    background: #16a34a; color: white; border: none; padding: 18px 50px;
                    border-radius: 100px; font-weight: 700; font-size: 1.1rem;
                    box-shadow: 0 15px 30px rgba(22, 163, 74, 0.4);
                }

                .btn-modern {
                    background: #1e293b; color: white; border: none; padding: 12px 30px;
                    border-radius: 12px; font-weight: 600; transition: 0.3s;
                }
                .btn-modern:hover { background: #16a34a; transform: translateY(-2px); }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                @media (max-width: 991px) {
                    .benefit-grid { grid-template-columns: 1fr; }
                    .ppa-industrial-card { padding: 50px 20px; }
                    .main-title { font-size: 2.5rem; }
                }
            `}</style>
        </div>
    );
}

export default Financing;