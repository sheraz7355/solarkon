// About page composition
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import AboutHero from '../components/client/About/AboutHero';
import MissionSection from '../components/client/About/MissionSection';
import VisionValuesSection from '../components/client/About/VisionValuesSection';
import WhyChooseSolarkonSection from '../components/client/About/WhyChooseSolarkonSection';
import CertificationsSection from '../components/client/About/CertificationsSection';
import TeamSection from '../components/client/About/TeamSection';
import WhatsAppFloat from '../components/client/WhatsAppFloat';

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppFloat />
      <main className="flex-grow-1">
        <AboutHero />
        <MissionSection />
        <VisionValuesSection />
        <WhyChooseSolarkonSection />
        <CertificationsSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
