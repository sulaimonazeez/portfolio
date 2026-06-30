import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Only on devices with a fine pointer
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    document.addEventListener('mousemove', onMove);

    // Hover detection on interactive elements
    const interactive = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Lerp animation loop
    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      // Dot follows instantly
      dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;

      // Ring lags behind
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;

      // Scale on hover
      const scale = hovering.current ? 1.8 : 1;
      ring.style.opacity = hovering.current ? '0.4' : '0.7';
      ring.style.scale = scale;

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: '#f97316',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 8px rgba(249,115,22,0.8)',
          willChange: 'transform',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: '1.5px solid rgba(249,115,22,0.7)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'opacity 0.3s, scale 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
