// About page composition
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import AboutHero from '../components/client/About/AboutHero';
import MissionSection from '../components/client/About/MissionSection';
import ValuesSection from '../components/client/About/ValuesSection';
import TeamSection from '../components/client/About/TeamSection';
import WhyChooseUs from '../components/client/About/WhyChooseUs';

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default About;
