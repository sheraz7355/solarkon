import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import ProjectHero from '../components/client/ProjectDetails/ProjectHero';
import ProjectMetaCard from '../components/client/ProjectDetails/ProjectMetaCard';
import ProjectGallery from '../components/client/ProjectDetails/ProjectGallery';
import ProjectCTA from '../components/client/ProjectDetails/ProjectCTA';
import WhatsAppFloat from '../components/client/WhatsAppFloat';
import ProfileSettings from '../components/client/Profile/ProfileSettings';

function ProjectDetails() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Navbar />
      <WhatsAppFloat />

      <main className="flex-grow-1">
        {/* HERO */}
        <section className="pt-4">
  <ProjectHero />
</section>

        {/* CONTENT */}
        <section className="section-shell pt-0">
          <div className="container">
            <div className="row g-4 align-items-start">
              {/* LEFT CONTENT */}
              <div className="col-lg-8 d-flex flex-column gap-5">

                {/* OVERVIEW */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
                    Overview
                  </h2>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    SOLARKON delivered a turnkey solar solution for this eco-friendly and
                    sustainable housing community. The goal was to reduce energy costs,
                    lower carbon emissions, and demonstrate how clean energy can seamlessly
                    integrate into everyday life.
                  </p>
                </section>

                {/* EXECUTION */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
                    Execution
                  </h2>
                  <ul
                    className="ps-3 mb-0"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    <li className="mb-2">
                      Site assessment and shading analysis for optimal panel placement.
                    </li>
                    <li className="mb-2">
                      High-efficiency solar panels installed across the community roofs.
                    </li>
                    <li className="mb-2">
                      Smart inverters and monitoring systems to track energy production in real time.
                    </li>
                    <li>
                      Battery-ready infrastructure for future storage expansion.
                    </li>
                  </ul>
                </section>

                {/* RESULT */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
                    Result
                  </h2>
                  <ul
                    className="ps-3 mb-0"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    <li className="mb-2">
                      Up to 65% reduction in grid electricity consumption.
                    </li>
                    <li className="mb-2">
                      Significant savings on monthly energy bills for residents.
                    </li>
                    <li className="mb-2">
                      Improved energy independence and resilience for the community.
                    </li>
                    <li>
                      Showcase project for sustainable, community-scale solar living.
                    </li>
                  </ul>
                </section>

              </div>

              {/* RIGHT META CARD */}
              <div className="col-lg-4">
                <ProjectMetaCard />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section-shell pt-0">
          <div className="container">
            <ProjectGallery />
          </div>
        </section>

        {/* PROFILE SETTINGS (unchanged) */}
        <ProfileSettings />

      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
