import { useState } from 'react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import { motion } from 'framer-motion';

function Projects() {
  const [filter, setFilter] = useState('All');

  // This will be fetched from API later
  const projects = [
    { id: 1, name: 'Bashir Sons Steel Industry', capacity: '5 MWp', sector: 'Industrial', status: 'Completed', location: 'Kala Shah Kaku' },
    { id: 2, name: 'Gourmet Bakeries', capacity: '3.5 MWp', sector: 'Commercial', status: 'Completed', location: 'Multiple Branches' },
    { id: 3, name: 'Hajvery Foods', capacity: '1.2 MWp', sector: 'Industrial', status: 'Completed', location: 'Daska, Sialkot' },
    { id: 4, name: 'Hajvery Beverages', capacity: '1 MWp', sector: 'Industrial', status: 'Completed', location: 'Kala Shah Kaku' },
    { id: 5, name: 'Gourmet Oil & Ghee Mills', capacity: '1.075 MWp', sector: 'Industrial', status: 'Completed', location: 'Gujranwala' },
    { id: 6, name: 'Lahore Grammar School', capacity: '500 KWp', sector: 'Commercial', status: 'Completed', location: 'Multiple Branches' },
    { id: 7, name: 'Bashir Sons Steel Industry', capacity: '10 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Kala Shah Kaku' },
    { id: 8, name: 'Five Star Steel Industry', capacity: '5 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Lahore' },
    { id: 9, name: 'Al Fateh Steel Mill', capacity: '6 MWp', sector: 'Industrial', status: 'Ongoing', location: 'Karachi' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter);

  const filters = ['All', 'Completed', 'Ongoing'];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="section-shell bg-white" data-aos="fade-up">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow">Our Portfolio</span>
              <h1 className="fw-bold section-title mt-3" style={{ fontSize: '2.5rem' }}>
                Our Projects
              </h1>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '700px' }}>
                700+ Solar Installations across Pakistan with 150MW+ Total Capacity
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="section-shell pt-0" data-aos="fade-up">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`btn btn-pill px-4 ${
                    filter === f
                      ? 'text-white'
                      : 'btn-outline-secondary'
                  }`}
                  style={{
                    backgroundColor: filter === f ? '#2D5016' : 'transparent',
                    borderColor: filter === f ? '#2D5016' : '#e2e8f0',
                    color: filter === f ? '#ffffff' : '#64748b',
                    fontWeight: 600,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="col-12 col-md-6 col-lg-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="surface-card h-100 p-4 rounded-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          backgroundColor: project.status === 'Completed' ? '#D1FAE5' : '#FEF3C7',
                          color: project.status === 'Completed' ? '#166534' : '#92400E',
                          fontWeight: 600,
                        }}
                      >
                        {project.status}
                      </span>
                      <span className="text-muted small">{project.sector}</span>
                    </div>
                    <h3 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.2rem' }}>
                      {project.name}
                    </h3>
                    <p className="text-muted small mb-3">{project.location}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <p className="fw-bold mb-0" style={{ color: '#22C55E', fontSize: '1.5rem' }}>
                          {project.capacity}
                        </p>
                        <p className="text-muted small mb-0">Capacity</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
