import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import ProjectHero from '../components/client/ProjectDetails/ProjectHero';
import ProjectMetaCard from '../components/client/ProjectDetails/ProjectMetaCard';
import ProjectSection from '../components/client/ProjectDetails/ProjectSection';
import TestimonialCard from '../components/client/ProjectDetails/TestimonialCard';
import ProjectGallery from '../components/client/ProjectDetails/ProjectGallery';
import ProjectCTA from '../components/client/ProjectDetails/ProjectCTA';
import WhatsAppFloat from '../components/client/WhatsAppFloat';

function ProjectDetails() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Navbar />
      <WhatsAppFloat/>
      <main className="flex-grow-1">
        <section className="section-shell pt-4">
          <div className="container">
            <ProjectHero />
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-8 d-flex flex-column gap-4">
                <ProjectSection
                  title="Overview"
                  paragraphs={[
                    'SOLARKON delivered a turnkey solar solution for this eco-friendly and sustainable housing community. The goal was to reduce energy costs, lower carbon emissions, and demonstrate how clean energy can seamlessly integrate into everyday life.',
                  ]}
                />
                <ProjectSection
                  title="Execution"
                  bullets={[
                    'Site assessment and shading analysis for optimal panel placement.',
                    'High-efficiency solar panels installed across the community roofs.',
                    'Smart inverters and monitoring systems to track energy production in real time.',
                    'Battery-ready infrastructure for future storage expansion.',
                  ]}
                />
                <ProjectSection
                  title="Result"
                  bullets={[
                    'Up to 65% reduction in grid electricity consumption.',
                    'Significant savings on monthly energy bills for residents.',
                    'Improved energy independence and resilience for the community.',
                    'Showcase project for sustainable, community-scale solar living.',
                  ]}
                />
              </div>
              <div className="col-lg-4">
                <ProjectMetaCard />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="container">
            <TestimonialCard />
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="container">
            <ProjectGallery />
          </div>
        </section>

        <section className="section-shell section-dark pt-0">
          <ProjectCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
