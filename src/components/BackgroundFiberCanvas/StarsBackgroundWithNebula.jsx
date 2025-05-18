// src/components/StarsBackgroundWithNebula.jsx
import { useEffect, useRef } from 'react';
import styles from './StarsBackground.module.css';

const STAR_CONFIG = {
  desktop: {
    numStars: 250,
    fps: 30,
    fallChance: 0.003,
  },
  mobile: {
    numStars: 100,
    fps: 20,
    fallChance: 0.001,
  },
};

const STAR_COLORS = {
  light: ['#ffffff', '#fdd9a0', '#f4e3d7'],
  dark: ['#ffffff', '#90caf9', '#bbdefb'],
};

const darkStops = ['#000000', '#000010', '#000013', '#000016', '#000019', '#000022', '#000120'];
const dawnStops = ['#000625', '#6797bb', '#b2d9f6', '#d7f8fb', '#fafffe', '#fff2e2', '#fdeadb', '#ffd4be'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function interpolate(c1, c2, t) {
  const [r1, g1, b1] = c1.match(/\w\w/g).map(x => parseInt(x, 16));
  const [r2, g2, b2] = c2.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
}

const createStar = (w, h, colors) => ({
  x: random(0, w), y: random(0, h),
  radius: random(0.3, 1.3), opacity: random(0.3, 1),
  twinkle: random(0.001, 0.004), color: colors[Math.floor(Math.random() * colors.length)],
});

const createFalling = (w, h, colors) => ({
  x: random(0, w), y: random(0, h / 3),
  radius: random(0.6, 1.2), speed: random(15, 20),
  angle: random(-65, 65), color: colors[Math.floor(Math.random() * colors.length)],
});

export default function StarsBackgroundWithNebula({ theme = 'light' }) {
  const canvasRef = useRef();
  const starsRef = useRef([]);
  const fallingRef = useRef([]);
  const animRef = useRef();
  const prevTheme = useRef(theme);
  const transStart = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const { numStars, fps, fallChance } = isMobile ? STAR_CONFIG.mobile : STAR_CONFIG.desktop;
    const interval = 1000 / fps;
    let width, height, lastTime = 0, resizeTimeout;

    function setSize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth; height = window.innerHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initStars() {
      const colors = STAR_COLORS[theme] || STAR_COLORS.light;
      starsRef.current = Array.from({ length: numStars }, () => createStar(width, height, colors));
    }

    function drawBackground(progress) {
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      dawnStops.forEach((stop, i) => {
        const t = i / (dawnStops.length - 1);
        const color = interpolate(darkStops[i] || darkStops.slice(-1)[0], stop, progress);
        grad.addColorStop(t, color);
      });
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStar(s, time) {
      const flick = 0.5 + Math.abs(Math.sin(time * 0.002 + s.x)) * 0.5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${s.opacity * flick})`;
      ctx.fill();
    }

    function drawFalling(s, idx) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fillStyle = s.color;
      ctx.shadowBlur = 20; ctx.shadowColor = s.color;
      ctx.fill();
      s.x += Math.sin(s.angle * Math.PI / 180) * s.speed;
      s.y += Math.cos(s.angle * Math.PI / 180) * s.speed;
      if (s.x < 0 || s.x > width || s.y > height) fallingRef.current.splice(idx, 1);
    }

    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setSize(); initStars();
      }, 200);
    }

    function animate(time) {
      animRef.current = requestAnimationFrame(animate);
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      // Theme transition
      if (prevTheme.current !== theme && !transStart.current) {
        transStart.current = time; prevTheme.current = theme; initStars();
      }
      let prog = 1;
      if (transStart.current) {
        const e = Math.min((time - transStart.current) / 1500, 1);
        prog = e; if (e >= 1) transStart.current = null;
      }
      drawBackground(theme === 'light' ? prog : 1 - prog);

      starsRef.current.forEach(s => drawStar(s, time));
      fallingRef.current.forEach((f, i) => drawFalling(f, i));
      if (Math.random() < fallChance) {
        const colors = STAR_COLORS[theme] || STAR_COLORS.light;
        fallingRef.current.push(createFalling(width, height, colors));
      }
    }

    // init
    setSize(); initStars();
    window.addEventListener('resize', onResize);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animRef.current);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
        role="presentation"
      />
      <div style={{
        position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'
      }}>
        Night sky with animated stars and nebula background.
      </div>
    </>
  );
}
