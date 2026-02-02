import { Link, router, usePage } from '@inertiajs/react';

const StoreCard = ({ product }) => {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="card h-100 border-0 shadow-sm overflow-hidden store-card bg-white"
            style={{ borderRadius: '16px' }}
        >
            {/* FULL WIDTH/HEIGHT IMAGE CONTAINER */}
            <div className="position-relative w-100" style={{ height: '280px' }}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-100 h-100 object-fit-cover"
                />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="position-absolute bottom-0 start-0 w-100 h-100" 
                     style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}></div>

                {/* Brand Badge (Top Left) */}
                <span className="position-absolute top-0 start-0 m-3 badge bg-white text-dark shadow-sm px-2 py-1" style={{fontSize:'0.75rem'}}>
                    {product.brand}
                </span>

                {/* Capacity Badge (Top Right) */}
                {product.voltage && (
                    <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark fw-bold shadow-sm px-2 py-1">
                        ⚡ {product.voltage}{product.unit}
                    </span>
                )}

                {/* Title & Price Overlay (Bottom) */}
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white">
                    <h5 className="fw-bold mb-1 text-truncate">{product.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-warning fs-5">
                            {product.discount_price ? `PKR ${product.discount_price}` : 'Call for Price'}
                        </span>
                        <button onClick={() => router.visit('/product-details', { data: { id: product.id } })} className="btn btn-sm btn-light rounded-pill fw-bold px-3">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StoreCard;
