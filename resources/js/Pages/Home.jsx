import MainLayout from '@/Layouts/MainLayout'; // Import the Layout
import { Head } from '@inertiajs/react'; // Good for SEO titles

// Import all your sections
// Note: We use '@' which points to 'resources/js'
import HeroSection from '@/components/client/HeroSection';
import StatisticsSection from '@/components/client/StatisticsSection';
import ClientLogosSection from '@/components/client/ClientLogosSection';
import BenefitsSection from '@/components/client/BenefitsSection';
import ServicesSection from '@/components/client/ServicesSection';
import TestimonialsSection from '@/components/client/TestimonialsSection';
import StepsSection from '@/components/client/StepsSection';
import FAQSection from '@/components/client/FAQSection';
import BlogSection from '@/components/client/BlogSection';
import CTASection from '@/components/client/CTASection';

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