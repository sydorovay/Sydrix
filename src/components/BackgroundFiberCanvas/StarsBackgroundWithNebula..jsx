// Updated StarsBackgroundWithNebula.jsx
import { useEffect, useRef } from 'react';
import styles from './StarsBackground.module.css';

const NUM_STARS = 250;
const STAR_COLORS = {
  light: ['#ffffff', '#bbdefb', '#90caf9'],
  dark: ['#ffffff', '#bbdefb', '#90caf9'],
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const createStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h),
  radius: random(0.3, 1.4),
  opacity: random(0.3, 1),
  twinkleSpeed: random(0.0001, 0.002),
  color: colors[Math.floor(Math.random() * colors.length)],
});

const createFallingStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h),
  radius: random(0.5, 1.2),
  speed: random(15, 18),
  angle: random(-65, 65),
  color: colors[Math.floor(Math.random() * colors.length)],
  falling: true,
});

const createCloud = (w, h) => ({
  x: random(0, w),
  y: random(0, h * 0.6),
  opacity: random(0.03, 0.07),
  speed: random(0.1, 0.4),
  scale: random(1.5, 3),
  directionX: random(-0.3, 0.3),
  directionY: random(-0.05, 0.05),
});

export default function StarsBackgroundWithNebula({ theme }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const cloudsRef = useRef([]);
  const fallingRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function initScene() {
      const colors = STAR_COLORS[theme] || STAR_COLORS.dark;
      starsRef.current = Array.from({ length: NUM_STARS }, () => createStar(width, height, colors));
      cloudsRef.current = Array.from({ length: 4 }, () => createCloud(width, height));
      fallingRef.current = [];
    }

    function resizeHandler() {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      initScene();
    }

    function drawBackground() {
      if (theme === 'light') {
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#000000');
        grad.addColorStop(0.4, '#1786b1');
        grad.addColorStop(1, '#e1a9a9');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.filter = 'blur(60px)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    function drawCloud(cloud, t) {
      const { x, y, scale, opacity, directionX, directionY } = cloud;
      const alpha = opacity + Math.sin(t * 0.001 + x) * 0.02;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.beginPath();
      for (let i = 0; i < 7; i++) {
        const a = (Math.PI * 2 * i) / 7;
        ctx.quadraticCurveTo(Math.cos(a) * 30, Math.sin(a) * 20, 0, 0);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.shadowBlur = 100;
      ctx.shadowColor = `rgba(255,255,255,${alpha})`;
      ctx.fill();
      ctx.restore();
      cloud.x += directionX * cloud.speed;
      cloud.y += directionY * cloud.speed;
      if (cloud.x < -200 || cloud.x > width + 200 || cloud.y < -100 || cloud.y > height) {
        Object.assign(cloud, createCloud(width, height));
      }
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

    function animate(t) {
      drawBackground();
      cloudsRef.current.forEach(c => drawCloud(c, t));
      starsRef.current.forEach(s => drawStar(s, t));
      fallingRef.current.forEach((f, i) => updateFallingStar(f, i));
      if (Math.random() < 0.005) {
        const colors = STAR_COLORS[theme] || STAR_COLORS.dark;
        fallingRef.current.push(createFallingStar(width, height, colors));
      }
      animRef.current = requestAnimationFrame(animate);
    }

    initScene();
    window.addEventListener('resize', resizeHandler);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
}
