import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, EMAILJS_CONFIG } from '../data.js';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  const infoCards = [
    { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Phone, label: 'Phone / WhatsApp', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: CONTACT_INFO.location, href: null },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 48, textAlign: 'center' }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#f1f5f9',
            letterSpacing: '-0.025em',
            marginTop: 8,
          }}>
            Let's build something{' '}
            <span style={{ color: '#f97316' }}>great together.</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: 14, maxWidth: 480, marginInline: 'auto', fontSize: '0.95rem' }}>
            {CONTACT_INFO.availability}. Tell me about your project — I usually reply within 24 hours.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 24,
          maxWidth: 980,
          margin: '0 auto',
        }} className="contact-grid">

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card"
            style={{ padding: 28 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginBottom: 6, display: 'block' }}>
                  Your Name
                </label>
                <input
                  required
                  name="from_name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginBottom: 6, display: 'block' }}>
                  Email Address
                </label>
                <input
                  required
                  name="from_email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, marginBottom: 6, display: 'block' }}>
                  Project Details
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  marginTop: 4,
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                }}
              >
                {status === 'sending' && <><Loader2 size={16} className="spin" /> Sending...</>}
                {status === 'sent' && <><CheckCircle2 size={16} /> Message Sent!</>}
                {(status === 'idle' || status === 'error') && <>Send Message <Send size={15} /></>}
              </button>

              {status === 'error' && (
                <p style={{ fontSize: '0.8rem', color: '#f87171', textAlign: 'center' }}>
                  Something went wrong — please email me directly at {CONTACT_INFO.email}
                </p>
              )}
            </div>
          </motion.form>

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {infoCards.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? 'a' : 'div';
              return (
                <Wrapper
                  key={label}
                  href={href || undefined}
                  className="glass-card"
                  style={{
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#f97316" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#475569', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>{value}</div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social row */}
            <div className="glass-card" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.72rem', color: '#475569', marginBottom: 12 }}>Connect on social</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; e.currentTarget.style.color = '#f97316'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  <Github size={17} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; e.currentTarget.style.color = '#f97316'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            {/* Availability note */}
            <div className="glass-card" style={{
              padding: '18px 20px',
              background: 'rgba(16,185,129,0.04)',
              borderColor: 'rgba(16,185,129,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }} />
                <span style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 500 }}>
                  Currently accepting new projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 800px) {
          .contact-grid { grid-template-columns: 1.4fr 1fr !important; }
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
