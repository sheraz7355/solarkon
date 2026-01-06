import StoreCard from "./StoreCard";


/**
 * Static product data (later can be API driven)
 */
const products = [
    {
        title: 'Residential Solar Panels',
        desc: 'High-efficiency solar panels ideal for homes.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    },
    {
        title: 'Commercial Solar Systems',
        desc: 'Scalable solar solutions for businesses.',
        image: 'https://images.unsplash.com/photo-1584270354949-1f6f0f9c39e8',
    },
    {
        title: 'Solar Inverters',
        desc: 'Advanced inverters for maximum efficiency.',
        image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb1a',
    },
    {
        title: 'Solar Batteries',
        desc: 'Reliable energy storage for 24/7 power.',
        image: 'https://images.unsplash.com/photo-1604909053196-74fdfc6c8b0f',
    },
    {
        title: 'Solar Water Heaters',
        desc: 'Eco-friendly solar water heating solutions.',
        image: 'https://images.unsplash.com/photo-1592833159155-2c9f40b9a18c',
    },
    {
        title: 'Solar Street Lights',
        desc: 'Efficient solar lighting for public spaces.',
        image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da',
    },
];

/**
 * Store Products Section
 * - Responsive Bootstrap grid
 * - Uses StoreCard component
 */
const StoreProducts = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row g-4">
                    {products.map((product, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <StoreCard product={product} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoreProducts;
