import { useState } from 'react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import ProjectsHeroSlider from '../components/client/ProjectHerosection';
import { motion } from 'framer-motion';

const PROJECTS_PER_PAGE = 2;

const projects = [
  {
    id: 1,
    status: 'Completed',
    tag: 'Off-Grid Solutions',
    title: 'Green Warehouse Initiative',
    desc: 'Installed a 500 kW rooftop solar system, helping MetroLogix reduce carbon emissions by 40% and cut annual energy costs by over $70,000.',
    location: 'Dallas, Texas',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
  },
  {
    id: 2,
    status: 'Completed',
    tag: 'Educational Solar Integration',
    title: 'Sustainable Schools Program',
    desc: 'Designed and implemented a 180 kW solar array across three campuses, promoting clean energy education while saving the district an estimated $25,000 per year.',
    location: 'Ridgefield, Oregon',
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
  },
  {
    id: 3,
    status: 'Ongoing',
    tag: 'Solar + Battery Backup',
    title: 'Solar For Health',
    desc: 'Delivered a 300 kW solar system with battery storage, ensuring uninterrupted power for critical equipment and reducing grid reliance by 60%.',
    location: 'Sacramento, California',
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',
  },
];

export default function Projects() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(p => p.status === filter);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginated = filteredProjects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppFloat />

      <main>

        <section className="py-5 text-center">
          <div className="container">
            <h1 className="fw-bold display-5 mb-3">
              Our <span style={{ color: '#6b8e23' }}>Solar</span> Success Stories
            </h1>

            <p
              className="text-muted mx-auto"
              style={{ maxWidth: 640, fontSize: 16 }}
            >
              Explore how Solarkon is transforming homes, businesses, and
              communities with cutting-edge solar energy solutions.
            </p>
          </div>
        </section>

        {/* ================= HERO SLIDER ================= */}
        <ProjectsHeroSlider />

        {/* ================= EXPLORE + FILTER BAR ================= */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 border-bottom pb-4">

              {/* LEFT TEXT */}
              <div>
                

                <h2
                  className="fw-bold mb-0"
                  style={{ color: '#022c22', maxWidth: 680 }}
                >
                  Explore All Our Solar Panel Installations And Success Stories
                </h2>
              </div>

              {/* FILTERS */}
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
                      background: filter === f ? '#022c22' : '#fff',
                      color: filter === f ? '#fff' : '#022c22',
                      border: '1px solid #022c22',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {f === 'All' ? 'All Categories' : f}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ================= PROJECT LIST ================= */}
        <section className="pb-5">
          <div className="container">

            {paginated.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="row align-items-center mb-5"
              >

                {/* TEXT */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <span
                    className="badge rounded-pill mb-2"
                    style={{
                      background:
                        p.status === 'Completed'
                          ? '#dcfce7'
                          : '#fef3c7',
                      color:
                        p.status === 'Completed'
                          ? '#166534'
                          : '#92400e',
                    }}
                  >
                    {p.status}
                  </span>

                  <p className="fw-semibold text-success mt-2 mb-1">
                    {p.tag}
                  </p>

                  <h2 className="fw-bold" style={{ color: '#022c22' }}>
                    {p.title}
                  </h2>

                  <p className="text-muted mt-3">
                    {p.desc}
                  </p>

                  <p className="text-muted fw-medium mb-4">
                    {p.location} • {p.date}
                  </p>

                  <button
                    className="btn rounded-pill px-4 py-2 fw-semibold"
                    style={{ background: '#022c22', color: '#fff' }}
                  >
                    View More Detail ↗
                  </button>
                </div>

                {/* IMAGE */}
                <div className="col-lg-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="img-fluid rounded-4 w-100"
                    style={{ height: 340, objectFit: 'cover' }}
                  />
                </div>

              </motion.div>
            ))}

            {/* ================= PAGINATION ================= */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
                <button
                  className="btn border"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ‹
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className="btn rounded-circle"
                    style={{
                      width: 42,
                      height: 42,
                      background: page === i + 1 ? '#022c22' : '#fff',
                      color: page === i + 1 ? '#fff' : '#022c22',
                      border: '1px solid #022c22',
                    }}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="btn border"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  ›
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
