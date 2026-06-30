import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../data.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navBg = scrolled
    ? 'rgba(10, 10, 15, 0.92)'
    : 'transparent';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 36,
              height: 36,
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              borderRadius: 9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#fff',
              boxShadow: '0 0 16px rgba(249,115,22,0.3)',
              flexShrink: 0,
            }}>
              SA
            </div>
            <div style={{ display: 'none' }} className="md-show">
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#f1f5f9',
                letterSpacing: '-0.01em',
              }}>
                Sulaimon Azeez
              </span>
              <span style={{
                display: 'block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#f97316',
                letterSpacing: '0.06em',
              }}>
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                style={{ padding: '6px 12px' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:olaniyisulaimon221@gmail.com"
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem', marginLeft: 8 }}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '6px 8px',
              color: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              background: 'rgba(10, 10, 15, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              zIndex: 99,
              padding: '16px 24px 24px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: '12px 16px',
                    color: activeSection === link.href.slice(1) ? '#f97316' : '#94a3b8',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    borderRadius: 8,
                    background: activeSection === link.href.slice(1) ? 'rgba(249,115,22,0.08)' : 'transparent',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="mailto:olaniyisulaimon221@gmail.com"
                className="btn-primary"
                style={{ marginTop: 12, textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                Hire Me <ExternalLink size={14} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .md-show { display: block !important; }
        }
        .md-show { display: none; }
      `}</style>
    </>
  );
}
