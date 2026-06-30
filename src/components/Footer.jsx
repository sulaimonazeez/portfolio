import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0 28px',
      position: 'relative',
    }}>
      <div className="container-xl">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}>
          {/* Top row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 24,
          }}>
            {/* Brand */}
            <div style={{ maxWidth: 280 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 30,
                  height: 30,
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: '#fff',
                }}>
                  SA
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#f1f5f9',
                }}>
                  Sulaimon Azeez
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6 }}>
                Senior Full-Stack Engineer building fintech and enterprise software for Nigeria and Africa.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <div style={{
                fontSize: '0.72rem',
                color: '#475569',
                letterSpacing: '0.08em',
                marginBottom: 12,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                QUICK LINKS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{ fontSize: '0.85rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div style={{
                fontSize: '0.72rem',
                color: '#475569',
                letterSpacing: '0.08em',
                marginBottom: 12,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                ELSEWHERE
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconStyle}>
                  <Github size={16} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={iconStyle}>
                  <Linkedin size={16} />
                </a>
                <a href={SOCIAL_LINKS.email} aria-label="Email" style={iconStyle}>
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            <span style={{ fontSize: '0.78rem', color: '#334155' }}>
              © {year} Sulaimon Azeez. All rights reserved.
            </span>
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.78rem',
                color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              Back to top <ArrowUp size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const iconStyle = {
  width: 34,
  height: 34,
  borderRadius: 8,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#64748b',
  transition: 'all 0.2s',
  textDecoration: 'none',
};
