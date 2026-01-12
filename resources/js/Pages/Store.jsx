import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import StoreHero from '../components/client/StoreHero';
import StoreProducts from '../components/client/StoreProduct';
import StoreSidebar from '../components/client/StoreSidebar'; // New Component
import WhatsAppFloat from '../components/client/WhatsAppFloat';

const Store = ({ products }) => {
    // 1. Hardcoded Product
    const defaultProduct = {
        id: 'hardcoded-1',
        title: 'Solar Lite Package',
        type: 'On-Grid',
        voltage: '3kW',
        description: 'The perfect starter kit for small households. Includes Tier-1 panels and a high-efficiency inverter.',
        original_price: '480,000',
        discount_price: '410,000',
        price_value: 410000, // Normalized for sorting
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop'
    };

    // Normalize Admin Data (Ensure price is number for filtering)
    const normalizedProducts = useMemo(() => {
        const adminData = (products || []).map(p => ({
            ...p,
            // Convert string "1,000,000" to number 1000000
            price_value: parseInt(p.discount_price.replace(/,/g, ''), 10) || 0
        }));
        return [defaultProduct, ...adminData];
    }, [products]);

    // --- FILTER STATE ---
    const [filters, setFilters] = useState({
        type: [],      // ['On-Grid', 'Hybrid']
        capacity: [],  // ['3kW', '5kW']
        priceRange: [0, 5000000] // Min/Max Slider
    });

    // --- FILTER LOGIC ---
    const filteredList = useMemo(() => {
        return normalizedProducts.filter(product => {
            // 1. Type Filter
            if (filters.type.length > 0) {
                // Check if product type contains any selected type keyword
                const matchesType = filters.type.some(t => product.type.toLowerCase().includes(t.toLowerCase()));
                if (!matchesType) return false;
            }

            // 2. Capacity Filter
            if (filters.capacity.length > 0) {
                const matchesCap = filters.capacity.includes(product.voltage);
                if (!matchesCap) return false;
            }

            // 3. Price Filter
            if (product.price_value < filters.priceRange[0] || product.price_value > filters.priceRange[1]) {
                return false;
            }

            return true;
        });
    }, [filters, normalizedProducts]);

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Head title="Our Store" />
            <Navbar />
            <WhatsAppFloat />

            <main className="flex-grow-1">
                <StoreHero />
                
                <section className="py-5 container">
                    <div className="row g-5">
                        {/* LEFT SIDEBAR */}
                        <div className="col-lg-3">
                            <StoreSidebar filters={filters} setFilters={setFilters} />
                        </div>

                        {/* RIGHT PRODUCT GRID */}
                        <div className="col-lg-9">
                            <StoreProducts products={filteredList} total={normalizedProducts.length} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Store;