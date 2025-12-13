import React from 'react';

function ContactMap() {
  return (
    <section className="section-shell pt-0" data-aos="fade-up">
      {/* 
         1. Changed 'container-fluid' to 'container'. 
         This limits the width to standard breakpoints (aligning with your form).
      */}
      <div className="container">
        <div 
          style={{ 
            height: 350, // Adjusted height for better visibility
            width: '100%', 
            borderRadius: 16, 
            overflow: 'hidden', // Ensures the iframe respects the rounded corners
            position: 'relative'
          }}
        >
          <iframe
            title="SOLARKON Location - Johar Town"
            src="https://maps.google.com/maps?q=94+J1+Block+J1+Phase+2+Johar+Town%2C+Lahore%2C+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactMap;