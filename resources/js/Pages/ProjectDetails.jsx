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
                    electricity costs, minimize carbon emissions, and demonstrate
                    reliable clean-energy integration.
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
                    <li>Detailed site and shading analysis</li>
                    <li>High-efficiency solar panel installation</li>
                    <li>Smart inverters with real-time monitoring</li>
                    <li>Battery-ready system design</li>
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
                    <li>Up to 65% reduction in grid electricity usage</li>
                    <li>Lower monthly utility expenses</li>
                    <li>Improved energy independence</li>
                    <li>Long-term sustainability impact</li>
                  </ul>
                </section>

                {/* PROJECT IMPACT */}
                <section data-aos="fade-up">
                  <h2 className="h5 mb-4" style={{ color: '#1F2933' }}>
                    Project Impact
                  </h2>

                  <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">30–60%</p>
                      <p className="fw-semibold mb-1">Electricity Cost Reduction</p>
                      <p className="text-muted">
                        Reduction in monthly electricity bills based on current
                        industrial tariffs and net-metering.
                        <br />
                        <strong>Up to 60% lower energy costs</strong>
                      </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">1,500–1,650 kWh</p>
                      <p className="fw-semibold mb-1">Annual Energy Generation</p>
                      <p className="text-muted">
                        Typical annual solar yield per kW in Pakistan.
                        <br />
                        <strong>150,000+ units generated annually</strong>
                      </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">3–4 Years</p>
                      <p className="fw-semibold mb-1">Return on Investment</p>
                      <p className="text-muted">
                        Fast payback for high daytime loads.
                        <br />
                        <strong>Payback in 3–4 years</strong>
                      </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">100+ Tons</p>
                      <p className="fw-semibold mb-1">Carbon Reduction</p>
                      <p className="text-muted">
                        Annual CO₂ emission reduction.
                        <br />
                        <strong>Cleaner & greener operations</strong>
                      </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">70–90%</p>
                      <p className="fw-semibold mb-1">Energy Independence</p>
                      <p className="text-muted">
                        Daytime load covered through solar.
                        <br />
                        <strong>Up to 90% independence</strong>
                      </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <p className="fw-bold fs-4 text-success mb-1">99%</p>
                      <p className="fw-semibold mb-1">Power Reliability</p>
                      <p className="text-muted">
                        Grid + solar ensures uninterrupted supply.
                        <br />
                        <strong>No downtime during peak hours</strong>
                      </p>
                    </div>

                  </div>
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
