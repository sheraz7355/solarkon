import { motion } from 'framer-motion';

/**
 * StoreCard Component
 * - Reusable
 * - Hover animation
 * - Clean UI
 */
const StoreCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="card h-100 shadow-sm rounded-4 overflow-hidden border-0"
        >
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                    height: '220px',
                    objectFit: 'cover',
                }}
            />

            {/* Product Content */}
            <div className="card-body p-4">
                <h5 className="fw-bold mb-2">{product.title}</h5>
                <p className="text-muted small mb-4">{product.desc}</p>

                {/* CTA Button */}
                <button
                    className="btn w-100 rounded-pill fw-semibold"
                    style={{
                        backgroundColor: '#022c22',
                        color: '#ecfdf5',
                    }}
                >
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default StoreCard;
