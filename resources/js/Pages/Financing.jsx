import Footer from '../components/client/Footer';
import Navbar from '../components/client/Navbar';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import solarImg from '../assets/images/solarimg.webp';


function Financing() {
    return (
        <div className="bg-white min-vh-100 overflow-hidden">
            <Navbar />
            <WhatsAppFloat />

            {/* ================= HERO SECTION ================= */}
            <section className="hero-modern py-5 position-relative">
                <div className="py-5 position-relative container text-center" style={{ zIndex: 2 }}>
                    <div className="badge-pill mb-3">Financing Made Simple</div>

                    <h1 className="display-3 fw-bold mb-3 text-dark">
                        Empower Your Future with <br />
                        <span className="text-success-gradient">Smart Solar Financing</span>
                    </h1>

                    <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: 750 }}>
                        Don't let the cost stop you. Choose from our flexible payment plans designed to make solar energy accessible for every home
                        and business.
                    </p>

                    {/* SINGLE CTA BUTTON */}
                    <div className="d-flex justify-content-center">
                        <a href="/contact" className="btn-consultation">
                            Get Free Consultation
                        </a>
                    </div>
                </div>

                <div className="blob-1"></div>
                <div className="blob-2"></div>
            </section>

            {/* ================= OPTION 1 ================= */}
            <section className="py-5">
                <div className="py-4 container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <a href="/contact" className="active-image-link">
                                <div className="image-container">
                                    <img
                                        src={solarImg}
                                        alt="Self Finance"
                                        className="img-fluid rounded-5 shadow-2xl active-image-premium"
                                    />
                                    <div className="floating-card">
                                        <span className="fs-4 fw-bold text-success">100%</span>
                                        <p className="small mb-0 text-muted">Ownership</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-6 ps-lg-4">
                            <h6 className="text-success fw-bold text-uppercase mb-2">Plan Alpha</h6>
                            <h2 className="display-5 fw-bold mb-4">Client Self Finance</h2>
                            <p className="text-muted fs-5 mb-4">
                                The fastest way to energy independence. Pay upfront, eliminate your bills immediately, and enjoy the highest lifetime
                                ROI.
                            </p>

                            <div className="row g-4">
                                {[
                                    { title: 'Zero Debt', desc: 'No monthly liabilities.' },
                                    { title: 'Full Control', desc: '100% system ownership.' },
                                    { title: 'Max Savings', desc: 'No interest or hidden fees.' },
                                    { title: 'Priority', desc: 'Fast-track installation.' },
                                ].map((item, i) => (
                                    <div key={i} className="col-sm-6">
                                        <div className="premium-feature-card h-100">
                                            <div className="dot-icon"></div>
                                            <h6 className="fw-bold mb-1">{item.title}</h6>
                                            <p className="small text-muted mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= OPTION 2 ================= */}
            <section className="py-5 bg-soft-green">
                <div className="py-4 container">
                    <div className="row align-items-center g-5 flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <a href="/contact" className="active-image-link">
                                <img
                                    src={solarImg}
                                    alt="Installment"
                                    className="img-fluid rounded-5 shadow-2xl active-image-premium"
                                />
                            </a>
                        </div>

                        <div className="col-lg-6 pe-lg-4">
                            <h6 className="text-success fw-bold text-uppercase mb-2">Plan Beta</h6>
                            <h2 className="display-5 fw-bold mb-4">Solar on Installment</h2>
                            <p className="text-muted fs-5 mb-4">
                                Start saving from day one. Pay a small down payment and let your monthly savings cover the installments.
                            </p>

                            {[
                                'Low 20% upfront payment',
                                'Flexible 12-24 month plans',
                                'Direct in-house financing',
                                'Ownership transfer on completion',
                            ].map((item, i) => (
                                <div key={i} className="d-flex align-items-center gap-3 mb-3">
                                    <div className="check-circle">✓</div>
                                    <span className="fw-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= OPTION 3 ================= */}
            <section className="py-5">
                <div className="py-4 container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <a href="/contact" className="active-image-link">
                                <img
                                    src={solarImg}
                                    alt="Bank Finance"
                                    className="img-fluid rounded-5 shadow-2xl active-image-premium"
                                />
                            </a>
                        </div>

                        <div className="col-lg-6 ps-lg-4">
                            <h6 className="text-success fw-bold text-uppercase mb-2">Plan Gamma</h6>
                            <h2 className="display-5 fw-bold mb-4">Bank Financing</h2>
                            <p className="text-muted fs-5 mb-4">Partnered with leading banks to offer SBP subsidized solar schemes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= OPTION 4 ================= */}
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="ppa-premium-box p-5 text-white position-relative">
                        <div className="row align-items-center g-5 position-relative" style={{ zIndex: 2 }}>
                            <div className="col-lg-7">
                                <h2 className="display-4 fw-bold mb-3">
                                    PPA Model <span className="text-success-light">(Zero Investment)</span>
                                </h2>
                                <p className="lead opacity-75">We install, maintain, and operate. You only pay for energy used.</p>
                            </div>

                            <div className="col-lg-5">
                                <a href="/contact" className="active-image-link">
                                    <img src={solarImg} alt="PPA" className="img-fluid rounded-4 shadow-lg active-image-premium" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* ================= STYLES ================= */}
            <style jsx>{`
                :root {
                    --brand-green: #022c22;
                }

                .text-success-gradient {
                    background: linear-gradient(90deg, #022c22, #16a34a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .btn-consultation {
                    background: var(--brand-green);
                    color: #fff;
                    padding: 16px 44px;
                    border-radius: 14px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.35s ease;
                    box-shadow: 0 15px 35px rgba(2, 44, 34, 0.4);
                }

                .btn-consultation:hover {
                    transform: translateY(-3px);
                    background: #034b3a;
                }

                .active-image-link {
                    display: block;
                    border-radius: 30px;
                }

                .active-image-premium {
                    transition: all 0.4s ease;
                    border: 2px solid transparent;
                }

                .active-image-link:hover .active-image-premium {
                    transform: scale(1.04);
                    border-color: var(--brand-green);
                    box-shadow: 0 30px 70px rgba(2, 44, 34, 0.35);
                }

                .bg-soft-green {
                    background: #f7fdf9;
                }

                .check-circle {
                    width: 28px;
                    height: 28px;
                    background: #dcfce7;
                    color: var(--brand-green);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                }

                .ppa-premium-box {
                    background: linear-gradient(135deg, #022c22, #064e3b);
                    border-radius: 40px;
                }
            `}</style>
        </div>
    );
}

export default Financing;
