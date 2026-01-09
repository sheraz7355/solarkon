import { HiOutlineChevronRight } from 'react-icons/hi2';

function ProjectHero() {
  return (
    <section
      className="w-100"
      data-aos="fade-up"
      style={{ marginBottom: '4rem' }}
    >
      {/* TEXT */}
      <div
        className="text-center px-3"
        style={{
          maxWidth: 1140,
          margin: '0 auto 3rem auto',
        }}
      >
        {/* BREADCRUMB */}
        <div
          className="d-flex justify-content-center align-items-center gap-2 text-uppercase mb-4"
          style={{
            fontSize: 12,
            letterSpacing: '0.15em',
            color: '#6B7280',
            flexWrap: 'wrap',
          }}
        >
          <span>Case Study</span>
          <HiOutlineChevronRight size={14} />
          <span style={{ color: '#1F2933' }}>
            Sustainable Living For Community
          </span>
        </div>

        {/* TITLES */}
        <h1
          className="fw-semibold mb-2"
          style={{
            fontSize: 'clamp(30px, 5vw, 52px)',
            lineHeight: 1.15,
            color: '#5EA82F',
          }}
        >
          Sustainable Living
        </h1>

        <h2
          className="fw-semibold mb-0"
          style={{
            fontSize: 'clamp(30px, 5vw, 52px)',
            lineHeight: 1.15,
            color: '#1F2933',
          }}
        >
          For Community
        </h2>
      </div>

      {/* IMAGE (NO 100vw → NO SCROLL) */}
      <div className="container-fluid px-0">
        <img
          src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Solar rooftop for sustainable community"
          className="w-100 d-block"
          style={{
height: 'clamp(470px, 75vh, 680px)',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}

export default ProjectHero;
