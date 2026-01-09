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
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    SOLARKON delivered a turnkey solar solution for this eco-friendly
                    and sustainable housing community. The objective was to reduce
                    electricity costs, minimize carbon emissions, and ensure reliable
                    clean-energy integration.
                  </p>
                </section>

                {/* EXECUTION */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
                    Execution
                  </h2>
                  <ul
                    className="ps-3"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    <li>Comprehensive site survey and shading analysis for optimal panel placement.</li>
                    <li>Installation of high-efficiency solar panels with smart inverters.</li>
                    <li>
                      System designed to generate approximately
                      <strong> 1,500–1,650 kWh per kW annually</strong>, based on
                      solar yield in Punjab and Sindh regions.
                    </li>
                    <li>
                      Net-metering enabled to reduce electricity bills by
                      <strong> 30–60%</strong> depending on usage patterns.
                    </li>
                    <li>
                      Infrastructure prepared for battery integration to support
                      future energy storage needs.
                    </li>
                    <li>
                      System engineered to cover
                      <strong> 70–90% of daytime energy demand</strong>,
                      minimizing reliance on the national grid.
                    </li>
                  </ul>
                </section>

                {/* RESULT */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-3" style={{ color: '#1F2933' }}>
                    Result
                  </h2>
                  <ul
                    className="ps-3"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: '#4B5563',
                    }}
                  >
                    <li>
                      Monthly electricity costs reduced by
                      <strong> up to 60%</strong>, delivering immediate financial relief.
                    </li>
                    <li>
                      Annual energy generation exceeding
                      <strong> 150,000 units</strong> for a 100 kW system.
                    </li>
                    <li>
                      Achieved a fast
                      <strong> return on investment within 3–4 years</strong>,
                      especially for high daytime loads.
                    </li>
                    <li>
                      Reduction of more than
                      <strong> 100 tons of CO₂ emissions annually</strong>,
                      contributing to a cleaner environment.
                    </li>
                    <li>
                      Ensured
                      <strong> 99% power availability</strong> by combining
                      solar generation with grid supply, reducing downtime
                      during load-shedding hours.
                    </li>
                    <li>
                      Delivered long-term savings of
                      <strong> PKR 6–10 crore over 25 years</strong>
                      for mid-to-large scale installations.
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

        <ProfileSettings />
        <ProjectCTA />

      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
