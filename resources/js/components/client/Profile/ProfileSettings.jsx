import { router } from '@inertiajs/react';

// ProfileSettings - bottom CTA inspired by projects banner
function ProfileSettings() {
  const backgroundImage =
    'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1400';

  return (
    <section className="section-shell position-relative overflow-hidden" data-aos="fade-up">
      <div className="container">
        <div className="rounded-4 overflow-hidden surface-card p-0">
          <div className="row g-0 align-items-stretch">
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center text-center text-lg-start"
              style={{ backgroundColor: '#163023' }}
            >
              <div className="px-4 px-lg-5 py-5 text-white" style={{ maxWidth: 520 }}>
                <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#BBF7D0' }}>
                  Inspired By Our Projects?
                </p>
                <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
                  Ready To Bring Solar To Your Space?
                </h2>
                <p className="mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Work with our team to design a solar solution tailored to your property, budget, and
                  long-term goals.
                </p>
                <button
                  className="btn btn-pill px-4 btn-soft-hover"
                  style={{ backgroundColor: '#22C55E', color: '#1F2937' }}
                  type="button"
                  onClick={() => router.visit('/contact')}
                >
                  Book A Free Consultation
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="h-100 w-100 position-relative"
                style={{
                  minHeight: 260,
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(22,48,35,0.15), rgba(0,0,0,0.4))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSettings;
