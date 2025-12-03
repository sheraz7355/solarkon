import { HiPhone } from 'react-icons/hi2';

function ProjectCTA() {
  return (
    <div className="container text-center text-white" data-aos="fade-up">
      <div className="mx-auto" style={{ maxWidth: 640 }}>
        <h2 className="fw-semibold mb-2" style={{ fontSize: 26 }}>
          Ready To Bring Solar To Your Community?
        </h2>
        <p className="mb-4" style={{ fontSize: 14, color: '#E5F2E0', lineHeight: 1.7 }}>
          Join the communities already benefiting from clean, affordable solar power. Let’s design a custom
          solution tailored to your needs.
        </p>
        <button className="btn btn-light btn-pill px-4 d-inline-flex align-items-center gap-2">
          <HiPhone size={18} />
          <span className="fw-semibold" style={{ color: '#163021' }}>
            Schedule a Consultation
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCTA;
