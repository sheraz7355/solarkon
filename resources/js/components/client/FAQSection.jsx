import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the benefits of solar energy?',
      answer:
        "Solar energy reduces electricity bills, lowers your carbon footprint, increases home value, and provides energy independence. It's a sustainable and cost-effective solution for your energy needs.",
    },
    {
      question: 'How long does solar panel installation take?',
      answer:
        'The installation timeline varies depending on the system size and complexity, but typically ranges from 1 to 3 days after permits are approved.',
    },
    {
      question: 'Is solar energy reliable?',
      answer:
        'Yes, solar energy systems are highly reliable. With proper maintenance, they can last for decades, providing consistent power. Battery storage solutions can also ensure power during outages.',
    },
    {
      question: 'What is the cost of solar panel installation?',
      answer:
        'The cost depends on various factors like system size, panel type, and installation complexity. We offer customized quotes after a free consultation to provide an accurate estimate.',
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className='section-shell bg-white' data-aos='fade-up'>
      <div className='container'>
        <div className='text-center mb-5 section-heading'>
          <span className='eyebrow'>FAQ</span>
          <h2 className='fw-bold section-title mt-3' style={{ fontSize: '2.3rem' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className='mx-auto' style={{ maxWidth: 760 }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className='accordion-card mb-3'>
                <button
                  type='button'
                  onClick={() => toggleIndex(index)}
                  className='w-100 border-0 bg-transparent text-start px-4 py-3 d-flex align-items-center justify-content-between accordion-trigger'
                >
                  <span>{faq.question}</span>
                  <svg
                    width='20'
                    height='20'
                    fill='none'
                    stroke='#22C55E'
                    viewBox='0 0 24 24'
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key='content'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className='px-4 pb-3'
                    >
                      <p className='text-muted small mb-0'>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

