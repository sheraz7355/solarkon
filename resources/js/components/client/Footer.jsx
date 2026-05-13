import { Link, usePage } from '@inertiajs/react'; 
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  const { site_settings } = usePage().props;

  // 2. Use the data (with fallback text if DB is empty)
  const siteName = site_settings?.site_name || 'SOLARKON';
  const desc = site_settings?.footer_description || 'Powering a brighter Pakistan.';
  const address = site_settings?.address || '123 Main Street, Islamabad';
  const phone = site_settings?.phone || '+92 300 123 4567';
  const email = site_settings?.email || 'info@solarkon.com';

  // Social Links
  const socialIcons = [
    { name: 'Facebook', icon: <FaFacebookF />, href: site_settings?.facebook_url || 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, href: site_settings?.twitter_url || 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, href: site_settings?.instagram_url || 'https://instagram.com'},
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: site_settings?.linkedin_url || 'https://linkedin.com'},
  ];

  return (
    <footer 
      className='pt-5 pb-3' 
      style={{ backgroundColor: '#022c22', color: '#ecfdf5', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className='container'>
        <div className='row g-5 justify-content-between'>
          
          {/* COLUMN 1 */}
          <div className='col-lg-4 col-md-6'>
            <div className='d-flex align-items-center gap-2 mb-4'>
              <span className='fw-bold fs-3 text-white tracking-wide'>{siteName}</span>
            </div>
            <p className='opacity-75 mb-4' style={{ lineHeight: 1.8, maxWidth: '300px' }}>
              {desc}
            </p>
            
            <div className='d-flex gap-3'>
              {socialIcons.map((social) => (
                // Only show icon if the link exists in DB
                social.href ? (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className='social-icon d-flex align-items-center justify-content-center rounded-circle'
                    style={{
                      width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{social.icon}</span>
                  </a>
                ) : null
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links (Keep Static) */}
          <div className='col-lg-3 col-md-6'>
            <h5 className='text-white fw-bold mb-4'>Quick Links</h5>
            <ul className='list-unstyled mb-0 d-flex flex-column gap-3'>
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/solutions" className="footer-link">Solutions</Link></li>
                <li><Link href="/projects" className="footer-link">Projects</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Contact (Dynamic) */}
          <div className='col-lg-4 col-md-12'>
            <h5 className='text-white fw-bold mb-4'>Get in Touch</h5>
            <ul className='list-unstyled mb-0 d-flex flex-column gap-4'>
              <li className='d-flex gap-3'>
                <FaMapMarkerAlt className='mt-1' style={{ color: '#4ade80' }} />
                <span className='opacity-75'>{address}</span>
              </li>
              <li className='d-flex gap-3'>
                <FaPhoneAlt className='mt-1' style={{ color: '#4ade80' }} />
                <span className='opacity-75'>{phone}</span>
              </li>
              <li className='d-flex gap-3'>
                <FaEnvelope className='mt-1' style={{ color: '#4ade80' }} />
                <a href={`mailto:${email}`} className='text-decoration-none opacity-75' style={{ color: '#ecfdf5' }}>
                  {email}
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className='border-top mt-5 pt-4 text-center'>
          <p className='small opacity-50 mb-0'>
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { color: #ecfdf5; text-decoration: none; opacity: 0.75; transition: 0.3s; }
        .footer-link:hover { opacity: 1; color: #4ade80; padding-left: 5px; }
        .social-icon:hover { background-color: #4ade80; border-color: #4ade80 !important; color: #022c22 !important; transform: translateY(-3px); }
      `}</style>
    </footer>
  );
}

export default Footer;