import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import ContactHero from '../components/client/Contact/ContactHero';
import ContactPanels from '../components/client/Contact/ContactPanels';
import ContactMap from '../components/client/Contact/ContactMap';
import ContactFAQ from '../components/client/Contact/ContactFAQ';
import ContactCTA from '../components/client/Contact/ContactCTA';

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      <main className="flex-grow-1">
        <ContactHero />
        <ContactPanels />
        <ContactMap />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
