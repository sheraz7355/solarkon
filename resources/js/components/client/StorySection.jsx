// StorySection component using Bootstrap
function StorySection() {
  const storyImage =
    'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80';

  const highlights = [
    {
      label: 'Since 2015',
      title: 'Trusted Solar Partner',
      description:
        'Helping families and businesses transition to clean, renewable energy with tailored solutions.',
    },
    {
      label: 'Community First',
      title: 'Local Expertise',
      description:
        'Our team understands local regulations, incentives, and conditions to maximize your savings.',
    },
  ];

  return (
    <section id="story" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Image column */}
          <div className="col-lg-6 order-1 order-lg-1">
            <div className="rounded-4 overflow-hidden shadow-sm card-hover" style={{ minHeight: 320 }}>
              <div
                className="w-100 h-100"
                style={{
                  minHeight: 320,
                  backgroundImage: `url(${storyImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Content column */}
          <div className="col-lg-6 order-2 order-lg-2">
            <div className="mb-2 text-uppercase small fw-semibold" style={{ color: '#22C55E' }}>
              // Our Story
            </div>
            <h2 className="fw-bold mb-3" style={{ color: '#2D5016', fontSize: '2.2rem' }}>
              Powering A Greener Future, One Roof At A Time
            </h2>
            <p className="text-muted mb-4">
              SOLARKON was founded with a simple mission: make clean, affordable solar energy accessible
              to everyone. From the first consultation to ongoing support, we handle every step so you
              can enjoy worry-free solar for years to come.
            </p>

            <div className="row g-3">
              {highlights.map((item, index) => (
                <div key={index} className="col-sm-6">
                  <div className="h-100 rounded-4 border-0 shadow-sm p-3 p-md-4 card-hover">
                    <div className="small fw-semibold mb-1" style={{ color: '#22C55E' }}>
                      {item.label}
                    </div>
                    <h3 className="fw-bold mb-1" style={{ fontSize: '1rem', color: '#111827' }}>
                      {item.title}
                    </h3>
                    <p className="text-muted small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
