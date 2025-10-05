import { useEffect, useState } from 'react';

/**
 * Хук визначає, чи користувач знаходиться на десктопі.
 * Працює через matchMedia (оптимальніше за resize).
 *
 * @param minWidth - мінімальна ширина для десктопу (за замовчуванням 1024px)
 * @returns {boolean} true, якщо це десктоп
 */
export default function useIsDesktop(minWidth: number = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(`(min-width: ${minWidth}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    // Початкове значення
    setIsDesktop(mediaQuery.matches);

    // Функція для оновлення стану
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    // Підписка на зміни
    mediaQuery.addEventListener('change', handleChange);

    // При демонтажі знімаємо слухач
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [minWidth]);

  return isDesktop;
}
