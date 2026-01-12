function AboutMissionSection() {
  const image =
    'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1400&q=80';

  const stats = [
    { value: '10k+', label: 'Solar Installations' },
    { value: '100k', label: 'Tons of CO₂ Reduced' },
    { value: '70%', label: 'Up To Savings' },
  ];

  return (
    <section className="about-mission-section">
      <div className="container about-mission-container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* IMAGE */}
          <div className="col-12 col-lg-6">
            <div
              className="mission-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>

          {/* CONTENT */}
          <div className="col-12 col-lg-6">
        

            <h2 className="mission-title">
              Innovating Solar Solutions<br />For A Sustainable Tomorrow
            </h2>

            <p className="mission-desc">
              Solarkon is a leading provider of solar energy solutions,
              helping homeowners, businesses, and communities transition
              to clean, renewable power. Our cutting-edge technology and
              expert team ensure maximum efficiency, long-term savings,
              and reduced environmental impact.
            </p>

            {/* STATS */}
            <div className="mission-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* ===== SECTION ===== */
        .about-mission-section {
          padding: 90px 0;
          background: #ffffff;
          overflow-x: hidden; /* 🔥 FIX SCROLLBAR */
        }

        /* ===== CONTAINER FIX ===== */
        .about-mission-container {
          max-width: 100%;
          padding-left: 15px;
          padding-right: 15px;
        }

        /* IMAGE */
        .mission-image {
          width: 100%;
          height: 420px;
          border-radius: 20px;
          background-size: cover;
          background-position: center;
        }

        /* TEXT */
        .section-tag {
          display: inline-block;
          margin-bottom: 10px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #6bbf59;
        }

        .mission-title {
          font-size: 34px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 18px;
          color: #1f2937;
        }

        .mission-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #6b7280;
          margin-bottom: 28px;
          max-width: 520px;
        }

        /* STATS */
        .mission-stats {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat-box {
          min-width: 100px;
        }

        .stat-value {
          font-size: 26px;
          font-weight: 700;
          color: #2d5016;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .about-mission-section {
            padding: 60px 0;
          }

          /* 🔥 SPACE BETWEEN IMAGE & TEXT */
          .mission-image {
            height: 260px;
            border-radius: 16px;
            margin-bottom: 20px;
          }

          .mission-title {
            font-size: 26px;
          }

          .mission-desc {
            font-size: 14px;
          }

          .mission-stats {
            gap: 20px;
          }

          .stat-value {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutMissionSection;
