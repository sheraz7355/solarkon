import { Link, router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiPhone } from 'react-icons/hi2';
import webLogo from '../../assets/web-logo.webp';

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverAdmin, setHoverAdmin] = useState(false);
    const { url } = usePage();

    const handleToggle = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Solutions', to: '/solutions' },
        { label: 'Projects', to: '/projects' },
        { label: 'Financing', to: '/financing' },
        { label: 'Store', to: '/store' },
    ];

    const isLinkActive = (path) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    return (
        <header className="py-3 position-sticky top-0 w-100" style={{ zIndex: 1050, pointerEvents: 'none' }}>
            <nav className="container" style={{ pointerEvents: 'auto' }}>
                <div className="glass-nav d-flex align-items-center justify-content-between gap-3">
                    {/* LOGO */}
                    <Link href="/" className="text-decoration-none">
                    <div className="d-flex align-items-center gap-2">
                        <img src={webLogo} alt="SOLARKON logo" style={{ height: 50 }} />
                        <span className="fw-bold fs-4" style={{ color: '#2D5016' }}>
                            SOLARKON
                        </span>
                        
                    </div>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="d-none d-md-flex align-items-center gap-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.to}
                                href={item.to}
                                className={`fw-semibold text-decoration-none nav-link-main ${isLinkActive(item.to) ? 'text-success' : 'text-dark'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* DESKTOP RIGHT SIDE: ADMIN + CONTACT */}
                    <div 
                        className="d-none d-md-inline-flex align-items-center"
                        onMouseEnter={() => setHoverAdmin(true)}
                        onMouseLeave={() => setHoverAdmin(false)}
                    >
                        {/* ADMIN AVATAR */}
                        <Link
                            href="/admin"
                            className="text-decoration-none"
                            style={{
                                width: hoverAdmin ? '40px' : '0px',
                                opacity: hoverAdmin ? 1 : 0,
                                marginRight: hoverAdmin ? '10px' : '0px',
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title="Admin Login"
                        >
                            <div 
                                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
                                    boxShadow: '0 4px 12px rgba(45, 80, 22, 0.25)',
                                    cursor: 'pointer'
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={faUserCircle} 
                                    style={{ color: '#ffffff', fontSize: '1.2rem' }} 
                                />
                            </div>
                        </Link>

                        {/* CONTACT BUTTON */}
                        <button className="btn btn-outline-success rounded-pill d-flex align-items-center" onClick={() => router.visit('/contact')}>
                            <HiPhone className="me-2" size={18} />
                            Contact Us
                        </button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button className="btn btn-outline-success d-md-none" onClick={handleToggle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                            className="mt-2 d-md-none rounded-4 p-3 bg-white shadow-lg border"
                        >
                            <div className="d-flex flex-column gap-3">
                                {/* Standard Links */}
                                {navLinks.map((item) => (
                                    <Link key={item.to} href={item.to} className={`fw-semibold text-decoration-none ${isLinkActive(item.to) ? 'text-success' : 'text-dark'}`} onClick={closeMenu}>
                                        {item.label}
                                    </Link>
                                ))}

                                {/* Divider */}
                                <hr className="my-1 border-secondary opacity-25" />

                                {/* --- ADDED ADMIN LINK HERE --- */}
                                <Link 
                                    href="/admin" 
                                    className="fw-semibold text-decoration-none text-warning d-flex align-items-center gap-2"
                                    onClick={closeMenu}
                                >
                                    <FontAwesomeIcon icon={faUserCircle} />
                                    Admin Login
                                </Link>

                                {/* Contact Button */}
                                <button className="btn btn-success rounded-pill mt-2" onClick={() => { closeMenu(); router.visit('/contact'); }}>
                                    <HiPhone className="me-2" size={18} /> Contact Us
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

export default Navbar;