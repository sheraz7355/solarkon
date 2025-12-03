// ProfileInfo - featured project hero card
import { router } from '@inertiajs/react';

function ProfileInfo() {
  // Removed react-router navigation
  // const navigate = useNavigate();
  const featuredImage =
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80';

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="surface-card overflow-hidden">
          <div className="row g-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-between p-4 p-lg-5"
              style={{ backgroundColor: '#1F2937', color: '#ffffff' }}
            >
              <div>
                <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#A7F3D0' }}>
                  Featured Project
                </p>
                <h2 className="fw-bold mb-3" style={{ fontSize: '1.9rem' }}>
                  Solar-Powered Healthcare Facility
                </h2>
                <p className="mb-4 text-white-50">
                  Increasing the energy resilience of hospitals and clinics while lowering operating
                  costs through clean, reliable solar power.
                </p>
                <p className="small mb-1 text-white-50">Commercial Solar System</p>
                <p className="small mb-4 text-white-50">Los Angeles, CA · March 2024</p>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <button
                  className="btn btn-pill btn-soft-hover"
                  style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
                  onClick={() => router.visit('/project-details')}
                >
                  View Full Project
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="h-100 w-100"
                style={{
                  minHeight: 260,
                  backgroundImage: `url(${featuredImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
