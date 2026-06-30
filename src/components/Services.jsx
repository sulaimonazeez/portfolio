import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '../data.js';

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card"
      style={{ padding: 28, height: '100%' }}
    >
      <div style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: `${service.color}15`,
        border: `1px solid ${service.color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        marginBottom: 18,
      }}>
        {service.icon}
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: '1.05rem',
        color: '#f1f5f9',
        marginBottom: 10,
      }}>
        {service.title}
      </h3>

      <p style={{ color: '#64748b', fontSize: '0.87rem', lineHeight: 1.7 }}>
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="section">
      <div className="container-xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="eyebrow">What I Offer</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
            maxWidth: 600,
          }}>
            Services built around{' '}
            <span style={{ color: '#f97316' }}>your business needs.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
