import MainLayout from '@/Layouts/MainLayout'; // Import the Layout
import { Head } from '@inertiajs/react'; // Good for SEO titles

// Import all your sections
// Note: We use '@' which points to 'resources/js'
import HeroSection from '@/Components/client/HeroSection';
import StatisticsSection from '@/Components/client/StatisticsSection';
import ClientLogosSection from '@/Components/client/ClientLogosSection';
import BenefitsSection from '@/Components/client/BenefitsSection';
import ServicesSection from '@/Components/client/ServicesSection';
import TestimonialsSection from '@/Components/client/TestimonialsSection';
import StepsSection from '@/Components/client/StepsSection';
import FAQSection from '@/Components/client/FAQSection';
import BlogSection from '@/Components/client/BlogSection';
import CTASection from '@/Components/client/CTASection';

export default function Home() {
  return (
    <MainLayout>
      <Head title="Home" /> {/* Sets the browser tab title */}
      
      {/* We don't need <main> or <div className="d-flex..."> here 
          because MainLayout already does it! */}
          
      <HeroSection />
      <StatisticsSection />
      <ClientLogosSection />
      <BenefitsSection />
      <ServicesSection />
      <TestimonialsSection />
      <StepsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      
    </MainLayout>
  );
}