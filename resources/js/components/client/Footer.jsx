import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const socialIcons = [
    { name: 'Facebook', icon: <FaFacebookF /> },
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', icon: <FaLinkedinIn /> },
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'];

  return (
    <footer className='section-dark pt-5 pb-4 mt-4' data-aos='fade-up'>
      <div className='container'>
        <div className='row g-4 mb-4'>
          <div className='col-md-6 col-lg-3'>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <div className='rounded-circle bg-white text-success fw-bold d-flex align-items-center justify-content-center' style={{ width: 40, height: 40 }}>
                S
              </div>
              <span className='fw-bold text-white fs-5'>SOLARKON</span>
            </div>
            <p className='text-white-50 small mb-3'>123 Main Street, Anytown, USA 12345</p>
            <div className='d-flex gap-2'>
              {socialIcons.map((social) => (
                <a key={social.name} href='#' aria-label={social.name} className='social-pill'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className='col-md-6 col-lg-3'>
            <h3 className='text-white fs-6 fw-bold mb-3'>Quick Links</h3>
            <ul className='list-unstyled mb-0'>
              {quickLinks.map((link) => (
                <li key={link} className='mb-1'>
                  <a href={`#${link.toLowerCase()}`} className='footer-link'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-md-6 col-lg-3'>
            <h3 className='text-white fs-6 fw-bold mb-3'>Contact Us</h3>
            <ul className='list-unstyled mb-0 text-white-50 small'>
              <li className='mb-1'>+1 (555) 123-4567</li>
              <li>
                <a href='mailto:info@solvix.com' className='footer-link'>
                  info@solvix.com
                </a>
              </li>
            </ul>
          </div>

          <div className='col-md-6 col-lg-3'>
            <h3 className='text-white fs-6 fw-bold mb-3'>Newsletter</h3>
            <form className='d-flex flex-column gap-2'>
              <input
                type='email'
                className='form-control form-control-sm bg-transparent border-light text-white'
                placeholder='Your email'
              />
              <button type='submit' className='btn btn-sm fw-semibold btn-pill btn-soft-hover' style={{ backgroundColor: '#22C55E', color: '#2D5016' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className='border-top border-light-subtle pt-3 text-center'>
          <p className='text-white-50 small mb-0'>© 2023 SOLARKON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

