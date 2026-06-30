import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, Calendar, Briefcase, Coffee } from 'lucide-react';

const CODE_LINES = [
  { type: 'comment', text: '# Profile: Sulaimon Azeez' },
  { type: 'blank', text: '' },
  { type: 'key', text: 'engineer', value: '"Sulaimon Azeez"', color: '#10b981' },
  { type: 'key', text: 'role', value: '"Senior Full-Stack Engineer"', color: '#10b981' },
  { type: 'key', text: 'experience', value: '"7+ years"', color: '#fb923c' },
  { type: 'key', text: 'location', value: '"Lagos, Nigeria 🇳🇬"', color: '#10b981' },
  { type: 'key', text: 'available', value: 'True', color: '#6366f1' },
  { type: 'blank', text: '' },
  { type: 'comment', text: '# Core expertise' },
  { type: 'list-open', text: 'stack = [' },
  { type: 'list-item', text: '"Node.js / Express",' },
  { type: 'list-item', text: '"React 19 / Next.js",' },
  { type: 'list-item', text: '"Python / Django",' },
  { type: 'list-item', text: '"Frappe / ERPNext",' },
  { type: 'list-close', text: ']' },
  { type: 'blank', text: '' },
  { type: 'key', text: 'openTo', value: '["freelance", "contract", "consulting"]', color: '#f97316' },
];

function TerminalLine({ line }) {
  if (line.type === 'blank') return <div style={{ height: 10 }} />;
  if (line.type === 'comment') return (
    <div style={{ color: '#475569', fontStyle: 'italic', fontSize: '0.8rem', lineHeight: 1.8 }}>
      {line.text}
    </div>
  );
  if (line.type === 'list-open' || line.type === 'list-close') return (
    <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.8 }}>{line.text}</div>
  );
  if (line.type === 'list-item') return (
    <div style={{ paddingLeft: 20, color: '#10b981', fontSize: '0.8rem', lineHeight: 1.8 }}>
      {line.text}
    </div>
  );
  return (
    <div style={{ fontSize: '0.8rem', lineHeight: 1.8, display: 'flex', gap: 8 }}>
      <span style={{ color: '#6366f1' }}>{line.key || line.text.split(':')[0]}</span>
      <span style={{ color: '#64748b' }}>= </span>
      <span style={{ color: line.color || '#10b981' }}>{line.value}</span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const facts = [
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria 🇳🇬' },
    { icon: Calendar, label: 'Experience', value: '7+ years in production' },
    { icon: Briefcase, label: 'Status', value: 'Open to opportunities' },
    { icon: Coffee, label: 'Preference', value: 'Remote & Async work' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="eyebrow">About Me</span>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="about-grid">

            {/* Left — Terminal window */}
            <motion.div variants={itemVariants} className="terminal-col">
              <div
                className="glass-card"
                style={{ overflow: 'hidden', borderRadius: 12 }}
              >
                {/* Terminal title bar */}
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', opacity: 0.8 }} />
                  <span style={{
                    marginLeft: 8,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#475569',
                  }}>
                    azeez_profile.py
                  </span>
                </div>

                {/* Code body */}
                <div style={{
                  padding: '20px 24px',
                  fontFamily: "'JetBrains Mono', monospace",
                  minHeight: 280,
                }}>
                  {CODE_LINES.map((line, i) => (
                    <TerminalLine key={i} line={line} />
                  ))}
                  <div style={{
                    marginTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    color: '#f97316',
                    fontSize: '0.8rem',
                  }}>
                    <span>$</span>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Bio text */}
            <motion.div variants={containerVariants} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <motion.div variants={itemVariants}>
                <h2 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  color: '#f1f5f9',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}>
                  Building software that matters{' '}
                  <span style={{ color: '#f97316' }}>for Africa.</span>
                </h2>

                <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '1rem', marginBottom: 16 }}>
                  I'm a Senior Full-Stack Engineer based in Lagos, Nigeria, with 7+ years of experience
                  shipping production software. I started freelancing in 2018, and over the years I've built
                  fintech platforms, enterprise ERPs, real-time applications, and content systems — solo and in teams.
                </p>

                <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '1rem', marginBottom: 16 }}>
                  My strength is understanding business requirements and translating them into{' '}
                  <span style={{ color: '#94a3b8', fontWeight: 500 }}>clean, maintainable, scalable code</span>.
                  I don't just write features — I think about architecture, security, performance, and the
                  next engineer who'll read what I wrote.
                </p>

                <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '1rem' }}>
                  Outside of code, I'm deeply interested in how software can solve real problems for Nigerian
                  businesses — from payment infrastructure to inventory management to financial inclusion.
                  That's what drives me to build.
                </p>
              </motion.div>

              {/* Fact grid */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                }}
              >
                {facts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="glass-card"
                    style={{ padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}
                  >
                    <div style={{
                      width: 32,
                      height: 32,
                      background: 'rgba(249,115,22,0.1)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="#f97316" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 500, marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA row */}
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary">
                  Let's Work Together
                </a>
                <a
                  href="https://github.com/sulaimonazeez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 899px) {
          .terminal-col { display: none; }
        }
      `}</style>
    </section>
  );
}
