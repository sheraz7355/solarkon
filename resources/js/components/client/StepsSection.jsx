import { motion } from 'framer-motion';

function StepsSection() {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Schedule a free consultation with our experts to assess your energy needs.',
    },
    {
      number: '2',
      title: 'Installation',
      description: 'Our certified technicians will install your solar system efficiently and safely.',
    },
    {
      number: '3',
      title: 'Activation',
      description: 'Start generating your own clean energy and enjoy immediate savings.',
    },
  ];

  return (
    <section
      className='section-shell section-dark position-relative overflow-hidden'
      data-aos='fade-up'
    >
      <div className='container position-relative'>
        <motion.div
          className='text-center mb-5 section-heading'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className='eyebrow' style={{ background: 'rgba(34,197,94,0.2)' }}>
            How It Works
          </span>
          <h2 className='fw-bold text-white mt-3' style={{ fontSize: '2.3rem' }}>
            Switching To Solar In 3 Easy Steps
          </h2>
        </motion.div>

        <div className='row g-4 mb-4'>
          <div className='col-lg-6'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='stack-large gradient-border'
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></motion.div>
          </div>
          <div className='col-lg-6'>
            <div className='image-stack'>
              {[
                'https://images.pexels.com/photos/9875446/pexels-photo-9875446.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'https://images.pexels.com/photos/9875443/pexels-photo-9875443.jpeg?auto=compress&cs=tinysrgb&w=1200',
              ].map((url, idx) => (
                <motion.div
                  key={url}
                  className='stack-small gradient-border'
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className='row g-4'>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className='col-md-4 text-md-start text-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='fw-bold text-white-50 mb-2' style={{ fontSize: '3rem' }}>
                {step.number}
              </div>
              <h3 className='text-white fw-bold mb-2' style={{ fontSize: '1.25rem' }}>
                {step.title}
              </h3>
              <p className='text-white-50 small mb-0'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;

