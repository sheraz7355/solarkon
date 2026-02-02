// resources/js/components/client/StoreHero.jsx
import { motion } from 'framer-motion';

const StoreHero = () => {
    return (
        <div className="container pt-4"> {/* Added container wrapper with top padding */}
            <section className="position-relative py-5 overflow-hidden text-center text-white shadow-lg"
                style={{
                    background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
                    minHeight: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2rem' // Makes it a rounded card
                }}
            >
                {/* Abstract Background Pattern */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)',
                    }}
                ></div>

                <div className="container position-relative z-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-uppercase fw-bold text-warning small ls-2 d-block mb-3">Premium Solar Equipment</span>
                        <h1 className="display-4 fw-bold mb-4">Power Your World</h1>
                        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
                            Browse our exclusive collection of high-efficiency solar panels, inverters, and batteries tailored for the Pakistani climate.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StoreHero;