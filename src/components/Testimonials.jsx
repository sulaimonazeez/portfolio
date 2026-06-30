import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '../data.js';

function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card"
      style={{ padding: 28, display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Quote size={24} style={{ color: 'rgba(249,115,22,0.3)', marginBottom: 16 }} />

      <p style={{
        color: '#94a3b8',
        fontSize: '0.92rem',
        lineHeight: 1.75,
        flex: 1,
        marginBottom: 24,
        fontStyle: 'italic',
      }}>
        "{t.text}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: `${t.color}20`,
          border: `1px solid ${t.color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '0.8rem',
          color: t.color,
          flexShrink: 0,
        }}>
          {t.avatar}
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f1f5f9' }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: '#475569' }}>{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container-xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="eyebrow">Testimonials</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
          }}>
            What clients say{' '}
            <span style={{ color: '#f97316' }}>about working with me.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Blog link strip */}
        <motion.a
          href="https://blog.paystar.com.ng"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-card"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 28px',
            textDecoration: 'none',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#f97316',
              letterSpacing: '0.08em',
              display: 'block',
              marginBottom: 4,
            }}>
              ALSO WRITING AT
            </span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#f1f5f9',
            }}>
              blog.paystar.com.ng — fintech &amp; engineering notes
            </span>
          </div>
          <ArrowUpRight size={22} style={{ color: '#f97316', flexShrink: 0 }} />
        </motion.a>
      </div>
    </section>
  );
}
