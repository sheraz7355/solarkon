function VisionValuesSection() {
    return (
        <section className="py-5 bg-white">
            <div className="container-fluid px-4">
                {/* Section Header */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <h2
                            className="mt-3 fw-bold"
                            style={{
                                fontSize: '2.4rem',
                                lineHeight: '1.2',
                                color: '#1F2937',
                            }}
                        >
                            Our Values At Solarkon <br /> Solar Panel Solutions
                        </h2>
                    </div>

                    <div className="col-lg-6">
                        <p
                            style={{
                                color: '#6B7280',
                                fontSize: '1.05rem',
                                maxWidth: '480px',

                            }}
                        >
                            At Solarkon, our values are the driving force behind everything we do, guiding how we serve our customers and deliver
                            reliable solar solutions.
                        </p>
                    </div>
                </div>

                {/* Values Cards */}
                <div className="row g-4">
                    {/* Innovation */}
                    <div className="col-lg-4">
                        <div
                            className="h-100 p-4"
                            style={{
                                backgroundColor: '#F5FAE8',
                                borderRadius: '14px',
                            }}
                        >
                            <div className="mb-3">
                                <svg width="28" height="28" fill="none" stroke="#6FA843" strokeWidth="2">
                                    <path d="M14 2v4M4.9 4.9l2.8 2.8M2 14h4M4.9 23.1l2.8-2.8M14 22v4M23.1 23.1l-2.8-2.8M22 14h4M23.1 4.9l-2.8 2.8" />
                                    <circle cx="14" cy="14" r="5" />
                                </svg>
                            </div>

                            <h5 className="fw-bold mb-2" style={{ color: '#3F6212' }}>
                                Innovation
                            </h5>

                            <p className="mb-0" style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                                Constantly evolving with advanced solar technology and smart energy solutions.
                            </p>
                        </div>
                    </div>

                    {/* Sustainability */}
                    <div className="col-lg-4">
                        <div
                            className="h-100 p-4"
                            style={{
                                backgroundColor: '#F5FAE8',
                                borderRadius: '14px',
                            }}
                        >
                            <div className="mb-3">
                                <svg width="28" height="28" fill="none" stroke="#6FA843" strokeWidth="2">
                                    <path d="M12 21s-6-4.35-6-9a6 6 0 0112 0c0 4.65-6 9-6 9z" />
                                    <path d="M12 21s6-4.35 6-9a6 6 0 00-12 0" />
                                </svg>
                            </div>

                            <h5 className="fw-bold mb-2" style={{ color: '#3F6212' }}>
                                Sustainability
                            </h5>

                            <p className="mb-0" style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                                Dedicated to reducing carbon footprints and promoting renewable energy.
                            </p>
                        </div>
                    </div>

                    {/* Customer Commitment */}
                    <div className="col-lg-4">
                        <div
                            className="h-100 p-4"
                            style={{
                                backgroundColor: '#F5FAE8',
                                borderRadius: '14px',
                            }}
                        >
                            <div className="mb-3">
                                <svg width="28" height="28" fill="none" stroke="#6FA843" strokeWidth="2">
                                    <path d="M12 2l3 6h6l-4.5 4 1.5 6-6-3.5L6 18l1.5-6L3 8h6l3-6z" />
                                </svg>
                            </div>

                            <h5 className="fw-bold mb-2" style={{ color: '#3F6212' }}>
                                Customer Commitment
                            </h5>

                            <p className="mb-0" style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                                Prioritizing seamless installation, personalized support, and long-term satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisionValuesSection;
