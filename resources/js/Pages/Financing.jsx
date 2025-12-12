import { useState } from 'react';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import { motion } from 'framer-motion';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

function Financing() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const financingOptions = [
    {
      title: 'Client Self Finance',
      description: 'Complete ownership, no interest, max long-term return, full government incentives.',
      details: [
        'Full system ownership from day one',
        'No interest payments',
        'Maximum long-term return on investment',
        'Eligible for all government incentives and tax benefits',
        'Complete control over your solar system',
      ],
    },
    {
      title: 'Solar on Installment',
      description: 'Low upfront cost, monthly payments customized to budget, no bank involvement, faster approval.',
      details: [
        'Minimal upfront investment required',
        'Flexible monthly payment plans',
        'Customized to your budget',
        'No bank involvement needed',
        'Fast approval process',
        'Ownership transfers after final payment',
      ],
    },
    {
      title: 'Bank-Financed',
      description: 'Partnered with reputable banks, structured EMI plans, suitable for medium to large setups.',
      details: [
        'Partnerships with leading banks',
        'Structured EMI plans',
        'Competitive interest rates',
        'Suitable for medium to large installations',
        'Flexible repayment terms',
        'Professional financial guidance',
      ],
    },
    {
      title: 'Power Purchase Agreement (PPA)',
      description: 'No initial investment required. Pay only for electricity consumed. System owned/operated by provider. Immediate cost savings.',
      details: [
        'Zero upfront investment',
        'Pay only for electricity you use',
        'System owned and maintained by provider',
        'Immediate cost savings',
        'No maintenance responsibilities',
        'Flexible contract terms',
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="section-shell bg-white" data-aos="fade-up">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow">Financing Options</span>
              <h1 className="fw-bold section-title mt-3" style={{ fontSize: '2.5rem' }}>
                Flexible Financing Solutions
              </h1>
              <p className="text-muted mt-3 mx-auto" style={{ maxWidth: '700px' }}>
                Choose the financing option that best fits your needs and budget. We offer multiple ways to make solar energy accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="section-shell pt-0" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {financingOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className="mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="surface-card rounded-4 overflow-hidden">
                      <button
                        className="w-100 p-4 d-flex align-items-center justify-content-between text-start border-0 bg-transparent"
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div>
                          <h3 className="fw-bold mb-2" style={{ color: '#2D5016', fontSize: '1.3rem' }}>
                            {option.title}
                          </h3>
                          <p className="text-muted mb-0">{option.description}</p>
                        </div>
                        <div className="flex-shrink-0 ms-3">
                          {openAccordion === index ? (
                            <HiChevronUp size={24} color="#22C55E" />
                          ) : (
                            <HiChevronDown size={24} color="#64748b" />
                          )}
                        </div>
                      </button>
                      {openAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <div className="border-top pt-4">
                            <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>
                              Key Features:
                            </h4>
                            <ul className="list-unstyled mb-0">
                              {option.details.map((detail, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-start gap-2">
                                  <svg width="20" height="20" fill="#22C55E" viewBox="0 0 20 20" className="mt-1 flex-shrink-0">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-muted">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Financing;
