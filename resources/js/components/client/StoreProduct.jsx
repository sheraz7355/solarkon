import React from 'react';
import { AnimatePresence } from 'framer-motion';
import StoreCard from './StoreCard';

const StoreProducts = ({ products, total }) => {
  
  return (
    <div>
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="fw-bold text-dark m-0">Available Packages</h4>
            <span className="text-muted small">Showing {products.length} of {total} results</span>
        </div>

        {products.length === 0 ? (
            <div className="text-center py-5 rounded-4 bg-white border border-dashed">
                <h5 className="text-muted mb-2">No products match your filters.</h5>
                <p className="small text-muted">Try adjusting the price range or capacity.</p>
            </div>
        ) : (
            <div className="row g-4">
                <AnimatePresence>
                    {products.map((product, index) => (
                        <div key={product.id || index} className="col-md-6 col-xl-4">
                            <StoreCard product={product} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        )}
    </div>
  );
};

export default StoreProducts;