import { HiOutlineChevronRight } from 'react-icons/hi2';

function ProjectHero() {
  return (
    <div className="d-flex flex-column gap-3" data-aos="fade-up">
      <div className="d-flex align-items-center gap-2 text-muted small text-uppercase">
        <span>Case Study</span>
        <HiOutlineChevronRight size={14} />
        <span className="text-body">Sustainable Living For Community</span>
      </div>

      <div>
        <p className="fw-semibold mb-0" style={{ fontSize: 28, color: '#5EA82F' }}>
          Sustainable Living
        </p>
        <p className="fw-semibold" style={{ fontSize: 28, color: '#1F2933' }}>
          For Community
        </p>
      </div>

      <div className="rounded-4 overflow-hidden surface-card tilt-float">
        <img
          src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Solar rooftop for sustainable community"
          className="w-100"
          style={{ maxHeight: 380, objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default ProjectHero;
