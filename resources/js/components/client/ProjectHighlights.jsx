import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

function ProjectHighlights() {
  
  // Only Completed (Green Flag) Projects
  // Note: Eventually, you can pass this data from your Laravel Controller as props!
  const projects = [
    {
      id: 1,
      name: 'Bashir Sons Steel Industry',
      location: 'Kala Shah Kaku',
      capacity: '5 MWp',
      sector: 'Industrial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Gourmet Bakeries',
      location: 'Multiple Branches',
      capacity: '3.5 MWp',
      sector: 'Commercial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      name: 'Hajvery Foods',
      location: 'Daska, Sialkot',
      capacity: '1.2 MWp',
      sector: 'Industrial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 4,
      name: 'Hajvery Beverages',
      location: 'Kala Shah Kaku',
      capacity: '1 MWp',
      sector: 'Industrial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 5,
      name: 'Gourmet Oil & Ghee Mills',
      location: 'Gujranwala',
      capacity: '1.075 MWp',
      sector: 'Industrial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 6,
      name: 'Lahore Grammar School',
      location: 'Multiple Branches',
      capacity: '500 KWp',
      sector: 'Commercial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5 section-heading">
          <span className="eyebrow" style={{ color: '#166534', backgroundColor: '#D1FAE5' }}>
            Flagship Projects
          </span>
          <h2 className="fw-bold section-title mt-3" style={{ fontSize: '2.3rem', color: '#14532d' }}>
            Our Completed Projects
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '600px' }}>
            Explore our flagship completed solar installations across Pakistan
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="surface-card h-100 overflow-hidden rounded-4" 
                style={{ cursor: 'pointer' }} 
                onClick={() => router.visit('/projects')} 
              >
                <div
                  className="position-relative"
                  style={{
                    height: 220,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="position-absolute top-0 end-0 m-3">
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', color: '#ffffff', fontWeight: 600, border: 'none' }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                    <span className="badge rounded-pill px-2 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '0.75rem' }}>
                      {project.sector}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="fw-bold mb-2" style={{ color: '#14532d', fontSize: '1.2rem' }}>
                    {project.name}
                  </h3>
                  <p className="text-muted small mb-2">
                    <strong>Location:</strong> {project.location}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="fw-bold mb-0" style={{ color: '#166534', fontSize: '1.1rem' }}>
                        {project.capacity}
                      </p>
                      <p className="text-muted small mb-0">Capacity</p>
                    </div>
                    <button
                      className="btn btn-sm btn-pill d-inline-flex align-items-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', color: '#ffffff', fontWeight: 600, border: 'none' }}
                    >
                      View Details
                      <HiArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-lg btn-pill px-5"
            style={{ 
              background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)',
              color: '#ffffff',
              fontWeight: 600,
              border: 'none',
            }}
            onClick={() => router.visit('/projects')}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectHighlights;