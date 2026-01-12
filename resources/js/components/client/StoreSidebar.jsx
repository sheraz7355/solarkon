import React from 'react';
import { FaFilter, FaSolarPanel, FaBolt, FaTag } from 'react-icons/fa';

const StoreSidebar = ({ filters, setFilters }) => {

    const systemTypes = ['On-Grid', 'Hybrid', 'Off-Grid'];
    const capacities = ['3kW', '5kW', '8kW', '10kW', '12kW', '15kW', '20kW', '30kW+'];

    // Handle Checkbox Changes
    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value) // Remove
                : [...current, value]; // Add
            return { ...prev, [category]: updated };
        });
    };

    // Handle Price Input
    const handlePriceChange = (index, value) => {
        const newRange = [...filters.priceRange];
        newRange[index] = parseInt(value) || 0;
        setFilters(prev => ({ ...prev, priceRange: newRange }));
    };

    return (
        <div className="bg-white p-4 rounded-4 shadow-sm border border-light sticky-top" style={{ top: '100px', zIndex: 1 }}>
            
            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                <FaFilter className="text-success me-2" />
                <h5 className="fw-bold m-0">Filters</h5>
                <button 
                    className="btn btn-link text-muted ms-auto small text-decoration-none"
                    onClick={() => setFilters({ type: [], capacity: [], priceRange: [0, 5000000] })}
                >
                    Reset
                </button>
            </div>

            {/* 1. System Architecture */}
            <div className="mb-4">
                <h6 className="fw-bold mb-3 d-flex align-items-center text-dark">
                    <FaSolarPanel className="me-2 text-success" size={14}/> System Type
                </h6>
                <div className="d-flex flex-column gap-2">
                    {systemTypes.map(type => (
                        <div key={type} className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id={`type-${type}`} 
                                checked={filters.type.includes(type)}
                                onChange={() => toggleFilter('type', type)}
                                style={{cursor: 'pointer'}}
                            />
                            <label className="form-check-label small" htmlFor={`type-${type}`} style={{cursor: 'pointer'}}>
                                {type} System
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Capacity Power */}
            <div className="mb-4">
                <h6 className="fw-bold mb-3 d-flex align-items-center text-dark">
                    <FaBolt className="me-2 text-warning" size={14}/> Power Capacity
                </h6>
                <div className="d-flex flex-wrap gap-2">
                    {capacities.map(cap => (
                        <button
                            key={cap}
                            onClick={() => toggleFilter('capacity', cap)}
                            className={`btn btn-sm rounded-pill border ${filters.capacity.includes(cap) ? 'btn-success text-white' : 'btn-light text-dark'}`}
                            style={{fontSize: '0.75rem', padding: '0.25rem 0.75rem'}}
                        >
                            {cap}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. Price Range */}
            <div className="mb-2">
                <h6 className="fw-bold mb-3 d-flex align-items-center text-dark">
                    <FaTag className="me-2 text-primary" size={14}/> Price Range (PKR)
                </h6>
                <div className="d-flex gap-2 align-items-center">
                    <input 
                        type="number" 
                        className="form-control form-control-sm" 
                        value={filters.priceRange[0]} 
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        placeholder="Min"
                    />
                    <span className="text-muted">-</span>
                    <input 
                        type="number" 
                        className="form-control form-control-sm" 
                        value={filters.priceRange[1]} 
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        placeholder="Max"
                    />
                </div>
                <div className="mt-2">
                    <input 
                        type="range" 
                        className="form-range" 
                        min="0" 
                        max="5000000" 
                        step="50000"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                    />
                </div>
            </div>

        </div>
    );
};

export default StoreSidebar;