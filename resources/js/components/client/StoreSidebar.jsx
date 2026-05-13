import React from 'react';
import { FaFilter, FaBuilding, FaTag, FaSearch, FaSolarPanel } from 'react-icons/fa';

const StoreSidebar = ({ products, filters, setFilters, searchQuery, setSearchQuery }) => {

    // Unique Brands from DB
    const brands = [...new Set(products.map(p => p.brand))].filter(Boolean).sort();
    
    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value) ? current.filter(i => i !== value) : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const handlePriceChange = (index, value) => {
        const newRange = [...filters.priceRange];
        newRange[index] = parseInt(value) || 0;
        setFilters(prev => ({ ...prev, priceRange: newRange }));
    };

    return (
        <div className="bg-white p-4 rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 1 }}>
            
            {/* Search */}
            <div className="mb-4">
                <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><FaSearch className="text-muted"/></span>
                    <input type="text" className="form-control border-start-0 bg-light" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>
            </div>

            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                <h5 className="fw-bold m-0"><FaFilter className="text-success me-2"/> Filters</h5>
                <button className="btn btn-link text-muted ms-auto small" onClick={() => { setFilters({ brand: [], priceRange: [0, 10000000] }); setSearchQuery(''); }}>Reset</button>
            </div>

            {/* BRAND FILTER */}
            <div className="mb-4">
                <h6 className="fw-bold mb-3 d-flex align-items-center text-dark"><FaBuilding className="me-2 text-success" size={14}/> Brands</h6>
                <div className="d-flex flex-column gap-2" style={{maxHeight: '250px', overflowY: 'auto'}}>
                    {brands.map(brand => (
                        <div key={brand} className="form-check">
                            <input className="form-check-input" type="checkbox" id={`b-${brand}`} checked={filters.brand.includes(brand)} onChange={() => toggleFilter('brand', brand)} style={{cursor:'pointer'}} />
                            <label className="form-check-label small" htmlFor={`b-${brand}`} style={{cursor:'pointer'}}>{brand}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* PRICE FILTER */}
            <div className="mb-2">
                <h6 className="fw-bold mb-3 d-flex align-items-center text-dark"><FaTag className="me-2 text-primary" size={14}/> Price Range</h6>
                <div className="d-flex justify-content-between small fw-bold mb-2">
                    <span>0</span>
                    <span>{filters.priceRange[1].toLocaleString()}</span>
                </div>
                <input type="range" className="form-range" min="0" max="10000000" step="50000" value={filters.priceRange[1]} onChange={(e) => handlePriceChange(1, e.target.value)} />
            </div>
        </div>
    );
};

export default StoreSidebar;