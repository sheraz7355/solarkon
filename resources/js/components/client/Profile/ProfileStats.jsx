import { router } from '@inertiajs/react';

function ProfileStats() {
  const projects = [
    {
      category: 'On-Grid Solutions',
      title: 'Green Warehouse Initiative',
      description:
        'Helping a logistics hub reduce peak demand charges and stabilize energy costs with rooftop solar.',
      location: 'Dallas, Texas',
      date: 'June 2024',
      image:
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Solar + Battery Backup',
      title: 'Sustainable Schools Program',
      description:
        'Delivering safe, resilient power to classrooms so learning never stops during outages.',
      location: 'Portland, Oregon',
      date: 'January 2024',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Solar For Health',
      title: 'Solar For Health',
      description:
        'Supporting rural clinics with reliable electricity for critical equipment and vaccine storage.',
      location: 'Santa Monica, California',
      date: 'July 2023',
      image:
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <section className="section-shell bg-white" data-aos="fade-up">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3 section-heading">
          <div>
            <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#22C55E' }}>
              All Projects
            </p>
            <h2 className="fw-bold mb-0 section-title" style={{ fontSize: '1.5rem' }}>
              Explore All Our Solar Panel Installations And Success Stories
            </h2>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-sm btn-pill btn-soft-hover" style={{ backgroundColor: '#E5F9ED', color: '#166534' }}>
              All Categories
            </button>
            <button className="btn btn-sm btn-pill btn-ghost">2024</button>
            <button className="btn btn-sm btn-pill btn-ghost">Commercial</button>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {projects.map((project) => (
            <div key={project.title} className="col-12">
              <div className="surface-card h-100 overflow-hidden">
                <div className="row g-0 flex-column flex-md-row">
                  <div className="col-md-4">
                    <div
                      className="h-100 w-100"
                      style={{
                        minHeight: 180,
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="p-4 d-flex flex-column justify-content-between h-100">
                      <div>
                        <p className="text-uppercase small fw-semibold mb-1" style={{ color: '#22C55E' }}>
                          {project.category}
                        </p>
                        <h3 className="fw-bold mb-2" style={{ fontSize: '1.1rem', color: '#111827' }}>
                          {project.title}
                        </h3>
                        <p className="text-muted small mb-3">{project.description}</p>
                      </div>
                      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
                        <p className="small text-muted mb-0">
                          {project.location} • {project.date}
                        </p>
                        <button
                          className="btn btn-sm btn-pill px-3 btn-soft-hover"
                          style={{ backgroundColor: '#2D5016', color: '#ffffff' }}
                          // Updated to use Inertia router
                          onClick={() => router.visit('/project-details')}
                        >
                          View This Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 
            Note: In Laravel, pagination is usually handled automatically.
            When you integrate the backend, you will replace this static pagination 
            with the <Link> components provided by Laravel's paginate() method.
        */}
        <nav aria-label="Project pagination" className="d-flex justify-content-center">
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled">
              <button className="page-link">&laquo;</button>
            </li>
            <li className="page-item active">
              <button className="page-link" style={{ backgroundColor: '#22C55E', borderColor: '#22C55E' }}>
                1
              </button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">&raquo;</button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default ProfileStats;