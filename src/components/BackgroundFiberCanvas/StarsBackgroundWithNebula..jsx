import { useEffect, useRef } from 'react';
import styles from './StarsBackground.module.css';

const NUM_STARS = 250;

const STAR_COLORS = {
  light: ['#ffffff', '#fdd9a0', '#f4e3d7'],
  dark: ['#ffffff', '#90caf9', '#bbdefb'],
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const createStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h),
  radius: random(0.3, 1.3),
  opacity: random(0.3, 1),
  twinkleSpeed: random(0.0001, 0.002),
  color: colors[Math.floor(Math.random() * colors.length)],
});

const createFallingStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h),
  radius: random(0.6, 1.2),
  speed: random(15, 18),
  angle: random(-65, 65),
  color: colors[Math.floor(Math.random() * colors.length)],
});

export default function StarsBackgroundWithNebula({ theme }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const fallingRef = useRef([]);
  const animRef = useRef(null);
  const transitionStartRef = useRef(null);
  const prevThemeRef = useRef(theme);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function initStars() {
      const colors = STAR_COLORS[theme];
      starsRef.current = Array.from({ length: NUM_STARS }, () =>
        createStar(width, height, colors)
      );
    }

    function resizeHandler() {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      initStars();
    }

    function drawBackground(progress) {
      const grad = ctx.createLinearGradient(0, 0, 0, height);

      const darkStops = [
        '#000002',
        '#00001a',
        '#000015',
        '#000020',
        '#000a1a',
        '#000625',
      ];
      const dawnStops = [

        '#000625',
        '#6797bb',
        '#b2d9f6',
        '#d7f8fb',
        '#fafffe',
        '#fff2e2',
        '#fdeadb', 
   '     #ffd4be',

      ]

      const interpolate = (c1, c2, t) => {
        const [r1, g1, b1] = c1.match(/\w\w/g).map(x => parseInt(x, 16));
        const [r2, g2, b2] = c2.match(/\w\w/g).map(x => parseInt(x, 16));
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        return `rgb(${r},${g},${b})`;
      };

      for (let i = 0; i < dawnStops.length; i++) {
        const t = i / (dawnStops.length - 1);
        const color = interpolate(darkStops[i] || darkStops[darkStops.length - 1], dawnStops[i], progress);
        grad.addColorStop(t, color);
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStar(star, t) {
      const flicker = 0.3 + Math.abs(Math.sin(t * star.twinkleSpeed)) * 0.5;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${star.opacity * flicker})`;
      ctx.fill();
    }

    function updateFallingStar(star, idx) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = star.color;
      ctx.shadowBlur = 30;
      ctx.shadowColor = star.color;
      ctx.fill();
      star.x += Math.sin((star.angle * Math.PI) / 180) * star.speed;
      star.y += Math.cos((star.angle * Math.PI) / 180) * star.speed;
      if (star.x < 0 || star.x > width || star.y > height) {
        fallingRef.current.splice(idx, 1);
      }
    }

    let animationStart = null;
    const TRANSITION_DURATION = 1500; // 1.5 seconds

    function animate(t) {
      if (animationStart === null) animationStart = t;

      let progress = 1;
      if (transitionStartRef.current) {
        const elapsed = t - transitionStartRef.current;
        progress = Math.min(elapsed / TRANSITION_DURATION, 1);
        if (progress === 1) transitionStartRef.current = null;
      }

      if (prevThemeRef.current !== theme && !transitionStartRef.current) {
        transitionStartRef.current = t;
        prevThemeRef.current = theme;
        initStars();
      }

      drawBackground(theme === 'light' ? progress : 1 - progress);

      starsRef.current.forEach(star => drawStar(star, t));
      fallingRef.current.forEach((star, idx) => updateFallingStar(star, idx));

      if (Math.random() < 0.005) {
        const colors = STAR_COLORS[theme];
        fallingRef.current.push(createFallingStar(width, height, colors));
      }

      animRef.current = requestAnimationFrame(animate);
    }

    initStars();
    window.addEventListener('resize', resizeHandler);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animRef.current);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
