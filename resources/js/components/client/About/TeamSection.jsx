// TeamSection - meet our best team cards
function TeamSection() {
  const team = [
    {
      name: 'Faisal Ahmed',
      role: 'Project Director',
      image:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sara Malik',
      role: 'Lead Solar Engineer',
      image:
        'https://images.unsplash.com/photo-1544723795-432537d12f6c?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Usman Khan',
      role: 'Energy Consultant',
      image:
        'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Ayesha Noor',
      role: 'Customer Success Lead',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-4 mb-md-5 section-heading">
          <div className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
            Our Team
          </div>
          <h2 className="fw-bold mb-2 section-title" style={{ fontSize: '2rem' }}>
            Meet Our Best Team
          </h2>
          <p className="text-muted mb-0 mx-auto section-subtitle" style={{ maxWidth: 600 }}>
            Passionate professionals dedicated to helping you make the switch to clean energy with
            confidence.
          </p>
        </div>

        <div className="row g-4">
          {team.map((member) => (
            <div key={member.name} className="col-6 col-md-3">
              <div className="h-100 text-center rounded-4 surface-card overflow-hidden">
                <div
                  className="w-100"
                  style={{
                    height: 180,
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="p-3">
                  <h3 className="fw-semibold mb-1" style={{ fontSize: '0.95rem', color: '#111827' }}>
                    {member.name}
                  </h3>
                  <p className="text-muted small mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
