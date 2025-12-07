import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading, faFileAlt, faImage, faTrophy, faChartLine, faUsers, faList, faSave } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  const [aboutHero, setAboutHero] = useState({
    title: 'Powering A Brighter Future',
    subtitle: 'Join us in building a sustainable, cost-effective future powered by the sun.',
    heroImage: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1400&q=80',
    awards: [
      { title: 'Best Solar Energy Provider 2024', description: 'Recognized for excellence in solar solutions and customer service.' },
      { title: 'Top 10 Green Tech Leaders', description: 'Awarded for innovation in clean energy technology and deployment.' },
      { title: 'Sustainability Leadership Award', description: 'Honored for long-term commitment to environmental responsibility.' },
    ]
  });

  const [missionSection, setMissionSection] = useState({
    badge: '// About',
    title: 'Innovating Solar Solutions For A Sustainable Tomorrow',
    description: 'Solarkon is a leading provider of solar energy solutions, helping homeowners, businesses, and communities transition to clean, renewable power. Our in-house design, engineering, and installation teams work together to deliver systems that are efficient, reliable, and tailored to every project.',
    image: 'https://images.unsplash.com/photo-1509395230301-4b1e6b87a3f5?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Solar Installations', value: '10k+' },
      { label: 'Tons of CO₂ Reduced', value: '100k' },
      { label: 'Up to Savings', value: '70%' },
    ]
  });

  const [valuesSection, setValuesSection] = useState({
    badge: 'Our Values',
    title: 'Our Values At Solarkon Solar Panel Solutions',
    description: 'We believe solar should be simple, accessible, and built to last. Our team is committed to delivering systems that perform beautifully for years to come.',
    values: [
      { title: 'Customer-First Approach', description: 'We design every system around your goals, budget, and long-term plans.' },
      { title: 'Sustainable Design', description: 'Our solutions reduce environmental impact while maximizing performance.' },
      { title: 'Transparent Process', description: 'From proposal to installation, we keep you informed at every step.' },
    ]
  });

  const [teamSection, setTeamSection] = useState({
    badge: 'Our Team',
    title: 'Meet Our Best Team',
    description: 'Passionate professionals dedicated to helping you make the switch to clean energy with confidence.',
    team: [
      { name: 'Faisal Ahmed', role: 'Project Director', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sara Malik', role: 'Lead Solar Engineer', image: 'https://images.unsplash.com/photo-1544723795-432537d12f6c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Usman Khan', role: 'Energy Consultant', image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ayesha Noor', role: 'Customer Success Lead', image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=800&q=80' },
    ]
  });

  const [whyChooseUs, setWhyChooseUs] = useState({
    badge: 'See The Power Of Solar In Action',
    title: 'Real Projects. Real Impact.',
    description: 'From modern homes to large commercial installations, our projects show what is possible when smart design meets renewable energy. Every system is engineered for performance, reliability, and long-term value.',
    bulletPoints: [
      'High-efficiency panels and inverters',
      'Precision installation by certified experts',
      'Monitoring and support after your system goes live'
    ],
    buttonText: 'View Our Projects',
    gallery: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518961293643-4becefef7c54?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80',
    ],
    ctaTitle: 'Ready To Make The Switch To Solar?',
    ctaDescription: 'Talk with our energy consultants about a custom solar solution for your home or business.',
    ctaButton1: 'Get Free Consultation',
    ctaButton2: 'Contact Us'
  });

  const handleAboutHeroChange = (e) => {
    const { name, value } = e.target;
    setAboutHero(prev => ({ ...prev, [name]: value }));
  };

  const handleAwardChange = (index, field, value) => {
    setAboutHero(prev => ({
      ...prev,
      awards: prev.awards.map((award, i) => i === index ? { ...award, [field]: value } : award)
    }));
  };

  const handleMissionChange = (e) => {
    const { name, value } = e.target;
    setMissionSection(prev => ({ ...prev, [name]: value }));
  };

  const handleMissionStatChange = (index, field, value) => {
    setMissionSection(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => i === index ? { ...stat, [field]: value } : stat)
    }));
  };

  const handleValuesChange = (e) => {
    const { name, value } = e.target;
    setValuesSection(prev => ({ ...prev, [name]: value }));
  };

  const handleValueChange = (index, field, value) => {
    setValuesSection(prev => ({
      ...prev,
      values: prev.values.map((val, i) => i === index ? { ...val, [field]: value } : val)
    }));
  };

  const handleTeamChange = (e) => {
    const { name, value } = e.target;
    setTeamSection(prev => ({ ...prev, [name]: value }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    setTeamSection(prev => ({
      ...prev,
      team: prev.team.map((member, i) => i === index ? { ...member, [field]: value } : member)
    }));
  };

  const handleWhyChooseUsChange = (e) => {
    const { name, value } = e.target;
    setWhyChooseUs(prev => ({ ...prev, [name]: value }));
  };

  const handleBulletPointChange = (index, value) => {
    setWhyChooseUs(prev => ({
      ...prev,
      bulletPoints: prev.bulletPoints.map((bp, i) => i === index ? value : bp)
    }));
  };

  const handleGalleryChange = (index, value) => {
    setWhyChooseUs(prev => ({
      ...prev,
      gallery: prev.gallery.map((img, i) => i === index ? value : img)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = { aboutHero, missionSection, valuesSection, teamSection, whyChooseUs };
    console.log('About Us data:', allData);
    alert('About Us content updated successfully!');
  };

  const FormSection = ({ title, children, delay = 1 }) => (
    <div
      className="card border-0 shadow-lg rounded-4 surface-card mb-4 mb-sm-5 dashboard-card-enhanced fade-up"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
        border: '1px solid rgba(45, 80, 22, 0.1)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #2D5016 0%, #22C55E 100%)'
      }}></div>
      <div className="card-body p-3 p-sm-4 p-md-5">
        <h3 className="fw-bold mb-4 chart-title" style={{ 
          color: '#1e293b',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            borderRadius: '2px'
          }}></span>
          {title}
        </h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      {/* Header */}
      <div className="mb-4 mb-sm-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2 mb-sm-3 dashboard-title" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            About Us Content Management
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Manage all content for the About Us page
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* About Hero Section */}
        <FormSection title="About Hero Section">
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faHeading} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Title
              </label>
              <input type="text" name="title" value={aboutHero.title} onChange={handleAboutHeroChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faFileAlt} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Subtitle
              </label>
              <textarea name="subtitle" value={aboutHero.subtitle} onChange={handleAboutHeroChange} className="form-control rounded-3 admin-form-input" rows="2" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faImage} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Hero Image URL
              </label>
              <input type="url" name="heroImage" value={aboutHero.heroImage} onChange={handleAboutHeroChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faTrophy} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Awards
              </label>
              <div className="row g-3">
                {aboutHero.awards.map((award, index) => (
                  <div key={index} className="col-12 col-md-4">
                    <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8faf9' }}>
                      <input type="text" className="form-control form-control-sm mb-2" value={award.title} onChange={(e) => handleAwardChange(index, 'title', e.target.value)} placeholder="Award Title" required />
                      <textarea className="form-control form-control-sm" value={award.description} onChange={(e) => handleAwardChange(index, 'description', e.target.value)} placeholder="Award Description" rows="2" required />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FormSection>

        {/* Mission Section */}
        <FormSection title="Mission Section">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">Badge Text</label>
              <input type="text" name="badge" value={missionSection.badge} onChange={handleMissionChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">Image URL</label>
              <input type="url" name="image" value={missionSection.image} onChange={handleMissionChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Title</label>
              <input type="text" name="title" value={missionSection.title} onChange={handleMissionChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Description</label>
              <textarea name="description" value={missionSection.description} onChange={handleMissionChange} className="form-control rounded-3 admin-form-input" rows="4" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faChartLine} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Statistics
              </label>
              <div className="row g-3">
                {missionSection.stats.map((stat, index) => (
                  <div key={index} className="col-12 col-md-4">
                    <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8faf9' }}>
                      <input type="text" className="form-control form-control-sm mb-2" value={stat.label} onChange={(e) => handleMissionStatChange(index, 'label', e.target.value)} placeholder="Label" required />
                      <input type="text" className="form-control form-control-sm" value={stat.value} onChange={(e) => handleMissionStatChange(index, 'value', e.target.value)} placeholder="Value" required />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FormSection>

        {/* Values Section */}
        <FormSection title="Values Section">
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Badge Text</label>
              <input type="text" name="badge" value={valuesSection.badge} onChange={handleValuesChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Title</label>
              <input type="text" name="title" value={valuesSection.title} onChange={handleValuesChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Description</label>
              <textarea name="description" value={valuesSection.description} onChange={handleValuesChange} className="form-control rounded-3 admin-form-input" rows="3" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Values</label>
              <div className="row g-3">
                {valuesSection.values.map((value, index) => (
                  <div key={index} className="col-12 col-md-4">
                    <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8faf9' }}>
                      <input type="text" className="form-control form-control-sm mb-2" value={value.title} onChange={(e) => handleValueChange(index, 'title', e.target.value)} placeholder="Value Title" required />
                      <textarea className="form-control form-control-sm" value={value.description} onChange={(e) => handleValueChange(index, 'description', e.target.value)} placeholder="Value Description" rows="2" required />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FormSection>

        {/* Team Section */}
        <FormSection title="Team Section">
          <div className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Badge Text</label>
              <input type="text" name="badge" value={teamSection.badge} onChange={handleTeamChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Title</label>
              <input type="text" name="title" value={teamSection.title} onChange={handleTeamChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Description</label>
              <textarea name="description" value={teamSection.description} onChange={handleTeamChange} className="form-control rounded-3 admin-form-input" rows="2" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faUsers} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Team Members
              </label>
              <div className="row g-3">
                {teamSection.team.map((member, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="p-3 rounded-3 border" style={{ backgroundColor: '#f8faf9' }}>
                      <input type="text" className="form-control form-control-sm mb-2" value={member.name} onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)} placeholder="Name" required />
                      <input type="text" className="form-control form-control-sm mb-2" value={member.role} onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)} placeholder="Role" required />
                      <input type="url" className="form-control form-control-sm" value={member.image} onChange={(e) => handleTeamMemberChange(index, 'image', e.target.value)} placeholder="Image URL" required />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FormSection>

        {/* Why Choose Us Section */}
        <FormSection title="Why Choose Us Section">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">Badge Text</label>
              <input type="text" name="badge" value={whyChooseUs.badge} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">Button Text</label>
              <input type="text" name="buttonText" value={whyChooseUs.buttonText} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Title</label>
              <input type="text" name="title" value={whyChooseUs.title} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Description</label>
              <textarea name="description" value={whyChooseUs.description} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" rows="3" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">
                <FontAwesomeIcon icon={faList} style={{ color: '#22C55E', marginRight: '0.5rem' }} />
                Bullet Points
              </label>
              {whyChooseUs.bulletPoints.map((bp, index) => (
                <div key={index} className="mb-2">
                  <input type="text" className="form-control form-control-sm rounded-3" value={bp} onChange={(e) => handleBulletPointChange(index, e.target.value)} placeholder={`Bullet point ${index + 1}`} required />
                </div>
              ))}
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">Gallery Images (4 images)</label>
              <div className="row g-3">
                {whyChooseUs.gallery.map((img, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <input type="url" className="form-control form-control-sm rounded-3" value={img} onChange={(e) => handleGalleryChange(index, e.target.value)} placeholder={`Gallery image ${index + 1} URL`} required />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">CTA Title</label>
              <input type="text" name="ctaTitle" value={whyChooseUs.ctaTitle} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold mb-3 admin-form-label">CTA Description</label>
              <textarea name="ctaDescription" value={whyChooseUs.ctaDescription} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" rows="2" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">CTA Button 1 Text</label>
              <input type="text" name="ctaButton1" value={whyChooseUs.ctaButton1} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3 admin-form-label">CTA Button 2 Text</label>
              <input type="text" name="ctaButton2" value={whyChooseUs.ctaButton2} onChange={handleWhyChooseUsChange} className="form-control rounded-3 admin-form-input" required />
            </div>
          </div>
        </FormSection>

        {/* Submit Button */}
        <div className="d-flex justify-content-end mb-4">
          <button
            type="submit"
            className="btn btn-pill px-5 admin-btn-primary d-inline-flex align-items-center gap-2"
            style={{ 
              backgroundColor: '#2D5016',
              color: '#ffffff',
              border: 'none',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(45, 80, 22, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#22C55E';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2D5016';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 80, 22, 0.3)';
            }}
          >
            <FontAwesomeIcon icon={faSave} />
            Save All About Us Content
          </button>
        </div>
      </form>
    </div>
  );
}

export default AboutUs;
