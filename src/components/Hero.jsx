import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { ROLES, STATS, SOCIAL_LINKS } from '../data.js';

/* ─── Typewriter hook ─────────────────────────────────────────────── */
function useTypewriter(texts, speed = 70, pause = 2200) {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[roleIdx];

    if (phase === 'typing') {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('deleting'), pause);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, speed * 0.5);
        return () => clearTimeout(t);
      } else {
        setPhase('typing');
        setRoleIdx(i => (i + 1) % texts.length);
      }
    }
  }, [charIdx, phase, roleIdx, texts, speed, pause]);

  return displayed;
}

/* ─── Particle Canvas ─────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], rafId;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      const count = Math.min(100, Math.floor((w * h) / 12000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.45 + 0.1,
          isOrange: Math.random() < 0.12,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isOrange
          ? `rgba(249,115,22,${p.alpha})`
          : `rgba(241,245,249,${p.alpha * 0.6})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    }

    init();
    draw();
    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */
export default function Hero() {
  const typedRole = useTypewriter(ROLES);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 1 }} />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }} />
      </div>

      {/* Content */}
      <div className="container-xl" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="hero-grid">

          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ maxWidth: 680 }}
          >
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                background: 'rgba(249,115,22,0.08)',
                border: '1px solid rgba(249,115,22,0.2)',
                borderRadius: 100,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#f97316',
                letterSpacing: '0.06em',
                marginBottom: 28,
              }}>
                <span style={{ width: 7, height: 7, background: '#f97316', borderRadius: '50%', boxShadow: '0 0 8px #f97316', animation: 'pulseGlow 2s ease-in-out infinite' }} />
                AVAILABLE FOR FREELANCE & CONTRACT
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: '#64748b',
                marginBottom: 8,
                letterSpacing: '0.04em',
              }}>
                &gt;_ Hi, I'm Azeez
              </p>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#f1f5f9',
                marginBottom: 4,
              }}>
                Senior
              </h1>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#f97316',
                minHeight: '1.2em',
                display: 'flex',
                alignItems: 'center',
              }}>
                {typedRole}
                <span className="cursor-blink" />
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#64748b',
                lineHeight: 1.65,
                marginTop: 20,
                maxWidth: 560,
              }}
            >
              I design and build production-grade software —{' '}
              <span style={{ color: '#94a3b8' }}>fintech platforms, enterprise ERPs, and scalable APIs</span>{' '}
              for Nigerian and African businesses. 7+ years of shipping software that actually works.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: 20,
                marginTop: 32,
                flexWrap: 'wrap',
              }}
            >
              {STATS.map(stat => (
                <div key={stat.label} style={{
                  textAlign: 'center',
                  padding: '12px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  minWidth: 90,
                }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#f97316',
                    lineHeight: 1,
                    marginBottom: 4,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.3, fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}
            >
              <a href="#contact" className="btn-primary">
                Hire Me <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn-secondary">
                View Work
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: 16, marginTop: 28, alignItems: 'center' }}
            >
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#64748b',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <Github size={16} /> github.com/sulaimonazeez
              </a>
              <span style={{ color: '#1e293b' }}>·</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <Linkedin size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#64748b',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — featured card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-card-col"
          >
            <FeaturedCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            marginTop: 64,
            color: '#334155',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>
            SCROLL
          </span>
          <ChevronDown size={16} className="scroll-bounce" />
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 899px) {
          .hero-card-col { display: none; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; box-shadow: 0 0 4px #f97316; }
          50% { opacity: 1; box-shadow: 0 0 12px #f97316; }
        }
      `}</style>
    </section>
  );
}

/* ─── Featured Project Card (hero right side) ────────────────────── */
function FeaturedCard() {
  return (
    <div
      className="glass-card float-anim"
      style={{ padding: 28, position: 'relative', overflow: 'hidden' }}
    >
      {/* Orange corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 120,
        height: 120,
        background: 'radial-gradient(circle at top right, rgba(249,115,22,0.15), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            color: '#f97316',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: 4,
          }}>
            FEATURED PROJECT
          </span>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#f1f5f9',
          }}>
            PayStar
          </h3>
        </div>
        <span style={{
          padding: '4px 10px',
          background: 'rgba(16,185,129,0.1)',
          border: '1px solid rgba(16,185,129,0.2)',
          borderRadius: 100,
          fontSize: '0.72rem',
          color: '#10b981',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          ● LIVE
        </span>
      </div>

      {/* Mockup area */}
      <div style={{
        height: 140,
        background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(234,88,12,0.04))',
        border: '1px solid rgba(249,115,22,0.12)',
        borderRadius: 10,
        marginBottom: 20,
        padding: 16,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.75rem',
        color: '#475569',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ color: '#f97316' }}>const paystar = {'{'}</div>
        <div style={{ paddingLeft: 16 }}>
          <span style={{ color: '#6366f1' }}>type</span>
          <span style={{ color: '#64748b' }}>: </span>
          <span style={{ color: '#10b981' }}>'VTU Fintech PWA'</span>,
        </div>
        <div style={{ paddingLeft: 16 }}>
          <span style={{ color: '#6366f1' }}>stack</span>
          <span style={{ color: '#64748b' }}>: </span>
          <span style={{ color: '#10b981' }}>['React', 'Node', 'MongoDB']</span>,
        </div>
        <div style={{ paddingLeft: 16 }}>
          <span style={{ color: '#6366f1' }}>users</span>
          <span style={{ color: '#64748b' }}>: </span>
          <span style={{ color: '#fb923c' }}>Nigeria</span>
          <span style={{ color: '#64748b' }}> 🇳🇬</span>,
        </div>
        <div style={{ paddingLeft: 16 }}>
          <span style={{ color: '#6366f1' }}>status</span>
          <span style={{ color: '#64748b' }}>: </span>
          <span style={{ color: '#10b981' }}>'production'</span>,
        </div>
        <div>{'}'};</div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: 20 }}>
        Nigeria's full-stack VTU platform — airtime, data, electricity, cable TV, wallets, and referrals. Built solo from zero to production.
      </p>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {['React 19', 'Node.js', 'MongoDB', 'PWA', 'Paystack'].map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', gap: 10 }}>
        <a
          href="https://paystar.com.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '10px 16px' }}
        >
          View Live
        </a>
        <a
          href="https://github.com/sulaimonazeez"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '10px 16px' }}
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </div>
  );
}
