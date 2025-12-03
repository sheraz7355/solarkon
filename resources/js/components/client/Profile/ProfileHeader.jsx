// ProfileHeader - top heading and intro for project success stories
function ProfileHeader() {
  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container text-center section-heading">
        <p className="text-uppercase small fw-semibold mb-2" style={{ color: '#22C55E' }}>
          Project Portfolio
        </p>
        <h1 className="fw-bold mb-2 section-title" style={{ color: '#2D5016', fontSize: '2.3rem' }}>
          Our Solar Success Stories
        </h1>
        <p className="text-muted mb-0 mx-auto section-subtitle" style={{ maxWidth: 560 }}>
          Explore how Solarkon is transforming homes, businesses, and communities with
          dependable solar energy systems.
        </p>
      </div>
    </section>
  );
}

export default ProfileHeader;
