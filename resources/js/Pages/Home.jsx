// Home page component
import Navbar from '@/components/client/Navbar';
import HeroSection from '@/components/client/HeroSection';
import StatisticsSection from '@/components/client/StatisticsSection';
import StepsSection from '@/components/client/StepsSection';
import ProjectHighlights from '@/components/client/ProjectHighlights';
import ClientLogosSection from '@/components/client/ClientLogosSection';
import TestimonialsSection from '@/components/client/TestimonialsSection';
import CTASection from '@/components/client/CTASection';
import Footer from '@/components/client/Footer';

function Home({heroContent,heroStats,methodologyData,partnerLogos}) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection data = {heroContent} />
        <StatisticsSection stats = {heroStats} />
        <StepsSection steps = {methodologyData} />
        <ClientLogosSection partnerLogos = {partnerLogos}/>
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

