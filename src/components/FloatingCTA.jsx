import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      const contactEl = document.getElementById('contact');
      const nearContact = contactEl
        ? window.scrollY + window.innerHeight > contactEl.offsetTop
        : false;
      setVisible(window.scrollY > heroHeight && !nearContact);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            right: 24,
            bottom: 24,
            zIndex: 90,
            width: 54,
            height: 54,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
            textDecoration: 'none',
          }}
          aria-label="Contact me"
        >
          <MessageCircle size={22} color="#fff" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
