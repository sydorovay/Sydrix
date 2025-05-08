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
  opacity: 1,
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
  const stars = useRef([]);
  const fallingStars = useRef([]);
  const clouds = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const starColors = STAR_COLORS[theme] || STAR_COLORS.dark;

    const initScene = () => {
      stars.current = Array.from({ length: NUM_STARS }, () => createStar(width, height, starColors));
      clouds.current = Array.from({ length: 4 }, () => createCloud(width, height));
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initScene();
    };

    const drawCloud = (ctx, cloud, t) => {
      const { x, y, scale, opacity, directionX, directionY } = cloud;
      const alpha = opacity + Math.sin(t * 0.001 + x) * 0.02;

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      ctx.beginPath();
      for (let i = 0; i < 7; i++) {
        const angle = (Math.PI * 2 * i) / 7;
        ctx.quadraticCurveTo(Math.cos(angle) * 30, Math.sin(angle) * 20, 0, 0);
      }
      ctx.closePath();

      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.shadowBlur = 100;
      ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();
      ctx.restore();

      cloud.x += directionX * cloud.speed;
      cloud.y += directionY * cloud.speed;

      if (cloud.x > width + 200 || cloud.x < -200 || cloud.y > height || cloud.y < -100) {
        Object.assign(cloud, createCloud(width, height));
      }
    };

  // 🔁 Винеси цю функцію нагору (поза render)
const drawBackground = () => {
  if (theme === 'light') {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(0., '#000036');
    gradient.addColorStop(0.15, '#043157');
    gradient.addColorStop(0.4, '#1786b1');
    gradient.addColorStop(0.55, '#86C6D7');
    gradient.addColorStop(0.65, '#C5DED4');
    gradient.addColorStop(0.75, '#E8E2C0');
    gradient.addColorStop(0.85, '#F4D6B2');
    gradient.addColorStop(1, '#e1a9a9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.filter = 'blur(60px)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  } else {
    ctx.clearRect(0, 0, width, height);
  }
};


    const render = (t) => {

      drawBackground();
      clouds.current.forEach(cloud => drawCloud(ctx, cloud, t));



      stars.current.forEach(s => {
        const flicker = 0.3 + Math.abs(Math.sin(t * s.twinkleSpeed)) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * flicker})`;
        ctx.fill();
      });

      fallingStars.current.forEach((star, i) => {
        if (star.falling) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
          ctx.fillStyle = star.color;
          ctx.shadowBlur = 30;
          ctx.shadowColor = star.color;
          ctx.fill();

          star.x += Math.sin((star.angle * Math.PI) / 180) * star.speed;
          star.y += Math.cos((star.angle * Math.PI) / 180) * star.speed;

          if (star.y > height || star.x < 0 || star.x > width) {
            fallingStars.current.splice(i, 1);
          }
        }
      });

      if (Math.random() < 0.005) {
        fallingStars.current.push(createFallingStar(width, height, starColors));
      }

      animationRef.current = requestAnimationFrame(render);
    };

    initScene();
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
