import React from 'react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';

export default function ProductDetails() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="product-hero py-5">
        <div className="container-fluid">
          <div className="row align-items-center">

            {/* LEFT: Image (50%) */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="product-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                  alt="Solar Product"
                  className="img-fluid w-100 rounded-3"
                />
              </div>
            </div>

            {/* RIGHT: Details (50%) */}
            <div className="col-lg-6">
              <div className="product-details ps-lg-5">

                <span className="badge mb-3"
                  style={{ backgroundColor: '#022c22', color: '#fff' }}
                >
                  Hybrid • On-Grid
                </span>

                <h2 className="fw-bold mt-3 mb-3">
                  Solar Lite Package
                </h2>

                <p className="text-muted mb-4">
                  Affordable and reliable solar solution for small homes.
                  Designed for efficiency, savings, and long-term performance.
                </p>

                <ul className="list-unstyled mb-4">
                  <li className="mb-2">✔ Power Capacity: <strong>3kW</strong></li>
                  <li className="mb-2">✔ Estimated Annual Output</li>
                  <li className="mb-2">✔ 30 Years Performance Warranty</li>
                  <li className="mb-2">✔ Battery Backup Support</li>
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-muted text-decoration-line-through">
                    PKR 480,000
                  </span>
                  <h3 className="fw-bold mt-1" style={{ color: '#022c22' }}>
                    PKR 410,000
                  </h3>
                </div>

                {/* CTA */}
                <button
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    backgroundColor: '#022c22',
                    color: '#fff',
                    borderRadius: '10px',
                  }}
                >
                  Get free Consultation
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
