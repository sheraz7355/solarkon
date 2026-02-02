import { Link, router, usePage } from '@inertiajs/react';

const StoreCard = ({ product }) => {
    return (
        <div className="card h-100 border-0 shadow-sm overflow-hidden store-card">

            {/* Image Wrapper */}
            <div className="position-relative bg-light">
                <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                />

                {/* Power Badge */}
                <span
                    className="position-absolute top-0 start-0 m-3 badge"
                    style={{
                        backgroundColor: '#022c22',
                        color: '#fff',
                        fontSize: '0.8rem',
                        borderRadius: '6px',
                    }}
                >
                    {product.voltage}
                </span>
            </div>

            {/* Content */}
            <div className="card-body p-4 d-flex flex-column">

                <h6 className="fw-bold mb-1">{product.title}</h6>
                <p className="text-muted small mb-2">{product.type}</p>

                <p className="small text-secondary mb-3">
                    {product.desc}
                </p>

                {/* Price */}
                <div className="mb-4">
                    <span className="text-muted text-decoration-line-through small d-block">
                        PKR {product.originalPrice}
                    </span>
                    <span className="fs-5 fw-bold" style={{ color: '#022c22' }}>
                        PKR {product.discountPrice}
                    </span>
                </div>

                {/* CTA */}
                <button
                 onClick={() => router.visit('/product-details', { data: { id: product.id } })}
                    className="btn mt-auto w-100 fw-semibold store-btn"
                    style={{backgroundColor:"#022c22",color:"white"}}
                >
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default StoreCard;
