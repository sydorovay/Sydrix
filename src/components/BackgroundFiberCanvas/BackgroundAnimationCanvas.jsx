import { useEffect, useRef } from 'react';
import styles from './StarsBackground.module.css';

const NUM_STARS = 250;
const STAR_COLORS_LIGHT = ['#ffffff', '#bbdefb', '#90caf9'];
const STAR_COLORS_DARK = ['#ffffff', '#bbdefb', '#90caf9'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const createStar = (w, h, colors) => ({
  x: Math.random() * w,
  y: Math.random() * h,
  radius: Math.random() * 1.1 + 0.3,
  opacity: Math.random() * 0.7 + 0.3,
  twinkleSpeed: random(0.0001, 0.003),
  color: colors[Math.floor(Math.random() * colors.length)],
  dy: random(0.5, 1.5)
});

const createFallingStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h),
  radius: random(0.5, 1.5),
  opacity: 1,
  speed: random(6, 10),
  angle: random(35, 65),
  color: colors[Math.floor(Math.random() * colors.length)],
  falling: true,
});

const createCloud = (w, h) => ({
  x: Math.random() * w,
  y: Math.random() * h * 0.6,
  opacity: random(0.02, 0.06),
  speed: random(0.02, 0.05),
  scale: random(1.5, 2.5),
});

export default function StarsBackgroundWithNebula({ theme }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const fallingStars = useRef([]);
  const clouds = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starColors = theme === 'light' ? STAR_COLORS_LIGHT : STAR_COLORS_DARK;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.current = Array.from({ length: NUM_STARS }, () => createStar(width, height, starColors));
      clouds.current = Array.from({ length: 4 }, () => createCloud(width, height));
    };

    resize();
    window.addEventListener('resize', resize);

    const drawSmoothCloud = (ctx, cloud, t) => {
      const x = cloud.x;
      const y = cloud.y;
      const scale = cloud.scale;
      const alpha = cloud.opacity + Math.sin(t * 0.001) * 0.015;

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.beginPath();

      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5;
        const cx = Math.cos(angle) * 30;
        const cy = Math.sin(angle) * 20;
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(cx, cy, 0, 0);
      }

      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.shadowBlur = 50;
      ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
      ctx.restore();

      cloud.x += cloud.speed;
      if (cloud.x > width + 100) cloud.x = -100;
    };

    const render = (t) => {
      ctx.clearRect(0, 0, width, height);
      if (theme === 'light') {
        const gradientSky = ctx.createLinearGradient(0, 0, 0, height);
        gradientSky.addColorStop(0, '#000000');
        gradientSky.addColorStop(0.1, '#043157');
        gradientSky.addColorStop(0.3, '#1786b1');
        gradientSky.addColorStop(0.5, '#86C6D7');
        gradientSky.addColorStop(0.6, '#C5DED4');
        gradientSky.addColorStop(0.7, '#E8E2C0');
        gradientSky.addColorStop(0.8, '#F4D6B2');
        gradientSky.addColorStop(1, '#e1a9a9');
        ctx.fillStyle = gradientSky;
        ctx.fillRect(0, 0, width, height);

        // Розмитий серпанок поверх неба
        ctx.save();
        ctx.filter = 'blur(60px)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }
      clouds.current.forEach(cloud => drawSmoothCloud(ctx, cloud, t));

      stars.current.forEach(s => {
        const flicker = 0.5 + Math.abs(Math.sin(t * s.twinkleSpeed)) * 0.8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle =
          theme === 'light'
            ? `rgba(200, 255, 255, ${s.opacity * flicker})`
            : `rgba(255, 255, 255, ${s.opacity * flicker})`;
        ctx.fill();
      });

      fallingStars.current.forEach((star, index) => {
        if (star.falling) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
          ctx.fillStyle = star.color;
          ctx.fill();

          star.x += Math.sin((star.angle * Math.PI) / 180) * star.speed;
          star.y += Math.cos((star.angle * Math.PI) / 180) * star.speed;

          if (star.y > height || star.x < 0 || star.x > width) {
            fallingStars.current.splice(index, 1);
          }
        }
      });

      if (Math.random() < 0.004) {
        fallingStars.current.push(createFallingStar(width, height, starColors));
      }

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
    return () => window.removeEventListener('resize', resize);
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
