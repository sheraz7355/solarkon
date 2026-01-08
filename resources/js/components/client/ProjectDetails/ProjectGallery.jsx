import React from 'react';

const images = [
  'https://images.pexels.com/photos/9875450/pexels-photo-9875450.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875446/pexels-photo-9875446.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875444/pexels-photo-9875444.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875443/pexels-photo-9875443.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

function ProjectGallery() {
  return (
    <>
      {/* 🔹 INLINE CSS */}
      <style>{`
        .project-gallery-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gallery-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2933;
          margin: 0;
        }

        .project-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .gallery-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 16px;
          transition: transform 0.3s ease;
        }

        .gallery-img:hover {
          transform: scale(1.03);
        }

        /* ⭐ MAGIC: if image count is odd → last image full width */
        .project-gallery-grid img:last-child:nth-child(odd) {
          grid-column: span 2;
        }

        @media (min-width: 992px) {
          .gallery-img {
            height: 240px;
          }
        }
      `}</style>

      {/* 🔹 COMPONENT */}
      <div className="project-gallery-wrapper" data-aos="fade-up">
        <h2 className="gallery-title">Project Gallery</h2>

        <div className="project-gallery-grid">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className="gallery-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;
