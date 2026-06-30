import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { EXPERIENCE } from '../data.js';

const TYPE_COLORS = {
  Founder: { bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.25)', text: '#f97316' },
  Contract: { bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)', text: '#818cf8' },
  Freelance: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#34d399' },
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const colors = TYPE_COLORS[exp.type] || TYPE_COLORS.Freelance;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingLeft: 48, marginBottom: 40 }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 20,
        width: 12,
        height: 12,
        background: '#f97316',
        borderRadius: '50%',
        border: '2px solid rgba(249,115,22,0.3)',
        boxShadow: '0 0 16px rgba(249,115,22,0.4)',
        zIndex: 1,
      }} />

      {/* Card */}
      <div
        className="glass-card"
        style={{ padding: '24px 24px', transition: 'all 0.3s ease' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 16,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#f1f5f9',
              }}>
                {exp.role}
              </h3>
              <span style={{
                padding: '2px 10px',
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                borderRadius: 100,
                fontSize: '0.7rem',
                color: colors.text,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}>
                {exp.type}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#f97316',
              }}>
                {exp.company}
              </span>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#475569', transition: 'color 0.2s', display: 'flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.78rem',
            color: '#475569',
            whiteSpace: 'nowrap',
            paddingTop: 4,
          }}>
            {exp.period}
          </span>
        </div>

        {/* Description */}
        <p style={{
          color: '#64748b',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          marginBottom: 16,
        }}>
          {exp.description}
        </p>

        {/* Achievements */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginBottom: 20,
        }}>
          {exp.achievements.map((ach, i) => (
            <li key={i} style={{
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              fontSize: '0.85rem',
              color: '#64748b',
              lineHeight: 1.5,
            }}>
              <CheckCircle
                size={14}
                style={{ color: '#f97316', flexShrink: 0, marginTop: 2 }}
              />
              {ach}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exp.tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container-xl">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 56 }}
        >
          <span className="eyebrow">Work Experience</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
            maxWidth: 560,
          }}>
            7+ years building{' '}
            <span style={{ color: '#f97316' }}>real products</span>{' '}
            for real users.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 760 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 6,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(249,115,22,0.3) 10%, rgba(249,115,22,0.3) 90%, transparent 100%)',
          }} />

          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
