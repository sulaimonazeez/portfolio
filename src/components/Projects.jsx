import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { PROJECTS } from '../data.js';

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.article
      ref={ref}
      key={project.id}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '3px 10px',
          background: 'rgba(249,115,22,0.12)',
          border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: 100,
          fontSize: '0.68rem',
          color: '#f97316',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          <Star size={10} fill="currentColor" /> FEATURED
        </div>
      )}

      {/* Image / gradient area */}
      <div style={{
        height: 160,
        background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace('to-', '')}`,
        backgroundImage: `linear-gradient(135deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.3) 100%)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Gradient bg */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 30% 50%, ${project.accent}22 0%, transparent 70%)`,
        }} />

        {/* Icon */}
        <div style={{
          fontSize: '3rem',
          position: 'relative',
          zIndex: 1,
          filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))',
        }}>
          {project.icon}
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 8 }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.05rem',
            color: '#f1f5f9',
            marginBottom: 2,
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: project.accent,
          }}>
            {project.subtitle}
          </p>
        </div>

        <p style={{
          fontSize: '0.85rem',
          color: '#64748b',
          lineHeight: 1.65,
          flex: 1,
          marginBottom: 16,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {project.tags.map(t => (
            <span key={t} className="tech-badge" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 8 }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '9px 12px' }}
          >
            Live <ExternalLink size={12} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '9px 12px' }}
          >
            <Github size={13} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="eyebrow">Projects</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
          }}>
            Things I've built{' '}
            <span style={{ color: '#f97316' }}>and shipped.</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            marginBottom: 40,
            padding: '4px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            width: 'fit-content',
          }}
        >
          {FILTERS.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '7px 16px',
                borderRadius: 9,
                border: 'none',
                background: activeFilter === filter.id ? '#f97316' : 'transparent',
                color: activeFilter === filter.id ? '#fff' : '#64748b',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '0.82rem',
                transition: 'all 0.25s ease',
                boxShadow: activeFilter === filter.id ? '0 4px 16px rgba(249,115,22,0.35)' : 'none',
              }}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#475569' }}>
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
