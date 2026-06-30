import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const bar = barRef.current;
      if (!bar) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 1000, background: 'rgba(255,255,255,0.05)' }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #f97316, #fb923c)',
          boxShadow: '0 0 10px rgba(249,115,22,0.5)',
          width: '0%',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  );
}
