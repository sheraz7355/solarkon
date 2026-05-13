import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import StoreHero from '../components/client/StoreHero';
import StoreProducts from '../components/client/StoreProduct';
import StoreSidebar from '../components/client/StoreSidebar';
import WhatsAppFloat from '../components/client/WhatsAppFloat';

const Store = ({ products }) => {
    // 1. Hardcoded Hero Product
    const defaultProduct = {
        id: 'hardcoded-1',
        title: 'Solar Lite Package',
        brand: 'SolarKon',
        voltage: '3',
        unit: 'kW',
        description: 'The perfect starter kit for small households. Includes Tier-1 panels and a high-efficiency inverter.',
        original_price: '480,000',
        discount_price: '410,000',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop'
    };

    // 2. Merge Hardcoded + Admin Products
    const allProducts = useMemo(() => {
        const adminData = (products || []).map(p => ({
            ...p,
            // Ensure numeric price for sorting
            price_value: parseInt(p.discount_price.replace(/,/g, ''), 10) || 0
        }));
        return [defaultProduct, ...adminData];
    }, [products]);

    // --- STATE ---
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        brand: [],     // Replaces 'type'
        capacity: [],  // e.g. ['3kW', '10kW']
        priceRange: [0, 10000000] // Default Max 1 Crore
    });

    // --- FILTER LOGIC ---
    const filteredList = useMemo(() => {
    return allProducts.filter(p => {
        const price = p.price_value || 0;

        // Search
        if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        
        // Brand
        if (filters.brand.length > 0 && !filters.brand.includes(p.brand)) return false;

        // Price (Only Max Filter really needed usually, but range works too)
        if (price > filters.priceRange[1]) return false;

        return true;
    });
}, [filters, allProducts, searchQuery]);

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Head title="Our Store" />
            <Navbar />
            <WhatsAppFloat />

            <main className="flex-grow-1">
                <StoreHero />
                
                <section className="py-5 container">
                    <div className="row g-5">
                        {/* LEFT SIDEBAR (Filters & Search) */}
                        <div className="col-lg-3">
                            <StoreSidebar 
                                products={allProducts} 
                                filters={filters} 
                                setFilters={setFilters} 
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />
                        </div>

                        {/* RIGHT PRODUCT GRID */}
                        <div className="col-lg-9">
                            <StoreProducts 
                                products={filteredList} 
                                total={allProducts.length} 
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Store;