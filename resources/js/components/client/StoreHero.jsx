import { motion } from 'framer-motion';

/**
 * Store Hero Section
 * - Brand intro
 * - Matches footer color theme
 * - Smooth entrance animation
 */
const StoreHero = () => {
    return (
        <section
            className="py-5 text-center"
            style={{
                background: 'linear-gradient(135deg, #022c22, #064e3b)',
                color: '#ecfdf5',
            }}
        >
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fw-bold display-5"
                >
                    Solar Store
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-3 mx-auto opacity-75"
                    style={{ maxWidth: '650px' }}
                >
                    Premium solar solutions designed to power homes, businesses, and communities across Pakistan.
                </motion.p>
            </div>
        </section>
    );
};

export default StoreHero;
