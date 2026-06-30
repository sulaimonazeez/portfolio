import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'exit'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 2000);
    const t2 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 'enter' && (
        <motion.div
          key="loading"
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: '#fff',
              marginBottom: 20,
              boxShadow: '0 0 40px rgba(249,115,22,0.35)',
            }}
          >
            SA
          </motion.div>

          {/* Name */}
          <motion.div
            className="loading-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Sulaimon{' '}
            <span style={{ color: '#f97316' }}>Azeez</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#475569',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: -8,
            }}
          >
            Senior Full-Stack Engineer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="loading-bar-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: 32 }}
          >
            <div className="loading-bar-fill" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
