import { useEffect, useRef, useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiMagnifyingGlass,
  HiWrenchScrewdriver,
  HiCheckCircle,
  HiWrench,
} from "react-icons/hi2";

function StepsSection() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const steps = [
    {
      number: "1",
      icon: <HiClipboardDocumentCheck size={32} />,
      title: "Inquiry of System",
      description: `Contact us to discuss your energy needs and requirements in detail. 
      We will provide initial consultation, evaluate your current energy usage, 
      and suggest suitable solar solutions tailored for your home or business.`,
    },
    {
      number: "2",
      icon: <HiMagnifyingGlass size={32} />,
      title: "Engineering Team Site Survey",
      description: `Our certified engineers visit your location to conduct a thorough assessment. 
      They measure available space, evaluate sunlight exposure, and check existing electrical infrastructure.`,
    },
    {
      number: "3",
      icon: <HiWrenchScrewdriver size={32} />,
      title: "Installation",
      description: `Professional installation is carried out by our experienced technicians. 
      We ensure proper panel placement, inverter setup, and electrical connections.`,
    },
    {
      number: "4",
      icon: <HiCheckCircle size={32} />,
      title: "Completion of Task & Sign-off",
      description: `System testing, commissioning, and final handover are completed to ensure full operational status. 
      You can start generating clean energy immediately after the sign-off.`,
    },
    {
      number: "5",
      icon: <HiWrench size={32} />,
      title: "After-Sales Services",
      description: `We provide ongoing support, maintenance, and monitoring services for peace of mind. 
      Regular inspections and troubleshooting are included.`,
    },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect only for desktop
  useEffect(() => {
    if (isMobile) return;
  
    let rafId = null;
    let currentScrollTop = 0;
  
    const animateScroll = (targetScroll) => {
      currentScrollTop += (targetScroll - currentScrollTop) * 0.10; // easing
      stepsRef.current.scrollTop = currentScrollTop;
  
      // Continue animating until close enough
      if (Math.abs(targetScroll - currentScrollTop) > 0.5) {
        rafId = requestAnimationFrame(() => animateScroll(targetScroll));
      } else {
        currentScrollTop = targetScroll; // snap exactly
      }
    };
  
    const handleScroll = () => {
      const section = sectionRef.current;
      const stepsBox = stepsRef.current;
  
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
  
      const stepsScrollHeight = stepsBox.scrollHeight - stepsBox.clientHeight;
      let targetScroll = 0;
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight - 50) {
        const progress = (scrollY - sectionTop) / (sectionHeight - windowHeight);
        targetScroll = progress * stepsScrollHeight;
      } else if (scrollY >= sectionTop + sectionHeight - windowHeight) {
        targetScroll = stepsScrollHeight;
      } else if (scrollY < sectionTop) {
        targetScroll = 0;
      }
  
      // Cancel previous frame to avoid conflicts
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => animateScroll(targetScroll));
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);
  

  return (
    <section ref={sectionRef} style={{ padding: "4rem 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span
            style={{
              color: "#166534",
              backgroundColor: "#D1FAE5",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Working Methodology
          </span>
          <h2
            style={{
              fontSize: isMobile ? "1.8rem" : "2.3rem",
              color: "#14532d",
              marginTop: "1rem",
            }}
          >
            Installation Process
          </h2>
        </div>

        <div
          className="rounded-4 overflow-hidden d-flex flex-column flex-lg-row"
          style={{
            border: "2px solid #e2e8f0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
          }}
        >
          {/* LEFT STATIC */}
          <div
            style={{
              flex: isMobile ? "none" : "1",
              borderRight: isMobile ? "none" : "2px solid #e2e8f0",
              background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Working Methodology
            </span>
            <h3 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "1rem" }}>
              Our Process Flow
            </h3>
            <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8, fontSize: "1.1rem" }}>
              At Solarkon, we follow a systematic approach to ensure your solar installation is seamless and reliable. Each step is designed to provide maximum efficiency and transparency.
            </p>
          </div>

          {/* RIGHT SCROLLABLE STEPS */}
          <div
            style={{
              flex: isMobile ? "none" : "1",
              height: isMobile ? "auto" : "520px",
              overflowY: isMobile ? "visible" : "hidden",
              padding: "2rem",
            }}
          >
            <div
              ref={stepsRef}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                height: isMobile ? "auto" : "100%",
                overflowY: isMobile ? "auto" : "hidden",
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    padding: "1.5rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    background: "#fff",
                  }}
                >
                  <div
                    className="d-flex"
                    style={{
                      flexDirection: isMobile ? "column" : "row",
                      alignItems: isMobile ? "center" : "flex-start",
                      gap: "1rem",
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 64,
                        height: 64,
                        backgroundColor: "rgba(20, 83, 45, 0.1)",
                        color: "#166534",
                        flexShrink: 0,
                        marginBottom: isMobile ? "1rem" : "0",
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                        {step.number}. {step.title}
                      </h4>
                      <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
