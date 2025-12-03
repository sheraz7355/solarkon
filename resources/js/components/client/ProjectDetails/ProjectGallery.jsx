const images = [
  'https://images.pexels.com/photos/9875450/pexels-photo-9875450.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875446/pexels-photo-9875446.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875444/pexels-photo-9875444.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875443/pexels-photo-9875443.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

function ProjectGallery() {
  return (
    <div className="d-flex flex-column gap-3 gap-lg-4" data-aos="fade-up">
      <h2 className="h5 mb-0" style={{ color: '#1F2933' }}>
        Project Gallery
      </h2>

      <div className="d-none d-lg-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
        {images.slice(0, 3).map((src) => (
          <img key={src} src={src} alt="" className="rounded-4 w-100" style={{ height: 220, objectFit: 'cover' }} />
        ))}
        <img
          src={images[3]}
          alt=""
          className="rounded-4 w-100"
          style={{ height: 220, objectFit: 'cover', gridColumn: 'span 2 / span 2' }}
        />
        <img src={images[4]} alt="" className="rounded-4 w-100" style={{ height: 220, objectFit: 'cover' }} />
      </div>

      <div className="d-grid d-lg-none" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
        {images.map((src) => (
          <img key={src} src={src} alt="" className="rounded-4 w-100" style={{ height: 130, objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
