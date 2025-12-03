import Card from './Card';
import { motion } from 'framer-motion';

function BlogSection() {
  const blogPosts = [
    {
      date: 'October 26, 2023',
      title: 'The Future of Solar Energy: Innovations and Trends',
      description:
        'Explore the latest advancements in solar technology and how they are shaping a sustainable future. From new panel designs to smart energy management systems, stay ahead with SOLARKON.',
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
    },
    {
      date: 'November 15, 2023',
      title: 'How Solar Panels Increase Your Home Value',
      description:
        "Discover how installing solar panels can significantly boost your property's market value and make it more attractive to potential buyers.",
      image:
        'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
    },
    {
      date: 'December 5, 2023',
      title: 'Maximizing Your Solar Investment Returns',
      description:
        'Learn about the financial benefits of solar energy and how to maximize your return on investment with smart energy management strategies.',
      image:
        'https://images.unsplash.com/photo-1509395283749-8d6f0c7e1d0b?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section className='section-shell bg-white' data-aos='fade-up'>
      <div className='container'>
        <motion.div
          className='text-center mb-5 section-heading'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className='eyebrow'>Blog &amp; News</span>
          <h2 className='fw-bold section-title mt-3' style={{ fontSize: '2.3rem' }}>
            Stay Informed With Expert Insights, Tips About Solar Energy
          </h2>
        </motion.div>

        <div className='row g-4'>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              className='col-md-6 col-lg-4'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className='h-100 border-0 surface-card'>
                <div
                  className='position-relative d-flex align-items-center justify-content-center'
                  style={{
                    height: 190,
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className='position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill bg-white fw-semibold text-success small'>
                    {post.date}
                  </div>
                </div>

                <div className='card-body'>
                  <h3 className='card-title fw-bold mb-2' style={{ color: '#2D5016', fontSize: '1.05rem' }}>
                    {post.title}
                  </h3>
                  <p className='card-text text-muted small mb-3'>{post.description}</p>
                  <a
                    href='#'
                    className='d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold link-underline-hover'
                    style={{ color: '#22C55E' }}
                  >
                    Read More
                    <svg width='16' height='16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                    </svg>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;

