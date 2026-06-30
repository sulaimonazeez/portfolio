import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SKILLS } from '../data.js';

const CATEGORY_ICONS = {
  Languages: '⌨️',
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  DevOps: '🚀',
  Fintech: '💳',
};

function SkillGroup({ category, skills, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card"
      style={{ padding: 24 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: '1.3rem' }}>{CATEGORY_ICONS[category]}</span>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '1rem',
          color: '#f1f5f9',
        }}>
          {category}
        </h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container-xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="eyebrow">Skills &amp; Tools</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
            maxWidth: 600,
          }}>
            The full stack,{' '}
            <span style={{ color: '#f97316' }}>end to end.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <SkillGroup key={category} category={category} skills={skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
