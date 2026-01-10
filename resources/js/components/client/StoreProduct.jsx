import StoreCard from './StoreCard';

/**
 * SOLAR PRODUCTS DATA
 */
const products = [
  {
    title: 'Solar Lite Package',
    desc: 'Affordable on-grid solution for small homes.',
    type: 'Lite • On-Grid',
    voltage: '3kW',
    originalPrice: '480,000',
    discountPrice: '410,000',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
  },
  {
    title: 'Solar Basic System',
    desc: 'Reliable energy system for daily household use.',
    type: 'Basic • On-Grid',
    voltage: '5kW',
    originalPrice: '720,000',
    discountPrice: '640,000',
    image: 'https://images.unsplash.com/photo-1584270354949-1f6f0f9c39e8',
  },
  {
    title: 'Hybrid Solar System',
    desc: 'Solar + battery backup for uninterrupted power.',
    type: 'Hybrid',
    voltage: '8kW',
    originalPrice: '1,450,000',
    discountPrice: '1,250,000',
    image: 'https://images.unsplash.com/photo-1604909053196-74fdfc6c8b0f',
  },
  {
    title: 'Solar Plus Package',
    desc: 'High-capacity solution for villas & offices.',
    type: 'Plus • Hybrid',
    voltage: '12kW',
    originalPrice: '2,200,000',
    discountPrice: '1,980,000',
    image: 'https://images.unsplash.com/photo-1592833159155-2c9f40b9a18c',
  },
  {
    title: 'Commercial Solar System',
    desc: 'Scalable solar solution for businesses.',
    type: 'Commercial • On-Grid',
    voltage: '20kW',
    originalPrice: '3,800,000',
    discountPrice: '3,450,000',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da',
  },
];

/**
 * STORE PRODUCTS SECTION
 */
const StoreProducts = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <StoreCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
