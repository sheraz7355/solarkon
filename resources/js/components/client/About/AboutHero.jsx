function AboutHero() {
    const heroImage = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80';

    const awards = [
        {
            title: 'Best Solar Energy Provider 2024',
            description: 'Recognized for excellence in solar solutions and customer satisfaction.',
        },
        {
            title: 'Top 10 Green Tech Leaders',
            description: 'Awarded for innovation in renewable and clean energy technologies.',
        },
        {
            title: 'Sustainability Leadership Award',
            description: 'Honored for long-term commitment to environmental responsibility.',
        },
    ];

    return (
        <section className="about-hero-section">
            <div className="about-container">
                {/* HEADING */}
                <div className="about-heading text-center">
                    <h1 className="fw-bold mb-3" style={{ fontSize: '2.6rem' }}>
                        <span style={{ color: '#16a34a' }}>Our</span> <span style={{ color: '#064E3B' }}>Story</span>{' '}
                        <span style={{ color: '#111827' }}>to</span> <span style={{ color: '#16a34a' }}>Success</span>
                    </h1>
                    <p>
                        <strong>Solarkon Private Limited</strong> is a leading solar energy provider in Pakistan, delivering high-quality solar
                        solutions for homes, businesses, and industries. We are committed to powering a cleaner, smarter, and more sustainable future.
                    </p>
                </div>

                {/* HERO IMAGE */}
                <div className="about-hero-image" style={{ backgroundImage: `url(${heroImage})` }} />

                {/* AWARDS */}
                <div className="row about-awards">
                    {awards.map((award, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="award-card">
                                <div className="award-icon">★</div>
                                <h3>{award.title}</h3>
                                <p>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* STYLES */}
            <style>{`
        /* ===== MAIN SECTION ===== */
        .about-hero-section {
          padding: 80px 0;
          background: #ffffff;
          overflow-x: hidden; /* FIX horizontal scroll */
        }

        .about-container {
          padding: 0 15px; /* LEFT & RIGHT padding */
        }

        /* ===== HEADING ===== */
        .about-heading {
          max-width: 820px;
          margin: 0 auto 50px;
        }

        .gradient-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(
            90deg,
            #000000 0%,
            #ffffff 30%,
            #022c22 70%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-heading p {
          font-size: 16px;
          line-height: 1.7;
          color: #6b7280;
        }

        .about-heading strong {
          color: green;
          font-weight: 700;
        }

        /* ===== HERO IMAGE ===== */
        .about-hero-image {
          width: 100%;
          height: 420px;
          border-radius: 14px;
          background-size: cover;
          background-position: center;
          margin-bottom: 60px;
        }

        /* ===== AWARDS ===== */
        .about-awards {
          row-gap: 24px;
        }

        .award-card {
          height: 100%;
          padding: 32px 26px;
          border-radius: 18px;
          background: #f9fafb;
          text-align: center;
          transition: all 0.3s ease;
        }

        .award-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .award-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #eaf7ef;
          color: #2D5016;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .award-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #2D5016; /* dark green titles */
        }

        .award-card p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 60px 0;
          }

          .gradient-title {
            font-size: 30px;
          }

          .about-heading p {
            font-size: 15px;
          }

          .about-hero-image {
            height: 260px;
            margin-bottom: 40px;
          }

          .award-card {
            padding: 24px 20px;
          }
        }
      `}</style>
        </section>
    );
}

export default AboutHero;
