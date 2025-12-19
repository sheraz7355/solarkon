import { motion } from "framer-motion";

const defaultData = {
  main_heading: "Our Process Simplified",
  main_description: "A transparent, step-by-step journey to energy independence.",
  steps: []
};

function StepsSection({ steps }) {
  const data = steps || defaultData;
  const heading = data.main_heading || defaultData.main_heading;
  const description = data.main_description || defaultData.main_description;
  const timelineList = (data.steps && data.steps.length > 0) ? data.steps : [];

  // --- HELPER: Styles the Heading Automatically ---
  const renderStyledHeading = (text) => {
    if (!text) return null;
    const words = text.split(" ");
    
    // If it's just one word, return it in Dark Green
    if (words.length === 1) {
        return <span style={{ color: "#14532d" }}>{text}</span>;
    }

    // Pop the last word to make it the "Highlight"
    const lastWord = words.pop(); 
    const firstPart = words.join(" ");

    return (
      <>
        {/* Top Part: Dark Green */}
        <span style={{ color: "#14532d" }}>{firstPart}</span> 
        <br />
        {/* Bottom Part: Lighter/Bright Green */}
        <span style={{ color: "#16a34a" }}>{lastWord}.</span> 
      </>
    );
  };

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
      <div className="container">
        <div className="row">
          
          {/* --- LEFT SIDE --- */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div style={{ position: "sticky", top: "150px" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span 
                  style={{ 
                    background: "#dcfce7", 
                    color: "#166534", 
                    padding: "8px 16px", 
                    borderRadius: "50px", 
                    fontSize: "0.85rem", 
                    fontWeight: "700",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: "1.5rem"
                  }}
                >
                  Methodology
                </span>

                <h2 
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: "800", 
                    lineHeight: 1.1, 
                    marginBottom: "1.5rem" 
                  }}
                >
                  {renderStyledHeading(heading)}
                </h2>

                <p style={{ fontSize: "1.15rem", color: "#64748b", lineHeight: 1.7, maxWidth: "90%" }}>
                   {description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="col-lg-6 offset-lg-1">
            <div className="d-flex flex-column gap-4">
              {timelineList.map((step, index) => (
                <TimelineItem 
                    key={index} 
                    step={step} 
                    number={index + 1} 
                    isLast={index === timelineList.length - 1} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component remains the same
function TimelineItem({ step, number, isLast }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{ display: "flex", gap: "1.5rem" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "60px" }}>
        <div 
          style={{
            width: "50px", height: "50px", background: "#f8fafc",
            border: "1px solid #cbd5e1", borderRadius: "12px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem", fontWeight: "700", color: "#334155", zIndex: 2
          }}
        >
          {number < 10 ? `0${number}` : number}
        </div>
        {!isLast && (
          <div style={{ width: "2px", flexGrow: 1, background: "#e2e8f0", margin: "10px 0", minHeight: "120px" }} />
        )}
      </div>

      <div style={{ paddingBottom: isLast ? "0" : "3rem", paddingTop: "5px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>
          {step.title}
        </h3>
        <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
           {step.description}
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f1f5f9", padding: "6px 16px", borderRadius: "50px", fontSize: "0.85rem", color: "#475569", fontWeight: "600", border: "1px solid #e2e8f0" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#166534" }}></span>
          Duration: {step.duration}
        </div>
      </div>
    </motion.div>
  );
}

export default StepsSection;