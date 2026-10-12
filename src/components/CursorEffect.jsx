import { useEffect, useRef, useState } from 'react';
import { hasHover, prefersReducedMotion } from '../utils/motion';

/** Glowing trail + custom cursor. Only on devices with a real pointer, and never with reduced motion. */
export default function CursorEffect() {
  const [enabled] = useState(() => hasHover() && !prefersReducedMotion());
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dot = dotRef.current;
    const ring = ringRef.current;
    let width;
    let height;
    let points = [];
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      points.push({ x: mx, y: my, life: 1 });
      dot.style.opacity = 1;
      ring.style.opacity = 1;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    };
    const onOver = (e) => {
      ring.classList.toggle('big', !!e.target.closest('a,button,label,input,textarea,.card'));
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      points = points.filter((p) => p.life > 0);
      points.forEach((p) => {
        p.life -= 0.03;
        ctx.globalAlpha = p.life * 0.7;
        ctx.fillStyle = '#a855f7';
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 24;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 11 * p.life, 0, Math.PI * 2);
        ctx.fill();
      });
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div aria-hidden="true">
      <canvas className="trail" ref={canvasRef} />
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
}
