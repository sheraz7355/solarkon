import { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPhone } from "react-icons/hi2";
import webLogo from "../../assets/web-logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = usePage(); 

  const handleToggle = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Project", to: "/profile" }, // Note: You might want this to point to /projects or /project-details
    { label: "Solutions", to: "/solutions" },
    { label: "Projects", to: "/projects" },
    { label: "Financing", to: "/financing" },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return url === '/';
    return url.startsWith(path);
  };

  return (
    // CHANGE IS HERE: 
    // 1. Removed 'z-2' class.
    // 2. Added inline style for zIndex: 1050 to force it above everything.
    // 3. Added background/backdropFilter to ensure content doesn't bleed through on scroll.
    <header 
      className="py-2 position-sticky top-0" 
      style={{ 
        zIndex: 1050, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: ensures text is readable over hero
        backdropFilter: 'blur(8px)' // Optional: Adds that modern glass effect
      }}
    >
      <nav className="container">
        <div className="glass-nav d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <img
              src={webLogo}
              alt="SOLARKON logo"
              className="logo-mark"
              style={{ height: 50 }}
            />
            <span className="fw-bold fs-4" style={{ color: "#2D5016" }}>
              SOLARKON
            </span>
          </div>

          <div className="d-none d-md-flex align-items-center gap-4">
            {navLinks.map((item) => (
              <Link 
                key={item.to}
                href={item.to} 
                className={`fw-semibold text-decoration-none nav-link-main link-underline-hover ${
                   isLinkActive(item.to) ? "text-success" : "text-dark"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="d-none d-md-inline-flex">
            <button
              className="btn btn-outline-success btn-pill btn-soft-hover btn-contact"
              type="button"
              onClick={() => router.visit("/contact")}
            >
              <HiPhone className="me-2" size={18} />
              Contact Us
            </button>
          </div>

          <button
            className="btn btn-outline-success d-inline-flex d-md-none align-items-center justify-content-center btn-soft-hover nav-toggle"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 d-md-none border rounded-4 p-3 bg-white shadow-sm"
            >
              <div className="d-flex flex-column gap-3">
                {navLinks.map((item) => (
                  <Link 
                    key={item.to}
                    href={item.to} 
                    className={`fw-semibold text-decoration-none ${
                        isLinkActive(item.to) ? "text-success" : "text-dark"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  className="btn btn-success rounded-pill btn-contact-solid"
                  onClick={() => {
                    closeMenu();
                    router.visit("/contact");
                  }}
                >
                  <HiPhone className="me-2" size={18} />
                  Contact Us
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