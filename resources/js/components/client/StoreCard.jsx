import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';

const StoreCard = ({ product }) => {
    return (
        <motion.div 
            layout // Helps animation when filtering
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="card h-100 border-0 shadow-sm overflow-hidden store-card bg-white"
            style={{ borderRadius: '16px' }}
        >
            {/* Image Wrapper */}
            <div className="position-relative bg-light overflow-hidden">
                <img
                    src={product.image || 'https://placehold.co/600x400?text=No+Image'}
                    alt={product.title}
                    className="w-100 object-fit-cover"
                    style={{ height: '220px' }}
                />
                
                {/* Overlay */}
                <div className="position-absolute bottom-0 start-0 w-100 h-50" 
                     style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>

                {/* --- LARGER CAPACITY BADGE --- */}
                <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark fw-bold shadow px-3 py-2 d-flex align-items-center gap-1"
                          style={{ 
                              fontSize: '1rem', // Larger Font
                              borderRadius: '8px',
                              letterSpacing: '0.5px' 
                          }}>
                        ⚡ {product.voltage}
                    </span>
                </div>
                
                {/* System Type Badge (Bottom Left) */}
                <span className="position-absolute bottom-0 start-0 m-3 badge bg-black bg-opacity-75 text-white border border-secondary"
                      style={{ fontSize: '0.7rem' }}>
                    {product.type}
                </span>
            </div>

            {/* Content */}
            <div className="card-body p-4 d-flex flex-column">
                <h5 className="fw-bold text-dark mb-2 text-truncate" title={product.title}>{product.title}</h5>

                <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.5', minHeight: '40px' }}>
                    {product.description?.length > 80 
                        ? product.description.substring(0, 80) + '...' 
                        : product.description}
                </p>

                {/* Footer: Price + Button */}
                <div className="d-flex align-items-end justify-content-between mt-auto pt-3 border-top border-light">
                    <div>
                        {product.original_price && (
                            <div className="text-decoration-line-through text-muted small" style={{fontSize: '0.8rem'}}>
                                PKR {product.original_price}
                            </div>
                        )}
                        <div className="fw-bold text-success fs-5">
                            PKR {product.discount_price}
                        </div>
                    </div>

                    <button
                        onClick={() => router.visit('/product-details', { data: { id: product.id } })}
                        className="btn btn-outline-dark rounded-pill px-4 fw-bold btn-sm hover-fill"
                    >
                        Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StoreCard;