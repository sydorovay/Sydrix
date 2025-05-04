import { useEffect, useRef } from 'react';
import styles from './BackgroundAnimationCanvas.module.css';

const NUM_STARS = 250;
const STAR_COLORS_LIGHT = ['#ffffff', '#ffe9c4', '#d4fbff'];
const STAR_COLORS_DARK = ['#ffecb3', '#bbdefb', '#90caf9'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const createStar = (w, h, colors) => ({
  x: Math.random() * w,
  y: Math.random() * h,
  radius: Math.random() * 1.1 + 0.2,
  opacity: Math.random() * 0.7 + 0.3,
  twinkleSpeed: random(0.001, 0.004),
  color: colors[Math.floor(Math.random() * colors.length)],
  dy: random(0.5, 1.5)
});

const createFallingStar = (w, h, colors) => ({
  x: random(0, w),
  y: random(0, h), // Падає з випадкового місця
  radius: random(0.5, 1.5), // Маленькі зірки
  opacity: 1,
  speed: random(1, 2), // Невелика швидкість падіння
  angle: random(45, 75), // Кут падіння зірки (від 45 до 75 градусів)
  color: colors[Math.floor(Math.random() * colors.length)],
  falling: true,
});

const createNebulaParticle = (w, h) => ({
  x: Math.random() * w,
  y: Math.random() * h,
  radius: random(80, 200),
  dx: random(-0.05, 0.05),
  dy: random(-0.05, 0.05),
  opacity: random(0.02, 0.07),
  color: `rgba(${Math.floor(random(100, 180))}, ${Math.floor(random(50, 100))}, ${Math.floor(random(120, 200))},`,
});

export default function StarsBackgroundWithNebula({ theme }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const fallingStars = useRef([]);
  const nebulae = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Вибір кольорів залежно від теми
    const starColors = theme === 'light' ? STAR_COLORS_LIGHT : STAR_COLORS_DARK;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.current = Array.from({ length: NUM_STARS }, () => createStar(width, height, starColors));
      nebulae.current = Array.from({ length: 12 }, () => createNebulaParticle(width, height));
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (t) => {
      ctx.clearRect(0, 0, width, height);

      // Зоряна туманність
      nebulae.current.forEach(p => {
        ctx.save();
        ctx.beginPath();

        // Градієнтне світіння
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `${p.color} ${p.opacity})`);
        gradient.addColorStop(1, `${p.color} 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

        // Рух
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < -p.radius || p.x > width + p.radius) p.dx *= -1;
        if (p.y < -p.radius || p.y > height + p.radius) p.dy *= -1;
      });

      // Зірки
      stars.current.forEach(s => {
        const flicker = 0.5 + Math.abs(Math.sin(t * s.twinkleSpeed)) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * flicker})`;
        ctx.fill();
      });

      // Падаючі зірки
      fallingStars.current.forEach((star, index) => {
        if (star.falling) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
          ctx.fillStyle = star.color;
          ctx.fill();

          // Оновлення координат падаючої зірки (падіння під кутом)
          star.x += Math.sin((star.angle * Math.PI) / 180) * star.speed;  // Використовуємо кут для горизонтального руху
          star.y += Math.cos((star.angle * Math.PI) / 180) * star.speed;  // Падіння по вертикалі

          // Коли зірка падає за межі екрану, видаляємо її
          if (star.y > height || star.x < 0 || star.x > width) {
            fallingStars.current.splice(index, 1);
          }
        }
      });

      // Створення нових падаючих зірок через певний інтервал
      if (Math.random() < 0.001) { // Ще менша ймовірність падіння зірки
        fallingStars.current.push(createFallingStar(width, height, starColors));
      }

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => window.removeEventListener('resize', resize);
  }, [theme]); // Додаємо theme до залежностей useEffect

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
