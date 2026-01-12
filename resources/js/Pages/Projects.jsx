import { useState, useMemo } from 'react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import ProjectsHeroSlider from '../components/client/ProjectHerosection';
import { router, Head } from '@inertiajs/react';

import {
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt, 
  FaCalendarAlt, FaSolarPanel, FaCheckCircle, FaClock,
} from 'react-icons/fa';

const PROJECTS_PER_PAGE = 4;

export default function Projects({ projectData }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');

  // Handle null/undefined data safely
  const allProjects = projectData || [];

  // FILTER: Get only Featured Projects for the Hero Slider
  const featuredProjects = allProjects.filter(p => p.is_featured === 1 || p.is_featured === true);

  // FILTER: Main List Logic
  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? allProjects
      : allProjects.filter(p => p.status === filter);
  }, [filter, allProjects]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    return filteredProjects.slice(
      (page - 1) * PROJECTS_PER_PAGE,
      page * PROJECTS_PER_PAGE
    );
  }, [page, filteredProjects]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Head title="Our Projects" />
      <Navbar />
      <WhatsAppFloat />

      <main className="flex-grow-1">
        {/* HEADER */}
        <section className="py-5 text-center">
          <div className="container">
            <h1 className="fw-bold display-4 mb-3">
              Our <span style={{ color: '#6b8e23' }}>Solar</span> Success Stories
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: 640 }}>
              Explore how Solarkon is transforming homes, businesses, and communities.
            </p>
          </div>
        </section>

        {/* HERO SLIDER (Dynamic Featured Projects) */}
        <ProjectsHeroSlider featuredProjects={featuredProjects} />

        {/* FILTER SECTION */}
        <section className="py-5">
             <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 border-bottom pb-4">
              <h2 className="fw-bold mb-0" style={{ color: '#022c22' }}>
                Explore All Our Solar Installations
              </h2>

              <div className="d-flex gap-2 flex-wrap">
                {['All', 'Completed', 'Ongoing'].map(f => (
                  <button
                    key={f}
                    onClick={() => {
                      setFilter(f);
                      setPage(1);
                    }}
                    className="btn rounded-pill px-4 py-2 fw-semibold"
                    style={{
                      background: filter === f ? '#022c22' : '#e6f4ef',
                      color: filter === f ? '#fff' : '#022c22',
                      border: '1px solid #022c22',
                    }}
                  >
                    {f === 'All' ? 'All Categories' : f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="pb-5">
          <div className="container">
            <div className="row g-4">
              {paginatedProjects.map(p => (
                <div key={p.id} className="col-12 col-md-6">
                  <div className="h-100 rounded-4 overflow-hidden" style={{ background: '#f0f7f4', border: '1px solid #d1e7dd' }}>
                    
                    {/* Image */}
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-100"
                      style={{ height: 240, objectFit: 'cover' }}
                    />

                    <div className="p-4">
                      {/* Status */}
                      <div className="d-flex align-items-center gap-2 mb-2">
                        {p.status === 'Completed' ? <FaCheckCircle color="#198754" /> : <FaClock color="#d97706" />}
                        <span className="fw-semibold small" style={{ color: p.status === 'Completed' ? '#198754' : '#d97706' }}>
                          {p.status}
                        </span>
                      </div>

                      <p className="fw-semibold mb-1" style={{ color: '#6b8e23' }}>
                        <FaSolarPanel className="me-2" />
                        {p.tag}
                      </p>

                      <h5 className="fw-bold mb-2" style={{ color: '#022c22' }}>{p.title}</h5>

                      {/* Description truncated */}
                      <p className="text-muted small mb-3" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                        {p.description}
                      </p>

                      <div className="d-flex flex-wrap gap-3 text-muted small mb-4">
                        <span><FaMapMarkerAlt className="me-1" />{p.location}</span>
                        <span><FaCalendarAlt className="me-1" />{p.date}</span>
                      </div>

                      <button
                        onClick={() => router.visit(`/projects/${p.slug}`)}
                        className="btn rounded-pill px-4 py-2 fw-semibold"
                        style={{ background: '#022c22', color: '#fff', fontSize: 14 }}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

               {/* Empty State */}
               {paginatedProjects.length === 0 && (
                  <div className="col-12 text-center py-5">
                    <h5 className="text-muted">No projects found.</h5>
                  </div>
              )}
            </div>

            {/* Pagination */}
             {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
                <button
                  className="btn rounded-pill px-3"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  style={{ border: '1px solid #022c22' }}
                >
                  <FaArrowLeft className="me-1" />
                  Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className="btn rounded-circle"
                    style={{
                      width: 44,
                      height: 44,
                      background: page === i + 1 ? '#022c22' : '#e6f4ef',
                      color: page === i + 1 ? '#fff' : '#022c22',
                      border: '1px solid #022c22',
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="btn rounded-pill px-3"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  style={{ border: '1px solid #022c22' }}
                >
                  Next
                  <FaArrowRight className="ms-1" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}